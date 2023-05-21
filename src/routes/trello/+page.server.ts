import type {PageServerLoad, Actions} from './$types';

import trelloClient, {
    backlogListId_2024,
    createCardWithPhotoAndLink,
    CreateCardWithPhotoAndLinkParams
} from "$lib/trello";
import Onshape from "$lib/onshape";

export const load = (async ({locals: {db}}) => {
    return {};
}) satisfies PageServerLoad;

export const actions = {

    create: async ({request, locals: {db}}) => {
        const partId = "c06bf16086a1a2173a605f2b89cb8668dcb14ed4";

        const thumb = await Onshape.GetPartThumbnail(partId, 600, 340);

        // console.log("card", card);
        const params: CreateCardWithPhotoAndLinkParams = {
            trelloListId: backlogListId_2024,

            server: "https://cad.onshape.com",
            did: "da2bc7f409791a8720b27217",
            wv: "v",
            wvid: "4a9943812a2ae4574d5a91fa",
            eid: "dfc0766722250803423263f8",
            docName: "Part Release Testing",

            thumb: await thumb.blob(),
        }


        const card = await createCardWithPhotoAndLink(params)

        return {};
    }
} satisfies Actions;
