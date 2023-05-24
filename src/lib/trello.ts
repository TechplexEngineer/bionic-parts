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

export const backlogListId_2024 = "6468e280779ad802bb3775d4";


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