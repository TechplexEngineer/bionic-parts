import type {PageServerLoad, Actions, Action} from './$types';
import OnshapeApi, {WVM} from '$lib/OnshapeAPI';
import type {GetPartsResponse} from '$lib/OnshapeAPI';
import {hasReleasedPartChanged, PartReleaseState} from "$lib/common";

import {parts as partsSchema} from "$lib/schemas";
import type {PartModel} from "$lib/schemas";

import trelloClient, {backlogListId_2024, createCardWithPhotoAndLink} from "$lib/trello";
import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";
// const trelloClient = new TrelloClient({
// 	key: import.meta.env.VITE_TRELLO_KEY,
// 	token: import.meta.env.VITE_TRELLO_TOKEN,
// 	baseRequestConfig: {
// 		adapter: fetchAdapter
// 	}
// });

const Onshape = new OnshapeApi({
    accessKey: import.meta.env.VITE_ONSHAPE_ACCESS_KEY,
    secretKey: import.meta.env.VITE_ONSHAPE_SECRET_KEY,
    debug: false
});


interface Part {
    name: string
    // id: string
    state: PartReleaseState
    rawPartData: GetPartsResponse
}


// let releasedParts: PartModel[] = [
// {
// 	partId: "JHD",
// 	releasedVersion: "4a9943812a2ae4574d5a91fa"
// },
// {
// 	partId: "JHH",
// 	releasedVersion: "4a9943812a2ae4574d5a91fa"
// }
// ];

interface CurrentRev {
    did: string,
    wv: WVM.W | WVM.V,
    wvid: string,
    eid: string,
    partId: string, //eg JHH
}

const hasPartChanged = async (c: CurrentRev, releasedPart: PartModel): Promise<boolean> => {
    //@todo prevent comparing a newer version to an older version

    if (c.wvid == releasedPart.releasedVersion) {
        return false;
    }

    const res = await Onshape.ComparePartstudios(c.did, c.wv, c.wvid, c.eid, {
        versionId: releasedPart.releasedVersion,
    });
    const hasChanged = hasReleasedPartChanged(releasedPart.partId, res)
    // console.log("hasChanged", releasedPart.partId, hasChanged, JSON.stringify(res, null, 2));
    return hasChanged
}


const getPartState = async (currentRev: CurrentRev, releasedParts: PartModel[]): Promise<PartReleaseState> => {

    // put this here for performance testing.
    return PartReleaseState.NeverReleased;

    // return PartReleaseState.NeverReleased;
    // 1. check if the part has ever been released
    const releasedPart = releasedParts.find(p => p.partId === currentRev.partId)
    if (typeof releasedPart !== "undefined") {
        if (await hasPartChanged(currentRev, releasedPart!)) {
            //  --- Yes => ChangedSinceLastRelease
            return PartReleaseState.ChangedSinceLastRelease;
        } else {
            //  --- No  => Released
            return PartReleaseState.Released;
        }

    } else {
        //  --- No  => NeverReleased
        return PartReleaseState.NeverReleased;
    }

    // 1. check if the part has ever been released
    //  --- Yes => check if this part has changed since the last release
    //  --- 2. Check if the part has changed since the last release
    //  --- --- Yes => Changed
    //  --- --- No  => Released

    //  --- No  => NeverReleased
}

const normalizeSearchParams = (params: URLSearchParams) => {
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
    } as OnshapeFrameQueryParams;
}

export const load = (async (event) => {
    const searchParams: OnshapeFrameQueryParams = normalizeSearchParams(event.url.searchParams);
    // console.log("load", searchParams);

    if (typeof searchParams.did === "undefined") {
        return {
            searchParams,
            parts: [],
            error: "No Document ID provided"
        };
    }

    const db = event.locals.db
    if (typeof db === "undefined") {
        return {
            searchParams,
            parts: [],
            error: "Error accessing database"
        };
    }
    const releasedParts = await db.select().from(partsSchema).all();

    // const versions = await Onshape.GetDocumentVersions(searchParams.did);
    // console.log("versions", versions);

    // list of parts in the currently selected version
    const rawParts = await Onshape.GetParts(searchParams.did, searchParams.wv as WVM, searchParams.wvid, searchParams.eid);
    if (!Array.isArray(rawParts)) {
        return {
            searchParams,
            parts: [],
            error: "Error retrieving parts"
        };
    }
    const parts = rawParts.map(async (p) => {
        return {
            name: p.name,
            id: p.partId,
            state: await getPartState({
                partId: p.partId,
                did: searchParams.did,
                wv: searchParams.wv,
                wvid: searchParams.wvid,
                eid: searchParams.eid,
            }, releasedParts),
            rawPartData: p
        } as Part
    })

    return {
        searchParams,
        parts: Promise.all(parts),
    };
}) satisfies PageServerLoad;


interface RequestData {
    partId: string,
    versionId: string,

    iframeParams: string
    partName: string,
    // elementName: string, //onshape tab name
    // documentName: string

}

const partRelease: Action = async ({request, locals: {db}, url: {searchParams}}) => {
    const data = Object.fromEntries(await request.formData()) as unknown as RequestData;
    const iframeParams: OnshapeFrameQueryParams = JSON.parse(data.iframeParams);
    // console.log("data", JSON.stringify(iframeParams, null, 4))

    const doc = await Onshape.GetDocument(iframeParams.did);
    // console.log("doc", doc.name)
    const element = await Onshape.GetElementMetadata(iframeParams.did, iframeParams.wv, iframeParams.wvid, iframeParams.eid)
    // console.log("raw element")
    const elementName = element.properties.find(p => p.name == "Name")?.value;
    // console.log("element", JSON.stringify(elementName,null,4))

    const version = await Onshape.GetDocumentVersionById(iframeParams.did, iframeParams.wvid)

    const parts = await Onshape.GetParts(iframeParams.did, iframeParams.wv, iframeParams.wvid, iframeParams.eid, {withThumbnails: true});
    // console.log("parts", JSON.stringify(parts.find(p => p.partId == data.partId)?.thumbnailInfo.id, null, 4))

    const cardTitle = `${doc.name} - ${elementName} - ${data.partName} - ${version.name}`;
    // // console.log("cardTitle", cardTitle)
    await db.insert(partsSchema).values({
        //projectId: 2, //@todo need to determine this based on the document ID
        partId: data.partId,
        releasedVersion: data.versionId
    }).run();

    const thumbId = parts.find(p => p.partId == data.partId)?.thumbnailInfo.id;
    const thumb = await Onshape.GetPartThumbnail(thumbId, 600, 340);

    await createCardWithPhotoAndLink({
        cardTitle: cardTitle,
        cardDesc: "",
        trelloListId: backlogListId_2024,
        did: iframeParams.did,
        wv: iframeParams.wv,
        wvid: iframeParams.wvid,
        eid: iframeParams.eid,
        server: iframeParams.server,
        docName: doc.name,
        thumb: await thumb.blob()
    })


    return {};
};

export const actions = {

    release: partRelease,
    re_release: partRelease
} satisfies Actions;