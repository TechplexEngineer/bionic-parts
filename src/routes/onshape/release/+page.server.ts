import type {Actions, PageServerLoad} from './$types';
import {PartReleaseState} from "./PartReleaseState";

import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";

import {base64} from "$lib/util";
import {redirect} from "@sveltejs/kit";
import {type BTPartMetadataInfo, type GetPartsWMVERequest, Oauth} from "$lib/OnshapeAPI";
import type {OauthStateData} from "$lib/onshape";
import {cookieName, getOnshapeClientFromCookies, hasInitialToken} from "$lib/onshape";
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


export const load = (async (event) => {
    const redirectUrl = import.meta.env.VITE_ONSHAPE_OAUTH_REDIRECT_URI
    if (!redirectUrl) {
        throw new Error("No VITE_ONSHAPE_OAUTH_REDIRECT_URI set");
    }
    const clientId = import.meta.env.VITE_ONSHAPE_OAUTH_CLIENT_ID;
    if (!clientId) {
        throw new Error("No VITE_ONSHAPE_OAUTH_CLIENT_ID set");
    }

    const searchParams = normalizeSearchParams(event.url.searchParams);

    if (typeof searchParams.did === "undefined") {
        return {
            searchParams,
            error: "No Document ID provided"
        };
    }

    if (searchParams.wv !== "v") {
        return {
            searchParams,
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

    const db = event.locals.db;

    const teamInfo = await Onshape.TeamApi.find({});

    // console.log("team", team?.items?.map(t => t.id));

    // find projects that have this document in them
    const matchingProjects = await db.getProjectsByOnshapeDocId(searchParams.did)
    // console.log("matchingProjects", JSON.stringify(matchingProjects, null, 2))

    const filteredProjects = matchingProjects.filter(p => {
        // ensure the user is on a team that has access to the project
        const teams = teamInfo.items?.map(t => t.id) || [];
        if (!teams || teams.length === 0) {
            return false;
        }

        // teams.includes(p.data.onshape.access.
        // console.log("teams", p?.data?.onshape?.access)
        // check read
        // check write
        const teamsWithWrite = p?.data?.onshape?.access.write?.map((w) => (w.teamId)) || []
        const teamsWithRead = p?.data?.onshape?.access.read?.map((w) => (w.teamId)) || []
        const perm = teamsWithWrite.concat(teamsWithRead)

        // find intersection of teams and perm
        const res = teams?.filter(t => t && perm.includes(t))
        // console.log("intersection", res)

        return !!res;
    })

    if (filteredProjects.length === 0) {
        // ask the user to create a project
        // throw redirect(307, `/onshape/project/create?${new URLSearchParams({did: searchParams.did}).toString()}`);

    }
    // ensure the user is on a team that has access to the project


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

    const title3SubsystemName = tab.properties?.find(p => p.name == "Title 3")?.value as unknown as string;
    const tabName = tab.properties?.find(p => p.name == "Name")?.value as unknown as string;
    if (!title3SubsystemName) {
        return {
            searchParams,
            subsystemName: title3SubsystemName,
            error: `Subsystem name MUST be set in Title 3 field of ${tabName}. (Close and reopen the tab to refresh the data.)`
        };
    }

    return {
        searchParams,
        tabName,
        parts: pageParts,
        subsystemName: title3SubsystemName,
        projects: filteredProjects,
    }
}) satisfies PageServerLoad<{
    searchParams: OnshapeFrameQueryParams,
    error: string,
    subsystemName?: string,
} | {
    searchParams: OnshapeFrameQueryParams,
    tabName: string,
    parts: { part: BTPartMetadataInfo, state: PartReleaseState }[],
    subsystemName: string,
    projects: ProjectModel[],
}>;


export const actions = {

    release: partRelease,
    re_release: partRelease
} satisfies Actions;