import type { PageServerLoad, Actions } from './$types';
import OnshapeApi, {WVM} from '$lib/OnshapeAPI';
import {hasReleasedPartChanged, PartReleaseState} from "$lib/common";

import {parts as partsSchema} from "$lib/schemas";
import type {PartModel} from "$lib/schemas";

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

const Onshape = new OnshapeApi({
	accessKey: accessKey,
	secretKey: secretKey,
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
    server: string,
    userId: string,
}

interface Part {
	name: string
	// id: string
	state: PartReleaseState
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
interface QueryResult {
	onshapePartId: string,
	onshapeReleasedVersion: string
}

export const load = (async (event) => {
    const searchParams: OnshapeFrameQueryParams = normalizeSearchParams(event.url.searchParams);
	console.log("load", searchParams);

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
	console.log("releasedParts", releasedParts);
	// const res1 = await db.exec(`CREATE TABLE IF NOT EXISTS releasedParts (id INTEGER, projectId INTEGER, onshapePartId TEXT, onshapeReleasedVersion TEXT, userNotes TEXT )`);
	// // console.log(res1);
	// const res = await db.prepare("SELECT id, projectId, onshapePartId, onshapeReleasedVersion, userNotes FROM releasedParts").all()
	// releasedParts = (res.results as unknown as QueryResult[]).map((r) => {
	// 	return {
	// 		partId: r.onshapePartId,
	// 		releasedVersion: r.onshapeReleasedVersion
	// 	}
	// });
	// console.log("releasedParts", releasedParts);


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
			}, releasedParts)
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
}

export const actions = {

	release: async ({ request, locals: {db}}) => {

		const data = Object.fromEntries(await request.formData()) as unknown as RequestData;
		await db.insert(partsSchema).values({partId: data.partId, releasedVersion: data.versionId}).run();

		return {};
	},
	re_release: async ({ request, locals: {db} }) => {
		console.log("re-Release"); //@todo
		return {};
	}
} satisfies Actions;