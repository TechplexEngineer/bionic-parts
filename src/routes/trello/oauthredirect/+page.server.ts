import type {PageServerLoad} from './$types';
import {buildRequestGetOAuthAccessToken} from "$lib/oauth1/trelloClient";
import {
    getOauth1TokenFromCookie,
    getTrelloRequestedExpirationStamp,
    setOauth1TokenInCookie,
    trelloCookieName
} from "$lib/trello";
import {redirect} from "@sveltejs/kit";
import {request} from "@playwright/test";


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

    throw redirect(303, "/onshape/release"); //@todo this will result in an error without the docid

    // const inParams = Object.fromEntries(searchParams);
    // // console.log("oauth redirect", inParams);
    //
    // const code = searchParams.get("code");
    // if (!code) {
    //     return {
    //         error: "did not receive code",
    //         params: inParams
    //     }
    // }
    // const params = new URLSearchParams({
    //     'grant_type': 'authorization_code',
    //     'code': code,
    //     'client_id': clientId!,
    //     "client_secret": clientSecret!,
    //     "redirect_uri": redirectUrl!,
    // });
    //
    // const res = await fetch("https://oauth.onshape.com/oauth/token", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     body: params
    // });
    //
    //
    // const body = await res.json() as unknown as Oauth2Token;
    // setOauthTokenInCookie(cookies, onshapeCookieName, body)
    //
    // const stateStr = searchParams.get("state")
    //
    // if (!stateStr) {
    //     console.log("ERROR! State was not returned with the token response");
    // }
    //
    // const state: OauthStateData = JSON.parse(base64decode(stateStr || ""));
    //
    // // Build the redirect url and include the state args
    //
    // const redirSearchParams = new URLSearchParams()
    // for (const [key, value] of Object.entries(state.searchParams)) {
    //     if (typeof value == "string" && value.startsWith("{$")) {
    //         // skip it
    //     } else {
    //         redirSearchParams.append(key, value);
    //     }
    // }
    // const redirUrl = `/onshape/${state.action}?${redirSearchParams}`
    // // console.log("redirUrl", redirUrl.toString());
    //
    // throw redirect(302, redirUrl) //@todo need state
    // // console.log("OauthTokenBody", await res.text())
    // // <UnauthorizedException><error>unauthorized</error><error_description>An Authentication object was not found in the SecurityContext</error_description></UnauthorizedException>
    //
    // // todo set auth cookie

}) satisfies PageServerLoad;

