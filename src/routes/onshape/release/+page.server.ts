import type {Actions, PageServerLoad} from './$types';
import {PartReleaseState} from "./PartReleaseState";
import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";
import {base64, filterProjects} from "$lib/util";
import type {BTPartMetadataInfo, GetPartsWMVERequest} from "$lib/OnshapeAPI";
import type {OauthStateData} from "$lib/onshape";
import {partRelease} from "./PartRelease";
import type {ProjectModel} from "$lib/schema";


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


export const load = (async ({url, cookies, locals: {db, onshape: Onshape}}) => {


    const searchParams = normalizeSearchParams(url.searchParams);

    if (typeof searchParams.did === "undefined") {
        return {
            searchParams,
            error: "No Document ID provided",
            tabName: "",
            parts: [],
            subsystemName: "",
            projects: [],
        };
    }

    if (searchParams.wv !== "v") {
        return {
            searchParams,
            error: "Parts can only be released from a version",
            tabName: "",
            parts: [],
            subsystemName: "",
            projects: [],
        };
    }


    if (!Onshape.client) {
        console.log("No Onshape client found in session", Onshape.client);
        throw Onshape.loginRedirect();
        // login should always throw a redirect, but need this for typescript to understand
    }
    let userInfo;
    try {
        userInfo = await Onshape.client.UserApi.sessionInfo();
    } catch (e) {
        //@todo if typeof e == "ResponseError" then
        throw Onshape.loginRedirect();
    }

    // ensure the user is on a team that has access to the project
    const teamInfo = await Onshape.client.TeamApi.find({});

    // console.log("teamInfo", teamInfo?.items?.map(t => ({id: t.id, name: t.name})));

    // find projects that have this document in them
    const matchingProjects = await db.getAllProjects()
    // console.log("matchingProjects", JSON.stringify(matchingProjects, null, 2))

    const filteredProjects = filterProjects(matchingProjects, teamInfo, userInfo.id);
    // console.log("filteredProjects", JSON.stringify(filteredProjects, null, 2));
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
    const partInDoc = await Onshape.client.PartApi.getPartsWMVE(getPartsParams);
    const pageParts = partInDoc.map((p) => ({
        part: p, state: PartReleaseState.NeverReleased //await getPartState(p)
    }));

    const tab = await Onshape.client.MetadataApi.getWMVEMetadata({
        did: searchParams.did,
        wvm: searchParams.wv as any,
        wvmid: searchParams.wvid,
        eid: searchParams.eid
    });

    const tabName = tab.properties?.find(p => p.name == "Name")?.value as unknown as string;
    const title3SubsystemName = tab.properties?.find(p => p.name == "Title 3")?.value as unknown as string;
    // if (!title3SubsystemName) {
    //     return {
    //         searchParams,
    //         tabName,
    //         parts: [],
    //         subsystemName: title3SubsystemName,
    //         error: `Subsystem name MUST be set in Title 3 field of ${tabName}. (Close and reopen the tab to refresh the data.)`,
    //         projects: [],
    //     };
    // }

    return {
        searchParams,
        tabName,
        parts: pageParts,
        subsystemName: title3SubsystemName,
        projects: filteredProjects,
    }
}) satisfies PageServerLoad<{
    searchParams: OnshapeFrameQueryParams,
    error?: string
    tabName: string,
    parts: { part: BTPartMetadataInfo, state: PartReleaseState }[],
    subsystemName: string,
    projects: ProjectModel[],
}>;


export const actions = {

    release: partRelease,
    re_release: partRelease,

} satisfies Actions;
