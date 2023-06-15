import {TrelloClient} from "$lib/trelloAPI";
import type {Card} from "$lib/trelloAPI/api/models";


const key = import.meta.env.VITE_TRELLO_KEY;
if (!key) {
    throw new Error('Missing trello key');
}
const token = import.meta.env.VITE_TRELLO_TOKEN;
if (!token) {
    throw new Error('Missing trello token');
}

const trelloClient = new TrelloClient({
    key: key,
    token: token,
});

export default trelloClient;

// export const backlogListId_2024 = "6468e280779ad802bb3775d4";
// export const boardId_2024 = "6468e2101517f18d3231250f";

export const memberId_blake = "4fbe441a74cbfcae72246f58";
export const memberId_chrisj = "63c9bb3c250d34001593b602";
export const memberId_scott = "58befa0d3fe5a5bea520ad7f";

export const validLabelColors = [
    "green",
    "yellow",
    "orange",
    "red",
    "purple",
    "blue",
    "sky",
    "lime",
    "pink",
    "black",
    "green_dark",
    "yellow_dark",
    "orange_dark",
    "red_dark",
    "purple_dark",
    "blue_dark",
    "sky_dark",
    "lime_dark",
    "pink_dark",
    "black_dark",
    "green_light",
    "yellow_light",
    "orange_light",
    "red_light",
    "purple_light",
    "blue_light",
    "sky_light",
    "lime_light",
    "pink_light",
    "black_light"
];


export interface CreateCardWithPhotoAndLinkParams {
    cardTitle: string;
    cardDesc: string;
    trelloListId: string;

    onshapeUrl: string;

    docName: string;
    thumb: Blob;

}

export const createCardWithPhotoAndLink = async (params: CreateCardWithPhotoAndLinkParams): Promise<Card> => {
    const card = await trelloClient.cards.createCard({
        name: params.cardTitle,
        desc: params.cardDesc,
        idList: params.trelloListId,
        pos: "top",
    });

    await trelloClient.cards.createCardAttachment({
        id: card.id,
        url: params.onshapeUrl,
        name: `Part released from: '${params.docName}'`
    });

    await trelloClient.cards.createCardAttachment({
        id: card.id,
        file: params.thumb,
        name: "thumbnail.png",
        mimeType: "image/png",
    });
    return card;
}