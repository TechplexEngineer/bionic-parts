import type {PageServerLoad} from './$types';
import {buildRequestGetOAuthAccessToken, OauthTrelloClient} from "$lib/trelloClient";
import {
    getOauth1TokenFromCookie,
    getTrelloRequestedExpirationStamp,
    setOauth1TokenInCookie,
    trelloCookieName
} from "$lib/trello";
import {redirect} from "@sveltejs/kit";


export const load = (async ({url: {searchParams}, cookies, request}) => {

    const queryParams = Object.fromEntries(searchParams);

    const redirectUrl = searchParams.get("state");
    if (!redirectUrl) {
        throw new Error("redirectUrl not set");
    }

    const token = getOauth1TokenFromCookie(cookies, trelloCookieName);
    if (!token) {
        throw redirect(303, redirectUrl);
    }

    if (!queryParams.oauth_token || !queryParams.oauth_verifier) {
        throw new Error("Missing oauth_token or oauth_verifier");
    }

    if (!("oauthToken" in token)) {
        throw new Error("Missing oauthToken");
    }
    if (!("oauthTokenSecret" in token)) {
        throw new Error("Missing oauthTokenSecret");
    }

    if (queryParams.oauth_token !== token.oauthToken) {
        throw new Error("oauth_token does not match");
    }


    const oauthToken = queryParams.oauth_token;
    const oauthTokenSecret = token.oauthTokenSecret;
    const oauthVerifier = queryParams.oauth_verifier;


    const req = await buildRequestGetOAuthAccessToken(oauthToken, oauthTokenSecret, oauthVerifier);

    const res = await fetch(req);

    const expiryTimestamp = getTrelloRequestedExpirationStamp()
    const data = new URLSearchParams(await res.text());
    console.log("data", data);

    const oauthAccessToken = data.get("oauth_token");
    if (!oauthAccessToken) {
        throw new Error("Missing oauthAccessToken in response");
    }

    const oauthAccessTokenSecret = data.get("oauth_token_secret");
    if (!oauthAccessTokenSecret) {
        throw new Error("Missing oauthAccessTokenSecret in response");
    }

    setOauth1TokenInCookie(cookies, trelloCookieName, {
        oauthAccessToken: oauthAccessToken,
        oauthAccessTokenSecret: oauthAccessTokenSecret,
        expiryTimestamp: expiryTimestamp
    })

    // 303 = request changed to GET and body thrown away as we have already processed it
    throw redirect(303, queryParams.state);


}) satisfies PageServerLoad;

