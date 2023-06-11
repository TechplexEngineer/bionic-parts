import type {Action, Actions, PageServerLoad} from './$types';
import {PartReleaseState} from "./PartReleaseState";

import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";
import trelloClient, {
    backlogListId_2024,
    boardId_2024,
    memberId_blake,
    memberId_chrisj, memberId_scott,
    validLabelColors
} from "$lib/trello";
import type {PartRelease} from "./PartRelease";
import {base64, getNiceDate, ordinalSuffixOf} from "$lib/util";
import {redirect} from "@sveltejs/kit";
import {GetPartsWMVERequest, Oauth} from "$lib/OnshapeAPI";
import type {OauthStateData} from "$lib/onshape";
import {cookieName, getOauthTokenFromCookie, getOnshapeClientFromCookies, hasInitialToken} from "$lib/onshape";
import {MfgMethods, Printers, PrusaPrinterMaterials} from "./options";
import type {WebhookUserData} from "../../api/onshape/webhook/webhookUserData";
import {getPartState} from "./partState";


const normalizeSearchParams = (params: URLSearchParams): OnshapeFrameQueryParams => {
    const objParams = Object.fromEntries(params);

    return {
        did: objParams.documentId || objParams.did,
        wv: objParams.workspaceOrVersion || objParams.wv,
        wvid: objParams.workspaceOrVersionId || objParams.wvid,
        eid: objParams.elementId || objParams.eid,
        clientId: objParams.clientId,
        companyId: objParams.companyId,
        locale: objParams.locale,
        server: objParams.server,
        userId: objParams.userId,
        cfg: objParams.cfg,
    };
}
const redirectUrl = import.meta.env.VITE_ONSHAPE_OAUTH_REDIRECT_URI
if (!redirectUrl) {
    throw new Error("No VITE_ONSHAPE_OAUTH_REDIRECT_URI set");
}
const clientId = import.meta.env.VITE_ONSHAPE_OAUTH_CLIENT_ID;
if (!clientId) {
    throw new Error("No VITE_ONSHAPE_OAUTH_CLIENT_ID set");
}

export const load = (async (event) => {
    const searchParams = normalizeSearchParams(event.url.searchParams);

    if (typeof searchParams.did === "undefined") {
        return {
            searchParams,
            parts: [],
            error: "No Document ID provided"
        };
    }

    if (searchParams.wv !== "v") {
        return {
            searchParams,
            parts: [],
            error: "Parts can only be released from a version"
        };
    }


    // check if the user is logged in
    // if not, send them to onshape to authenticate
    if (!await hasInitialToken(event.cookies, cookieName)) {
        const authUrl = Oauth.buildAuthorizeUrl({
            clientId: clientId,
            redirectUrl: redirectUrl,
            state: base64(JSON.stringify({searchParams, action: "release"} satisfies OauthStateData)),
            companyId: searchParams.companyId
        })
        throw redirect(307, authUrl.toString());
    }

    const Onshape = await getOnshapeClientFromCookies(event.cookies, cookieName);

    const getPartsParams: GetPartsWMVERequest = {
        did: searchParams.did,
        wvm: searchParams.wv,
        wvmid: searchParams.wvid,
        eid: searchParams.eid,
        withThumbnails: true
    };
    if (searchParams.cfg && searchParams.cfg !== "{$configuration}") {
        getPartsParams._configuration = searchParams.cfg;
    }
    const partInDoc = await Onshape.PartApi.getPartsWMVE(getPartsParams);
    const pageParts = partInDoc.map((p) => ({
        part: p, state: PartReleaseState.NeverReleased //await getPartState(p)
    }));

    const tab = await Onshape.MetadataApi.getWMVEMetadata({
        did: searchParams.did,
        wvm: searchParams.wv as any,
        wvmid: searchParams.wvid,
        eid: searchParams.eid
    });

    const title3SubsystemName = tab.properties?.find(p => p.name == "Title 3")?.value;
    const tabName = tab.properties?.find(p => p.name == "Name")?.value;
    if (!title3SubsystemName) {
        return {
            searchParams,
            parts: [],
            title3SubsystemName,
            error: `Subsystem name MUST be set in Title 3 field of ${tabName}. (Close and reopen the tab to refresh the data.)`
        };
    }

    return {
        searchParams,
        tabName,
        parts: pageParts,
        subsystemName: title3SubsystemName,
    }
}) satisfies PageServerLoad;

