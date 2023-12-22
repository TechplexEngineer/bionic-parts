import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";
import {FormLabsPrinterMaterials, Machines, Printers, PrusaPrinterMaterials} from "./options";
import {MfgMethods} from "./options";
import trelloClient, {
    memberId_blake,
    memberId_chrisj,
    memberId_scott,
    validLabelColors
} from "$lib/trello";
import {onshapeCookieName, getOauthTokenFromCookie, getOnshapeClientFromCookies} from "$lib/onshape";
import type {WebhookUserData} from "../../api/onshape/webhook/webhookUserData";
import type {Action} from "@sveltejs/kit";
import {accessIncludesTeam, getNiceDate, ordinalSuffixOf} from "$lib/util";


const onshapeTeamId_frc4909 = "5bccf2e222e4bf1493e21d19"

export interface PartRelease {
    part: BTPartMetadataInfo,
    qty: number,
    notes: string,
    params: OnshapeFrameQueryParams,
    subsystemName: string,

    mfgMethod: MfgMethods
    machinesUsed: Machines[]
    printerUsed: Printers
    printerMaterialUsed: PrusaPrinterMaterials | FormLabsPrinterMaterials
    cotsLink: string,

    // what project is this part for?
    projectId: number
}

export const partRelease: Action = async ({request, url: {searchParams}, cookies, locals: {db, onshape: Onshape}}) => {
    console.log("1. Part Release");
    const data = (await request.json()) as PartRelease;
    // console.log("data", data);
    //@todo validate data

    const project = await db.getProjectById(data.projectId);

    // const Onshape = await getOnshapeClientFromCookies(cookies, onshapeCookieName);
    if (!Onshape.client) {
        throw Onshape.loginRedirect()
    }

    const currentUser = await Onshape.client.UserApi.sessionInfo();
    console.log("2. currentUser", currentUser);
    let thumbnailBlob = null;
    const thumbnailInfo = data.part.thumbnailInfo

    if (thumbnailInfo) {
        const bestThumb = thumbnailInfo.sizes?.find(s => s.size == "600x340") || (thumbnailInfo.sizes && thumbnailInfo.sizes[0]);
        if (bestThumb && bestThumb.href) {
            const thumbnailLink = bestThumb.href;
            const thumbnailLinkPath = "/thumbnails" + thumbnailLink.split("/thumbnails")[1];
            try {
            // get the thumbnail
            const res = await Onshape.client.request.raw({
                method: "GET",
                path: thumbnailLinkPath,
                initOverrides: {
                    headers: {
                        Accept: "image/png"
                    }
                }
            });
            thumbnailBlob = await res.blob();
            } catch (e) {
                console.log("3. thumbnailBlob", e);
            }
        }
    }


    const version = await Onshape.client.DocumentApi.getVersion({did: data.params.did, vid: data.params.wvid});
    console.log('4. version', version);
    
    const doc = await Onshape.client.DocumentApi.getDocument({did: data.params.did});
    onsole.log("5. doc", doc);
    const tab = await Onshape.client.MetadataApi.getWMVEMetadata({
        did: data.params.did,
        wvm: data.params.wv as any,
        wvmid: data.params.wvid,
        eid: data.params.eid
    });
    console.log("6. tab", tab);

    await db.addReleasedPart({
        projectId: data.projectId,
        data: {
            partId: data.part.partId!,
            documentId: data.params.did,
            elementId: data.params.eid,
            releasedFromVersion: {
                versionId: data.params.wvid,
                versionName: version.name!,
                versionDate: version.createdAt?.toISOString()!, // unclear when this might be undefined
            },
        }
    })
    console.log("7. db");
    const tabName = tab.properties?.find(p => p.name == "Name")?.value;

    const cardName = `${data.part.name} - ${version.name}`;
    const card = await trelloClient.cards.createCard({
        name: cardName,
        desc: `Part Number: ${data.part.partNumber || "unset"}
${data.printerUsed ? `Printer Used: ${data.printerUsed}` : ""}
${data.printerMaterialUsed ? `Material Used: ${data.printerMaterialUsed}` : ""}
${data.machinesUsed ? `Machines Used: ${data.machinesUsed.join(", ")}` : ""}

${data.notes}

Document Name: ${doc.name}
Tab Name: ${tabName}
Release Date: ${getNiceDate()}
Released By: ${currentUser.name}
Version: ${version.name}
${data.cotsLink ? `COTS Link: ${data.cotsLink}` : ""}`,
        idList: project.data.trello.listId,
        pos: "top",
    });
    console.log("8. card");

    await trelloClient.cards.createCardAttachment({
        id: card.id,
        url: doc.href,
        name: `Part released from: '${doc.name}'`
    });
    console.log("9. attachment");

    if (data.cotsLink) {
        await trelloClient.cards.createCardAttachment({
            id: card.id,
            url: data.cotsLink,
            name: `Purchase ${data.qty}: '${data.cotsLink}'`
        });

        if (accessIncludesTeam(project.data.onshape.access, onshapeTeamId_frc4909)) {
            await trelloClient.cards.addCardMember({
                id: card.id,
                value: memberId_blake
            })
        }
        console.log("10. cots");
    }

    if (thumbnailBlob) {
        await trelloClient.cards.createCardAttachment({
            id: card.id,
            file: thumbnailBlob,
            name: "Part Image",
            mimeType: "image/png",
        });
        console.log("11. thumbnail");
    }

    if (typeof data.qty !== "undefined") {
        const checklist = await trelloClient.checklists.createChecklist({
            name: `Quantity ${data.qty}`,
            pos: "top",
            idCard: card.id
        });

        for (let i = 1; i <= data.qty; i++) {
            await trelloClient.checklists.createChecklistCheckItems({
                id: checklist.id,
                name: `Make ${ordinalSuffixOf(i)} part`,
                pos: "bottom",
            })
        }
        console.log("12. checklist");
    }
    if (data.subsystemName) {
        const labels = await trelloClient.boards.getBoardLabels({
            id: project.data.trello.boardId,
        });

        // pick a random color from the list of valid label colors
        const labelColor = validLabelColors[Math.floor(Math.random() * validLabelColors.length)]

        let label = labels.find(l => (l.name == data.subsystemName))
        if (!label) {
            // create label
            label = await trelloClient.boards.createBoardLabel({
                id: project.data.trello.boardId,
                name: data.subsystemName,
                color: labelColor
            })
        }
        if (!label) {
            console.log("Failed to create label")
        } else {
            //add label to card
            await trelloClient.cards.addCardLabel({
                id: card.id,
                value: label.id
            })
        }
        console.log("13. subsystemName", data.subsystemName);
    } else {
        console.log("13. No subsystem name")
    }

    if (data.mfgMethod == MfgMethods.Machined) {
        // attach step file
        console.log("create webhook");

        // this is safe because we should error out above if the cookie is missing
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const tokenInfo = getOauthTokenFromCookie(cookies, onshapeCookieName)!;
        // console.log("tokenInfo", tokenInfo);

        const webhookData = {
            cardId: card.id,
            tokenInfo: tokenInfo,
        } satisfies WebhookUserData
        const wh = await Onshape.client.WebhookApi.createWebhook({
            bTWebhookParams: {
                // "clientId": "string",
                // "companyId": "string",
                // "id": "string",
                "data": JSON.stringify(webhookData), // data that can be used ot identify webhook
                "description": `Webhook for step file translation ${cardName}`, // message that is retrieved when webhooks are listed
                "documentId": data.params.did,
                // "externalSessionId": "string", // is this for client apps?
                "events": [
                    "onshape.model.translation.complete"
                ],
                // "filter": "string", // what are th syntax options?
                // "isTransient": true, // what does this mean?
                // "linkDocumentId": "string", // when does this need to be provided?
                "options": {
                    "collapseEvents": true
                },
                "url": "https://parts.team4909.org/api/onshape/webhook", // where to callback to
                // "projectId": "string", // does this have to do with release projects?
                // "userId": "string", // does this matter?
                // "versionId": "string", // how are these different than a filter?
                // "workspaceId": "string"
                // "elementId": "string",
                // "partId": "string",
                // "folderId": "string",
            }
        });
        // console.log("webhook created", wh);


        console.log("-------------request translation\n\n");
        const trans = await Onshape.client.PartStudioApi.createPartStudioTranslation({
            did: data.params.did,
            wv: data.params.wv,
            wvid: data.params.wvid,
            eid: data.params.eid,
            bTTranslateFormatParams: {
                formatName: "STEP",
                storeInDocument: false,
                partIds: data.part.partId,
                // linkDocumentId
                // _configuration
            }
        })

        console.log("translation response", trans)
    } else if (data.mfgMethod == MfgMethods.Printed) {
        // attach stl file
        console.log("attach stl file");

        const res = await Onshape.client.request.exportPartStudioStl({
            did: data.params.did,
            wvm: "v",
            wvmid: data.params.wvid,
            eid: data.params.eid,
            partIds: data.part.partId,
            units: "millimeter", // @todo if you put MILLIMETER you get an invalid stl file, should get an error
            angleTolerance: .04, //(degree)
            chordTolerance: 0.06, //(millimeter)
            minFacetWidth: 0.0254, //(millimeter)
        }, await getOauthTokenFromCookie(cookies, onshapeCookieName)!);


        await trelloClient.cards.createCardAttachment({
            id: card.id,
            file: await res.blob(),
            name: `QTY ${data.qty} ${cardName} .stl`
        })

        if (data.printerUsed == Printers.FormLabs) {
            if (accessIncludesTeam(project.data.onshape.access, onshapeTeamId_frc4909)) {
                // tag chris
                await trelloClient.cards.addCardMember({
                    id: card.id,
                    value: memberId_chrisj
                })
            }
        }
        if (data.printerUsed == Printers.Prusa && data.printerMaterialUsed == PrusaPrinterMaterials.NylonX) {
            if (accessIncludesTeam(project.data.onshape.access, onshapeTeamId_frc4909)) {
                // tag scott
                await trelloClient.cards.addCardMember({
                    id: card.id,
                    value: memberId_scott
                })
            }
        }

    }

    return {}; //success
};
