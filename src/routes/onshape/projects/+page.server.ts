import type {Actions, PageServerLoad} from './$types';
import {createNewProject} from "./createNewProject";
import {base64, filterProjects} from "$lib/util";
import {redirect} from "@sveltejs/kit";
import {getOnshapeClientFromCookies, hasInitialToken, type OauthStateData, onshapeCookieName} from "$lib/onshape";
import {Oauth} from "$lib/OnshapeAPI";


export const load = (async ({locals: {db}, cookies, url: {searchParams}}) => {
    const projects = await db.getAllProjects();

    const redirectUrl = import.meta.env.VITE_ONSHAPE_OAUTH_REDIRECT_URI
    if (!redirectUrl) {
        throw new Error("No VITE_ONSHAPE_OAUTH_REDIRECT_URI set");
    }
    const clientId = import.meta.env.VITE_ONSHAPE_OAUTH_CLIENT_ID;
    if (!clientId) {
        throw new Error("No VITE_ONSHAPE_OAUTH_CLIENT_ID set");
    }

    // check if the user is logged in
    // if not, send them to onshape to authenticate
    if (!await hasInitialToken(cookies, onshapeCookieName)) {
        const authUrl = Oauth.buildAuthorizeUrl({
            clientId: clientId,
            redirectUrl: redirectUrl,
            state: base64(JSON.stringify({searchParams, action: "projects"} satisfies OauthStateData)),
            // companyId: searchParams.companyId
        })
        throw redirect(307, authUrl.toString());
    }

    const Onshape = await getOnshapeClientFromCookies(cookies);
    const teamInfo = await Onshape.TeamApi.find({});

    const filteredProjects = filterProjects(projects, teamInfo);

    // console.log("Team Info", teamInfo);
    // console.log("Projects", projects);
    // console.log("Filtered Projects", filteredProjects);

    return {
        projects: filteredProjects
    };
}) satisfies PageServerLoad;

export const actions = {
    createProject: async (event) => {
        // console.log("Create New Project", event);
        const inputData = await createNewProject(event)
        // console.log("Create New Project", inputData);

        if (inputData?.queryState) {
            // 303 = request changed to GET and body thrown away as we have already processed it
            throw redirect(303, `/onshape/release/?${inputData?.queryState}`);
        } else {
            // 303 = request changed to GET and body thrown away as we have already processed it
            throw redirect(303, `/onshape/project/${inputData?.slug}`);
        }
    },
    addDoc2Project: async ({request, locals: {db}}) => {
        const data = await request.formData();
        const onshapeDocId = data.get("onshapeDocId") as string;
        const projectId = data.get("projectId") as string;

        const project = await db.addDoc2Project(onshapeDocId, parseInt(projectId));

        const queryState = data.get("queryState");
        if (queryState) {
            // 303 = request changed to GET and body thrown away as we have already processed it
            throw redirect(303, `/onshape/release/?${queryState}`);
        } else {
            // 303 = request changed to GET and body thrown away as we have already processed it
            throw redirect(303, `/onshape/project/${project?.slug}`);
        }
    }
} satisfies Actions;
