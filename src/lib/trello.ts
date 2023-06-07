import {TrelloClient} from "$lib/trelloAPI";
import type {Card} from "$lib/trelloAPI/api/models";
import type {Cookies} from "@sveltejs/kit";
import {getOauthTokenFromCookie, Oauth2Token, setOauthTokenInCookie} from "$lib/oauth";
import OAuth from "oauth-1.0a";


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
export const boardId_2024 = "6468e2101517f18d3231250f";

export const memberId_blake = "4fbe441a74cbfcae72246f58";
export const memberId_chrisj = "63c9bb3c250d34001593b602";
export const memberId_scott = "58befa0d3fe5a5bea520ad7f";

export const trelloCookieName = "parts_trello_sessionid";

export const trelloAuthorizeURL = "https://trello.com/1/OAuthAuthorizeToken";

// function takes a base_string and key and uses web crypto to return a hash
function hash_function(base_string: string, secretKey: string) {
    const func = async () => {
        const enc = new TextEncoder(/*"utf-8"*/);
        const algorithm = {name: "HMAC", hash: "SHA-256"};
        const cryptoKey = await crypto.subtle.importKey("raw", enc.encode(secretKey), algorithm, false, ["sign", "verify"]);
        return await crypto.subtle.sign("HMAC", cryptoKey, enc.encode(base_string))
    }

    let result;
    func().then(r => result = r);
    while (result === undefined) {// Wait result from async_function
        for (let i = 0; i < 10e7; i++) { //10e7 about 30ms
        } // Do nothing (just wait
    }
    return result;
}

const oauth = new OAuth({
    consumer: {key: '<your consumer key>', secret: '<your consumer secret>'},
    signature_method: 'HMAC-SHA1',
    hash_function,
})

//
// const doTokenRefresh = async (refresh_token: string) => {
//     const clientId = import.meta.env.VITE_;
//     if (!clientId) {
//         throw new Error("No Onshape oauth client id set");
//     }
//
//     const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
//
//     `${authorizeURL}?oauth_token=${token}&name=${appName}&scope=${scope}&expiration=${expiration}`
//
//
//     const res = await Oauth.token({
//         grantType: "refresh_token",
//         refreshToken: refresh_token,
//         clientId: clientId,
//         clientSecret: clientSecret,
//         redirectUrl: redirectUrl,
//     });
//     return res;
// }

export const hasInitialToken = async (cookies: Cookies, cookieName: string) => {
    const token = getOauthTokenFromCookie(cookies, cookieName);
    if (!token) {
        console.log("No trello token found in cookie");
        return false;
    }
    try {
        const res = await doTokenRefresh(token.refresh_token)
        const tokenResponse = await res.json() as unknown as Oauth2Token;
        setOauthTokenInCookie(cookies, cookieName, tokenResponse);
    } catch (e) {
        console.log("Error refreshing token", e);
        return false;
    }
    return true;

}

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