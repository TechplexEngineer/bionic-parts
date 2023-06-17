import {TrelloClient} from "$lib/trelloAPI";
import type {Cookies} from "@sveltejs/kit";
import {OauthTrelloClient} from "$lib/trelloClient";

export const trelloCookieName = "trello_sessionid";

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


export const trelloRequestedExpiration = '30days'; // 1hour, 1day, 30days, never
export const getTrelloRequestedExpirationStamp = () => {
    return Date.now() + 1000 * 60 * 60 * 24 * 29 // 29 days so we renew before the token expires
}

export type Oauth1AccessToken = {
    oauthAccessToken: string
    oauthAccessTokenSecret: string
    expiryTimestamp: number
}

type Oauth1RequestToken = {
    oauthToken: string
    oauthTokenSecret: string
}

type OAuth1Cookie = Oauth1RequestToken | Oauth1AccessToken

export const setOauth1TokenInCookie = (cookies: Cookies, cookieName: string, tokenInfo: OAuth1Cookie) => {
    const cookieValue = JSON.stringify(tokenInfo);
    cookies.set(cookieName, cookieValue, {
        path: "/",
        secure: true, // needed for dev (and prod?)
        sameSite: "none", // needed for dev (and prod?)
    })
}
export const getOauth1TokenFromCookie = (cookies: Cookies, cookieName: string) => {
    const rawTokenInfo = cookies.get(cookieName);
    const isLoggedIn = !!rawTokenInfo;
    if (!isLoggedIn) {
        return null;
    }
    const tokenInfo: OAuth1Cookie = JSON.parse(rawTokenInfo);
    return tokenInfo;
}

/**
 * Get the oauth token from the cookie, or null if not logged in
 * @param cookies
 * @param cookieName
 */
export const getTrelloClientFromCookies = async (cookies: Cookies, cookieName = trelloCookieName) => {
    const tokenInfo = getOauth1TokenFromCookie(cookies, cookieName);

    if (!tokenInfo || !('oauthAccessToken' in tokenInfo) || !('oauthAccessTokenSecret' in tokenInfo)) {
        return null;
    }

    return new OauthTrelloClient({
        oauthAccessToken: tokenInfo.oauthAccessToken,
        oauthAccessTokenSecret: tokenInfo.oauthAccessTokenSecret,
    });
}



