import type {Actions, PageServerLoad} from './$types';
import {createNewProject} from "./createNewProject";
import {filterProjects} from "$lib/util";
import {redirect} from "@sveltejs/kit";
import {getTrelloClientFromCookies} from "$lib/trello";


export const load = (async ({locals: {db, onshape: Onshape}, cookies, url: {searchParams}}) => {
    const projects = await db.getAllProjects();

    if (!Onshape.client) {
        throw Onshape.loginRedirect();
    }

    const trello = await getTrelloClientFromCookies(cookies)
    if (!trello) {
        console.log("No Trello Client")

    }

    // const me = await trello.members.getMember({id: "me"});
    // console.log("member", me)


    return {
        projects: []
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
            throw redirect(303, `/project/${inputData?.slug}`);
        }
    },

} satisfies Actions;
