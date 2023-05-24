import type {PageServerLoad, Actions, Action} from './$types';
import {PartReleaseState} from "./PartReleaseState";

import Onshape from "$lib/onshape";
import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";
import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
import trelloClient, {backlogListId_2024} from "$lib/trello";
import onshape from "$lib/onshape";
import type {PartRelease} from "./PartRelease";
import {getNiceDate, ordinalSuffixOf} from "$lib/util";


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

let pageParts: Part[] = [];

export const load = (async (event) => {
    const searchParams = normalizeSearchParams(event.url.searchParams);
    // console.log("load", searchParams);

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

    const partInDoc = await Onshape.PartApi.getPartsWMVE({
        ...searchParams,
        wvm: searchParams.wv,
        wvmid: searchParams.wvid,
        eid: searchParams.eid,
        withThumbnails: true,
        // _configuration: searchParams.cfg,
    });
    pageParts = partInDoc.map((p) => ({part: p, state: PartReleaseState.NeverReleased}));

    return {
        searchParams,
        parts: pageParts
    }


}) satisfies PageServerLoad<{ parts: Part[] }>;


interface RequestData {
    partId: string,
    versionId: string,

    iframeParams: string | OnshapeFrameQueryParams
    partName: string,
    partJson: string | BTPartMetadataInfo,


}

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

Document Name: ${doc.name}
Tab Name: ${tabName}
Release Date: ${getNiceDate()}

${data.notes}`,
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