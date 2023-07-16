import type {PageServerLoad} from "./$types";


export const load = (async ({locals: {trello}}) => {

    if (!trello.client) {
        throw await trello.loginRedirect();
    }

    const me = await trello.client.members.getMember({id: "me"});

    const urls = (me.idBoards || []).map(id => `/boards/${id}?lists=open`).join(",")

    const batchRes = await trello.client.batch.getBatch({urls});

    return {
        me,
        boards: batchRes
    }

}) satisfies PageServerLoad;

