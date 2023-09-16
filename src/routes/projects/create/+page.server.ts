import type {Actions, PageServerLoad} from './$types';
import {createNewProject} from "./createNewProject";
import {fail, redirect} from "@sveltejs/kit";
import type {Board} from "$lib/trelloAPI/api/models";
import type {OauthTrelloClient} from "$lib/trelloClient";
import type {BTTeamInfo} from "$lib/OnshapeAPI";
import {superValidate} from "sveltekit-superforms/server";
import {createProjectSchema} from "./createProject.schema";

const getUserBoards = async (trello: OauthTrelloClient) => {
    const me = await trello.members.getMember({id: "me"});

    // Build list of urls to batch request
    const urls = (me.idBoards || []).map(id => `/boards/${id}?lists=open`).join(",")

    const batchRes = await trello.batch.getBatch<{ [key: string]: Board }[]>({urls});

    const boards = batchRes.map(b => b['200']);

    return boards
}

export const load = (async ({locals: {db, onshape: Onshape, trello}, cookies, url: {searchParams}}) => {

    if (!Onshape.client) {
        throw Onshape.loginRedirect()
    }

    if (!trello.client) {
        throw await trello.loginRedirect();
    }

    const currentUserTeams = await Onshape.client.TeamApi.find({});
    //@todo handle users with more than one page of teams

    const form = await superValidate(createProjectSchema);

    return {
        trelloBoards: await getUserBoards(trello.client),
        onshapeTeams: currentUserTeams.items!,
        form
    };
}) satisfies PageServerLoad<{ trelloBoards: Board[], onshapeTeams: BTTeamInfo[] }>;

export const actions = {
    default: async (event) => {
        const form = await superValidate(event.request, createProjectSchema);

        // Convenient validation check:
        if (!form.valid) {
            // Again, always return { form } and things will just work.
            return fail(400, {form});
        }

        console.log("Create New Project", event);

        return
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
