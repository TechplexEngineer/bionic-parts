import type {PageServerLoad, Actions, Action} from './$types';
import {PartReleaseState} from "./PartReleaseState";

import Onshape from "$lib/onshape";
import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";
import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
import trelloClient, {backlogListId_2024} from "$lib/trello";
import type {PartRelease} from "./PartRelease";
import {getNiceDate, ordinalSuffixOf} from "$lib/util";
import {redirect} from "@sveltejs/kit";



interface Part {
    part: BTPartMetadataInfo,
    state: PartReleaseState
}


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
    throw new Error("No Onshape oauth redirect url set");
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
    const base64 = btoa;

    // check if the user is logged in
    // if not, send them to onshape to
    const tokenInfo = event.cookies.get('sessionid');
    console.log("tokenInfo", tokenInfo);
    const isLoggedIn = !!tokenInfo;
    if (!isLoggedIn) {
        // Your application must first must direct the user to
        // https://oauth.onshape.com/oauth/authorize?response_type=code&client_id=<your client id>.
        // You may optionally add the redirect_uri, scope, state and company_id query parameters.
        const authUrl = new URL("https://oauth.onshape.com/oauth/authorize");
        authUrl.searchParams.append("response_type", "code"); //required
        authUrl.searchParams.append("client_id", searchParams.clientId); //required
        authUrl.searchParams.append("redirect_uri", redirectUrl); // optional
        // authUrl.searchParams.append("scope", ); // optional
        authUrl.searchParams.append("state", base64(JSON.stringify({searchParams}))); // optional, need this to tell the app what doc we are in after all the redirects
        authUrl.searchParams.append("company_id", searchParams.companyId); // optional
        // console.log("redirectUrl", authUrl.toString())
        throw redirect(307, authUrl.toString());
    }

    const partInDoc = await Onshape.PartApi.getPartsWMVE({
        ...searchParams,
        wvm: searchParams.wv,
        wvmid: searchParams.wvid,
        eid: searchParams.eid,
        withThumbnails: true,
        // _configuration: searchParams.cfg, //@todo
    });
    const pageParts = partInDoc.map((p) => ({part: p, state: PartReleaseState.NeverReleased}));

    return {
        searchParams,
        parts: pageParts
    }
}) satisfies PageServerLoad;

const partRelease: Action = async ({request, url: {searchParams}}) => {
    console.log("Action!");
    const data = (await request.json()) as PartRelease;
    // console.log("data", data);
    //@todo validate data

    let thumbnailBlob = null;
    const thumbnailInfo = data.part.thumbnailInfo

    if (thumbnailInfo) {
        const bestThumb = thumbnailInfo.sizes?.find(s => s.size == "600x340") || (thumbnailInfo.sizes && thumbnailInfo.sizes[0]);
        if (bestThumb && bestThumb.href) {
            const thumbnailLink = bestThumb.href;
            const thumbnailLinkPath = "/thumbnails" + thumbnailLink.split("/thumbnails")[1];

            // get the thumbnail
            const res = await Onshape.RawRequest.rawRequest({
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

    const card = await trelloClient.cards.createCard({
        name: `${data.part.name} - ${version.name}`,
        desc: `Part Number: ${data.part.partNumber || "unset"}

${data.notes}

Document Name: ${doc.name}
Tab Name: ${tabName}
Release Date: ${getNiceDate()}`,
        idList: backlogListId_2024,
        pos: "top",
    });

    await trelloClient.cards.createCardAttachment({
        id: card.id,
        url: doc.href,
        name: `Part released from: '${doc.name}'`
    });

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


    return {}

};

export const actions = {

    release: partRelease,
    re_release: partRelease
} satisfies Actions;