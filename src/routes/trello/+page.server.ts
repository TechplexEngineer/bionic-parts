import type {PageServerLoad} from "./$types";
import {doTrelloAuthFlow, getTrelloClientFromCookies} from "$lib/trello";


export const load = (async ({cookies}) => {

    const trello = await getTrelloClientFromCookies(cookies)
    if (!trello) {
        throw await doTrelloAuthFlow(cookies, "/trello")
    }

    const me = await trello.members.getMember({id: "me"});

    // console.log("length", me.idBoards?.length)
    const urls = (me.idBoards || []).map(id => `/boards/${id}?lists=open`).join(",")

    const batchRes = await trello.batch.getBatch({urls});
    // console.log("batchRes", batchRes.length)
    // console.log("batchRes", JSON.stringify(batchRes[0], null, 2))

    return {
        me,
        boards: batchRes
    }


}) satisfies PageServerLoad;

