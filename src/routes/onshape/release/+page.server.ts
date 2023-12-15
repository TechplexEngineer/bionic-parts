import type {Actions, PageServerLoad} from './$types';
import {PartReleaseState} from "./PartReleaseState";
import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";
import {base64, filterProjects} from "$lib/util";
import type {BTDiffInfo, BTPartMetadataInfo, BTRootDiffInfo, GetPartsWMVERequest, OnshapeClient} from "$lib/OnshapeAPI";
import type {OauthStateData} from "$lib/onshape";
import {partRelease} from "./PartRelease";
import type {PartModel, ProjectModel} from "$lib/schema";
import type { PartStatusRequest } from './PartStatusRequest';
import { fail, json } from '@sveltejs/kit';
import type { Part } from './part';


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
    console.log("load", url.toString());


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
    // console.log('Onshape client found in session');
    
    let userInfo;
    try {
        userInfo = await Onshape.client.UserApi.sessionInfo();
    } catch (e) {
        //@todo if typeof e == "ResponseError" then
        throw Onshape.loginRedirect();
    }
    // console.log('userinfo', userInfo);

    if (userInfo.id !== searchParams.userId) {
        console.log("User ID in session does not match user ID in query params");
        throw Onshape.loginRedirect();
    }
    

    // ensure the user is on a team that has access to the project
    const teamInfo = await Onshape.client.TeamApi.find({});
    // console.log('teamInfo', teamInfo);
    

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
        withThumbnails: true// @todo remove this b/c new versions don't have thumbnails immediatley
    };
    if (searchParams.cfg && searchParams.cfg !== "{$configuration}") {
        getPartsParams._configuration = searchParams.cfg;
    }
    const partInDoc = await Onshape.client.PartApi.getPartsWMVE(getPartsParams);
    // console.log("partInDoc", JSON.stringify(partInDoc, null, 2));
    const pageParts = partInDoc.map((p) => ({
        part: p, state: PartReleaseState.Unknown //await getPartState(p)
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

interface CurrentRev {
    did: string,
    wv: any, //WVM.W | WVM.V,
    wvid: string,
    eid: string,
    partId: string, //eg JHH
    versionDate: string, // iso8601 date of when the version was created
}

const hasReleasedPartChanged = (releasedPartId: string, res: BTRootDiffInfo): boolean => {
    const entries = Object.entries(res.collectionChanges || {});
    for (const [_key, value] of entries) {
        for (const change of value) {
            if (change.targetId == releasedPartId) {
                return true
            }
        }
    }
    return false
}

const hasPartChanged = async (onshape: OnshapeClient, cur: CurrentRev, rel: PartModel): Promise<boolean> => {
    //@todo prevent comparing a newer version to an older version

    // don't allow releaseing older version over newer versions
    // if (rel.data.releasedFromVersion.versionDate > cur.versionDate) {
    //     return false;
    // }
    // lets just tell them what version was released


    if (cur.wvid == rel.data.releasedFromVersion.versionId) {
        return false;
    }
    const params = {
        did: cur.did,
        wvm: cur.wv,
        wvmid: cur.wvid,
        eid: cur.eid,
        versionId: rel.data.releasedFromVersion.versionId,
    };
    console.log('params', params);
    

    const res = await onshape.PartStudioApi.comparePartStudios(params);
    // .ComparePartstudios(c.did, c.wv, c.wvid, c.eid, {
    //     versionId: releasedPart.releasedVersion,
    // });
    const hasChanged = hasReleasedPartChanged(rel.data.partId, res)
    // console.log("hasChanged", releasedPart.partId, hasChanged, JSON.stringify(res, null, 2));
    return hasChanged
}
// export interface PartModel {
//     partId: string,
// } //todo will come from db schema

const getPartState = async (onshape: OnshapeClient, currentRev: CurrentRev, releasedPart?: PartModel): Promise<PartReleaseState> => {

    // put this here for performance testing.
    // return PartReleaseState.NeverReleased;

    // ============================================================================================
    // @todo check if the part has new id in the new verison
    // ============================================================================================

    // return PartReleaseState.NeverReleased;
    // 1. check if the part has ever been released
    
    if (typeof releasedPart !== "undefined") {
        if (await hasPartChanged(onshape, currentRev, releasedPart)) {
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


export const actions = {

    release: partRelease,
    re_release: partRelease,
    partState: async ({request, locals: {db, onshape: Onshape}}) => {

        if (!Onshape.client) {
            return fail(401, {error: "No Onshape client found in session"});
        }
    
        const data = (await request.json()) as PartStatusRequest;
        // console.log('data', JSON.stringify(data, null, 2));

        const version = await Onshape.client.DocumentApi.getVersion({ did: data.did, vid: data.wvmid });

        const results = [];
        for (const part of data.parts) {

            // console.log('part', part); 
            const releasedParts = await db.getReleasedPartsForElement(data.did, part.part.elementId!);

            const currentRev = {
                did: data.did,
                wv: data.wvm,
                wvid: data.wvmid,
                eid: part.part.elementId!,
                partId: part.part.partId!,
                versionDate: version.createdAt?.toISOString()!,
            };
            
            const releasedPart = releasedParts.find(p => p.data.partId === currentRev.partId)
            // console.log('releasedParts', JSON.stringify(releasedParts, null, 2));
            // console.log('releasedPart', releasedPart);

            const state = await getPartState(Onshape.client, currentRev, releasedPart)
            // const state = PartReleaseState.NeverReleased //await db.getPartStatus(part.partId);

            const res: Part = { part: part, state: state }; // @todo now that we don't calcualte the part state on initial load, we should change the inner part def
            if (releasedPart) {
                console.log('HERES', releasedPart.data.releasedFromVersion.versionName);
                
                res.releasedIn = releasedPart.data.releasedFromVersion.versionName;
            }
            results.push(res);
        }

        
        return JSON.stringify(results)
    },

} satisfies Actions;
