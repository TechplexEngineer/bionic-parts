import type { PageServerLoad, Actions } from './$types';
import OnshapeApi, {WVM} from '$lib/OnshapeAPI';
import type {GetPartsResponse} from '$lib/OnshapeAPI';
import {hasReleasedPartChanged, PartReleaseState} from "$lib/common";

import {parts as partsSchema} from "$lib/schemas";
import type {PartModel} from "$lib/schemas";

import { TrelloClient } from 'trello.js';
// import fetchAdapter from "@vespaiach/axios-fetch-adapter";

const trelloClient = new TrelloClient({
	key: import.meta.env.VITE_TRELLO_KEY,
	token: import.meta.env.VITE_TRELLO_TOKEN,
	// baseRequestConfig: {
	// 	adapter: fetchAdapter
	// }
});

const Onshape = new OnshapeApi({
	accessKey: import.meta.env.VITE_ONSHAPE_ACCESS_KEY,
	secretKey: import.meta.env.VITE_ONSHAPE_SECRET_KEY,
	debug: false
});

interface OnshapeFrameQueryParams {
    did: string,
    wv: WVM.W | WVM.V, //w or v
    cfg: string,
    wvid: string
    eid: string,
    clientId: string,
    companyId: string,
    locale: string,
    server: string, //https://cad.onshape.com
    userId: string,
}

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

const hasPartChanged = async (c:CurrentRev, releasedPart: PartModel): Promise<boolean> => {
	//@todo prevent comparing a newer version to an older version

	if (c.wvid == releasedPart.releasedVersion) {
		return false;
	}

	const res = await Onshape.ComparePartstudios(c.did, c.wv, c.wvid, c.eid, {
		versionId: releasedPart.releasedVersion,
	});
	return hasReleasedPartChanged(releasedPart.partId, res)
}


const getPartState = async (currentRev: CurrentRev, releasedParts: PartModel[]): Promise<PartReleaseState> => {

	// return PartReleaseState.NeverReleased;
	// 1. check if the part has ever been released
	const releasedPart = releasedParts.find(p => p.partId === currentRev.partId)
	if (typeof releasedPart !== "undefined") {
		if (await hasPartChanged(currentRev, releasedPart)) {
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

export const actions = {

	release: async ({ request, locals: {db}, url:{searchParams}}) => {
		const data = Object.fromEntries(await request.formData()) as unknown as RequestData;
		const iframeParams: OnshapeFrameQueryParams = JSON.parse(data.iframeParams);
		console.log("data", JSON.stringify(iframeParams,null,4))

		const doc = await Onshape.GetDocument(iframeParams.did);
		console.log("doc", doc.name)
		const element = await Onshape.GetElementMetadata(iframeParams.did, iframeParams.wv, iframeParams.wvid, iframeParams.eid)
		console.log("raw element")
		const elementName = element.properties.find(p=> p.name == "Name")?.value;
		console.log("element", JSON.stringify(elementName,null,4))

		const version = await Onshape.GetDocumentVersionById(iframeParams.did, iframeParams.wvid)

		const cardTitle = `${doc.name} - ${elementName} - ${data.partName} - ${version.name}`;
		// console.log("cardTitle", cardTitle)
		console.log("here")
		await db.insert(partsSchema).values({
			//projectId: 2, //@todo need to determine this based on the document ID
			partId: data.partId,
			releasedVersion: data.versionId
		}).run();
		console.log("here2")

// 		const backlogListId = "6468e280779ad802bb3775d4";
// 		await trelloClient.cards.createCard({
// 			name: `${data.partName} - ${version.name}`,
// 			desc: ` ${cardTitle}
// Part released from: ${iframeParams.server}/documents/${iframeParams.did}/${iframeParams.wv}/${iframeParams.wvid}/e/${iframeParams.eid}
// 			`,
// 			idList: backlogListId,
// 		});
// 		console.log("here3")

		return {};
	},
	re_release: async ({ request, locals: {db} }) => {
		console.log("re-Release"); //@todo
		return {};
	}
} satisfies Actions;