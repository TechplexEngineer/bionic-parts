import type {Actions, PageServerLoad} from './$types';
import {createNewProject} from "./createNewProject";
import {filterProjects} from "$lib/util";
import {redirect} from "@sveltejs/kit";
import {doTrelloAuthFlow, getTrelloClientFromCookies} from "$lib/trello";
import type {Board} from "$lib/trelloAPI/api/models";
import type {OauthTrelloClient} from "$lib/trelloClient";

const getUserBoards = async (trello: OauthTrelloClient) => {
    const me = await trello.members.getMember({id: "me"});

    // Build list of urls to batch request
    const urls = (me.idBoards || []).map(id => `/boards/${id}?lists=open`).join(",")

    const batchRes = await trello.batch.getBatch<{ [key: string]: Board }[]>({urls});

    const boards = batchRes.map(b => b['200']);

    return boards
}

export const load = (async ({locals: {db, onshape: Onshape}, cookies, url: {searchParams}}) => {

    if (!Onshape.client) {
        throw Onshape.loginRedirect()
    }

    const trello = await getTrelloClientFromCookies(cookies)
    if (!trello) {
        throw await doTrelloAuthFlow(cookies, "/trello");
    }


    const currentUserTeams = await Onshape.client.TeamApi.find({});
    //@todo handle users with more than one page of teams


    return {
        trelloBoards: await getUserBoards(trello),
        onshapeTeams: currentUserTeams.items
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
