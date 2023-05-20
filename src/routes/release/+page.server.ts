import type { PageServerLoad, Actions } from './$types';
import OnshapeApi, {WVM} from '$lib/OnshapeAPI';
import {hasReleasedPartChanged, PartReleaseState} from "$lib/common";
import type {BTRootDiffInfo} from "$lib/OnshapeAPI/BTRootDiffInfo";

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

const Onshape = new OnshapeApi({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: true
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

interface ReleasedParts {
	// partQuery: string,
	partId: string,
	releasedVersion: string
}

const releasedParts: ReleasedParts[] = [
	{
		partId: "JHD",
		releasedVersion: "4a9943812a2ae4574d5a91fa"
	},
	{
		partId: "JHH",
		releasedVersion: "4a9943812a2ae4574d5a91fa"
	}
];

interface CurrentRev {
	did: string,
	wv: WVM.W | WVM.V,
	wvid: string,
	eid: string,
	partId: string, //eg JHH
}

const hasPartChanged = async (c:CurrentRev, releasedPart: ReleasedParts): Promise<boolean> => {
	//@todo prevent comparing a newer version to an older version

	if (c.wvid == releasedPart.releasedVersion) {
		return false;
	}

	const res = await Onshape.ComparePartstudios(c.did, c.wv, c.wvid, c.eid, {
		versionId: releasedPart.releasedVersion,
	});
	return hasReleasedPartChanged(releasedPart.partId, res)
}


const getPartState = async (currentRev: CurrentRev): Promise<PartReleaseState> => {

	// return PartReleaseState.NeverReleased;
	// 1. check if the part has ever been released
	const releasedPart = releasedParts.find(p => p.partId === currentRev.partId)
	console.log(currentRev.partId, releasedPart);
	if (typeof releasedPart !== "undefined") {
		if (await hasPartChanged(currentRev, releasedPart)) {
			console.log(currentRev.partId, "changed");
			//  --- Yes => ChangedSinceLastRelease
			return PartReleaseState.ChangedSinceLastRelease;
		} else {
			console.log(currentRev.partId, "released");
			//  --- No  => Released
			return PartReleaseState.Released;
		}

	} else {
		console.log(currentRev.partId, releasedPart);
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

	const versions = await Onshape.GetDocumentVersions(searchParams.did);
	console.log("versions", versions);

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
			})
		} as Part
	})

	return {
        searchParams,
		parts: Promise.all(parts),
	};
}) satisfies PageServerLoad;



export const actions = {

	release: async ({ request, cookies }) => {
		console.log("Release");
		return {};
	},
	re_release: async ({ request, cookies }) => {
		console.log("re-Release");
		return {};
	}
} satisfies Actions;