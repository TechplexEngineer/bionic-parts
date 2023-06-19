import * as oauth from "$lib/oauth1/mod"
import type {PageServerLoad} from "./$types";
import {buildRequestGetOAuthAccessToken, buildRequestGetOAuthRequestToken} from "$lib/trelloClient";
import {type Cookies, redirect} from "@sveltejs/kit";
import {setOauthTokenInCookie} from "$lib/onshape";
import {
    getTrelloClientFromCookies,
    setOauth1TokenInCookie,
    trelloCookieName,
    trelloRequestedExpiration
} from "$lib/trello";

const authorizeURL = "https://trello.com/1/OAuthAuthorizeToken";
const appName = "Bionic Parts";
const scope = 'read,write'; // Comma-separated list of one or more of read, write, account. See https://developer.atlassian.com/cloud/trello/guides/rest-api/authorization/

const doTrelloAuthFlow = async (cookies: Cookies) => {
    console.log("load trello");
    const oauthRedirectUrl = import.meta.env.VITE_TRELLO_OAUTH_REDIRECT_URI;
    if (!oauthRedirectUrl) {
        throw new Error('Missing VITE_TRELLO_OAUTH_REDIRECT_URI');
    }

    const req = await buildRequestGetOAuthRequestToken(oauthRedirectUrl)
    // console.log(req.headers.get("Authorization"));
    const res = await fetch(req);

    const data = new URLSearchParams(await res.text());
    // console.log("data", data);

    const oauthToken = data.get("oauth_token");
    if (!oauthToken) {
        throw new Error("Missing oauth_token");
    }
    const oauthTokenSecret = data.get("oauth_token_secret");
    if (!oauthTokenSecret) {
        throw new Error("Missing oauth_token_secret");
    }

    setOauth1TokenInCookie(cookies, trelloCookieName, {
        oauthToken: oauthToken,
        oauthTokenSecret: oauthTokenSecret
    })

    // 303 = request changed to GET and body thrown away as we have already processed it
    return redirect(303, `${authorizeURL}?oauth_token=${oauthToken}&name=${appName}&scope=${scope}&expiration=${trelloRequestedExpiration}`);
}
export const load = (async ({cookies}) => {

    const trello = await getTrelloClientFromCookies(cookies)
    if (!trello) {
        throw await doTrelloAuthFlow(cookies);
    }

    const me = await trello.members.getMember({id: "me"});

    // console.log("length", me.idBoards?.length)
    const urls = (me.idBoards || []).map(id => `/boards/${id}?lists=open`).join(",")

    const batchRes = await trello.batch.getBatch({urls});
    // console.log("batchRes", batchRes.length)
    console.log("batchRes", JSON.stringify(batchRes[0], null, 2))

    return {
        me,
        boards: batchRes
    }


}) satisfies PageServerLoad;

