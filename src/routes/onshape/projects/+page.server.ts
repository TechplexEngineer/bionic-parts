import type {Actions, PageServerLoad} from './$types';
import {createNewProject} from "./createNewProject";
import {base64, filterProjects} from "$lib/util";
import {redirect} from "@sveltejs/kit";
import {getOnshapeClientFromCookies, hasInitialToken, type OauthStateData, onshapeCookieName} from "$lib/onshape";
import {Oauth} from "$lib/OnshapeAPI";
import {getTrelloClientFromCookies} from "$lib/trello";


export const load = (async ({locals: {db, onshape: Onshape}, cookies, url: {searchParams}}) => {
    const projects = await db.getAllProjects();

    if (!Onshape.client) {
        throw Onshape.loginRedirect();
    }

    const teamInfo = await Onshape.client.TeamApi.find({});
    const userInfo = await Onshape.client.UserApi.sessionInfo();

    const filteredProjects = filterProjects(projects, teamInfo, userInfo.id);

    const trello = await getTrelloClientFromCookies(cookies)
    if (!trello) {
        console.log("No Trello Client")
        return {
            projects: filteredProjects
        };
    }

    const me = await trello.members.getMember({id: "me"});
    console.log("member", me)


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
