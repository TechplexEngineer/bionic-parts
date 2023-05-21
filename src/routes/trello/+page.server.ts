import type {PageServerLoad, Actions} from './$types';

import trelloClient from "$lib/trello";
import Onshape from "$lib/onshape";
import * as fs from "fs";

export const load = (async ({locals: {db}}) => {
    return {};
}) satisfies PageServerLoad;

export const actions = {

    create: async ({request, locals: {db}}) => {
        const backlogListId = "6468e280779ad802bb3775d4";

        // console.log("card", card);
        const params = {
            server: "https://cad.onshape.com",
            did: "da2bc7f409791a8720b27217",
            wv: "v",
            wvid: "4a9943812a2ae4574d5a91fa",
            eid: "dfc0766722250803423263f8",
            docName: "Part Release Testing",

            partId: "c06bf16086a1a2173a605f2b89cb8668dcb14ed4",
            thumbWidth: 600,
            thumbHeight: 340,
        }

        const card = await trelloClient.cards.createCard({
            name: "test card 124",
            desc: "Description",
            idList: backlogListId,
        });
        console.log("card", card.id);

        const onshapeUrl = `${params.server}/documents/${params.did}/${params.wv}/${params.wvid}/e/${params.eid}`

        await trelloClient.cards.createCardAttachment({
            id: card.id,
            url: onshapeUrl,
            name: `Part released from: '${params.docName}'`
        });

        const cardId = card.id

        const thumb = await Onshape.GetPartThumbnail(params.partId, params.thumbWidth, params.thumbHeight);
        // console.log("thumb", await thumb.arrayBuffer());

        // const formData = new FormData();
        // formData.append("file", await thumb.blob(), "thumbnail.png");

        // await thumb.blob(), //note: https://miguelmota.com/bytes/arraybuffer-to-buffer/

        // console.log(await thumb.arrayBuffer());

        // let buf = await thumb.arrayBuffer();

        // function _arrayBufferToBase64( buffer ) {
        // 	var binary = '';
        // 	var bytes = new Uint8Array( buffer );
        // 	var len = bytes.byteLength;
        // 	for (var i = 0; i < len; i++) {
        // 		binary += String.fromCharCode( bytes[ i ] );
        // 	}
        // 	return btoa( binary );
        // }
        //
        // console.log("thumb", `data:image/png;base64,${_arrayBufferToBase64(buf)}`);


        await trelloClient.cards.createCardAttachment({
            id: cardId,
            file: await thumb.blob(),
            name: "thumbnail.png",
            mimeType: "image/png",
        });

        return {};
    }
} satisfies Actions;
