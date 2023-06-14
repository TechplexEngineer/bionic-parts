import type {Actions, PageServerLoad} from './$types';
import {PartReleaseState} from "./PartReleaseState";

import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";

import {base64, filterProjects} from "$lib/util";
import {redirect} from "@sveltejs/kit";
import {type BTPartMetadataInfo, type GetPartsWMVERequest, Oauth} from "$lib/OnshapeAPI";
import type {OauthStateData} from "$lib/onshape";
import {onshapeCookieName, getOnshapeClientFromCookies, hasInitialToken} from "$lib/onshape";
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

    // check if the user is logged in
    // if not, send them to onshape to authenticate
    if (!await hasInitialToken(event.cookies, onshapeCookieName)) {
        const authUrl = Oauth.buildAuthorizeUrl({
            clientId: clientId,
            redirectUrl: redirectUrl,
            state: base64(JSON.stringify({searchParams, action: "release"} satisfies OauthStateData)),
            companyId: searchParams.companyId
        })
        throw redirect(307, authUrl.toString());
    }

    const Onshape = await getOnshapeClientFromCookies(event.cookies, onshapeCookieName);

    const db = event.locals.db;

    // ensure the user is on a team that has access to the project
    const teamInfo = await Onshape.TeamApi.find({});

    // console.log("team", team?.items?.map(t => t.id));

    // find projects that have this document in them
    const matchingProjects = await db.getProjectsByOnshapeDocId(searchParams.did)
    // console.log("matchingProjects", JSON.stringify(matchingProjects, null, 2))

    const filteredProjects = filterProjects(matchingProjects, teamInfo);

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
            tabName,
            parts: [],
            subsystemName: title3SubsystemName,
            error: `Subsystem name MUST be set in Title 3 field of ${tabName}. (Close and reopen the tab to refresh the data.)`,
            projects: [],
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
    error?: string
    tabName: string,
    parts: { part: BTPartMetadataInfo, state: PartReleaseState }[],
    subsystemName: string,
    projects: ProjectModel[],
}>;


export const actions = {

    release: partRelease,
    re_release: partRelease
} satisfies Actions;