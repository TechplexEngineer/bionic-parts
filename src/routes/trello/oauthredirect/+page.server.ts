import type {PageServerLoad} from './$types';
import {buildRequestGetOAuthAccessToken, OauthTrelloClient} from "$lib/trelloClient";
import {
    getOauth1TokenFromCookie,
    getTrelloRequestedExpirationStamp,
    setOauth1TokenInCookie,
    trelloCookieName
} from "$lib/trello";
import {redirect} from "@sveltejs/kit";
import {request} from "@playwright/test";
import {TrelloClient} from "$lib/trelloAPI";


export const load = (async ({url: {searchParams}, cookies, request}) => {

    const queryParams = Object.fromEntries(searchParams);
    console.log("oauth redirect", queryParams, await request.text());

    const token = getOauth1TokenFromCookie(cookies, trelloCookieName);
    if (!token) {
        throw redirect(303, "/onshape/release"); //@todo this will result in an error without the docid
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

    // throw redirect(303, "/onshape/release"); //@todo this will result in an error without the docid

    const trello = new OauthTrelloClient({
        oauthAccessTokenSecret: oauthAccessTokenSecret,
        oauthAccessToken: oauthAccessToken,
    })

    const me = await trello.members.getMember({id: "me"});
    console.log("me", me);

}) satisfies PageServerLoad;