const partRelease: Action = async ({request, url: {searchParams}, cookies}) => {
    console.log("Action!");
    const data = (await request.json()) as PartRelease;
    // console.log("data", data);
    //@todo validate data

    const Onshape = await getOnshapeClientFromCookies(cookies, cookieName);

    const currentUser = await Onshape.UserApi.sessionInfo();

    let thumbnailBlob = null;
    const thumbnailInfo = data.part.thumbnailInfo

    if (thumbnailInfo) {
        const bestThumb = thumbnailInfo.sizes?.find(s => s.size == "600x340") || (thumbnailInfo.sizes && thumbnailInfo.sizes[0]);
        if (bestThumb && bestThumb.href) {
            const thumbnailLink = bestThumb.href;
            const thumbnailLinkPath = "/thumbnails" + thumbnailLink.split("/thumbnails")[1];

            // get the thumbnail
            const res = await Onshape.request.raw({
                method: "GET",
                path: thumbnailLinkPath,
                initOverrides: {
                    headers: {
                        Accept: "image/png"
                    }
                }
            });
            thumbnailBlob = await res.blob();
        }
    }


    const version = await Onshape.DocumentApi.getVersion({did: data.params.did, vid: data.params.wvid})
    const doc = await Onshape.DocumentApi.getDocument({did: data.params.did});
    const tab = await Onshape.MetadataApi.getWMVEMetadata({
        did: data.params.did,
        wvm: data.params.wv as any,
        wvmid: data.params.wvid,
        eid: data.params.eid
    });
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
        idList: backlogListId_2024,
        pos: "top",
    });

    await trelloClient.cards.createCardAttachment({
        id: card.id,
        url: doc.href,
        name: `Part released from: '${doc.name}'`
    });

    if (data.cotsLink) {
        await trelloClient.cards.createCardAttachment({
            id: card.id,
            url: data.cotsLink,
            name: `Purchase ${data.qty}: '${data.cotsLink}'`
        });

        await trelloClient.cards.addCardMember({
            id: card.id,
            value: memberId_blake
        })
    }

    if (thumbnailBlob) {
        await trelloClient.cards.createCardAttachment({
            id: card.id,
            file: thumbnailBlob,
            name: "Part Image",
            mimeType: "image/png",
        });
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
    }
    if (data.subsystemName) {
        const labels = await trelloClient.boards.getBoardLabels({
            id: boardId_2024,
        });

        // pick a random color from the list of valid label colors
        const labelColor = validLabelColors[Math.floor(Math.random() * validLabelColors.length)]

        let label = labels.find(l => (l.name == data.subsystemName))
        if (!label) {
            // create label
            label = await trelloClient.boards.createBoardLabel({
                id: boardId_2024,
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
    } else {
        console.log("No subsystem name")
    }

    if (data.mfgMethod == MfgMethods.Machined) {
        // attach step file
        console.log("create webhook");

        // this is safe because we should error out above if the cookie is missing
        const tokenInfo = getOauthTokenFromCookie(cookies, cookieName)!;
        console.log("tokenInfo", tokenInfo);

        const webhookData = {
            cardId: card.id,
            tokenInfo: tokenInfo,
        } satisfies WebhookUserData
        const wh = await Onshape.WebhookApi.createWebhook({
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
        console.log("webhook created", wh);


        console.log("-------------request translation\n\n");
        const trans = await Onshape.PartStudioApi.createPartStudioTranslation({
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

        const res = await Onshape.request.exportPartStudioStl({
            did: data.params.did,
            wvm: "v",
            wvmid: data.params.wvid,
            eid: data.params.eid,
            units: "millimeter", // @todo if you put MILLIMETER you get an invalid stl file, should get an error
        }, await getOauthTokenFromCookie(cookies, cookieName)!);


        await trelloClient.cards.createCardAttachment({
            id: card.id,
            file: await res.blob(),
            name: `${cardName}.stl`
        })

        if (data.printerUsed == Printers.FormLabs) {
            // tag chris
            await trelloClient.cards.addCardMember({
                id: card.id,
                value: memberId_chrisj
            })
        }
        if (data.printerUsed == Printers.Prusa && data.printerMaterialUsed == PrusaPrinterMaterials.NylonX) {
            // tag scott
            await trelloClient.cards.addCardMember({
                id: card.id,
                value: memberId_scott
            })
        }

    }

    // await Onshape.TranslationApi.createTranslation()


    return {}

};

export const actions = {

    release: partRelease,
    re_release: partRelease
} satisfies Actions;