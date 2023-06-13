import type {PageServerLoad} from './$types';
import {redirect} from "@sveltejs/kit";
import {base64decode} from "$lib/util";
import {clientId, clientSecret, onshapeCookieName, redirectUrl, setOauthTokenInCookie} from "$lib/onshape";
import type {OauthStateData} from "$lib/onshape";
import type {Oauth2Token} from "$lib/onshape";


export const load = (async ({url: {searchParams}, cookies}) => {
    const inParams = Object.fromEntries(searchParams);
    // console.log("oauth redirect", inParams);

    const code = searchParams.get("code");
    if (!code) {
        return {
            error: "did not receive code",
            params: inParams
        }
    }
    const params = new URLSearchParams({
        'grant_type': 'authorization_code',
        'code': code,
        'client_id': clientId!,
        "client_secret": clientSecret!,
        "redirect_uri": redirectUrl!,
    });

    const res = await fetch("https://oauth.onshape.com/oauth/token", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    });


    const body = await res.json() as unknown as Oauth2Token;
    setOauthTokenInCookie(cookies, onshapeCookieName, body)

    const stateStr = searchParams.get("state")

    if (!stateStr) {
        console.log("ERROR! State was not returned with the token response");
    }

    const state: OauthStateData = JSON.parse(base64decode(stateStr || ""));

    // Build the redirect url and include the state args

    const redirSearchParams = new URLSearchParams()
    for (const [key, value] of Object.entries(state.searchParams)) {
        if (typeof value == "string" && value.startsWith("{$")) {
            // skip it
        } else {
            redirSearchParams.append(key, value);
        }
    }
    const redirUrl = `/onshape/${state.action}?${redirSearchParams}`
    // console.log("redirUrl", redirUrl.toString());

    throw redirect(302, redirUrl) //@todo need state
    // console.log("OauthTokenBody", await res.text())
    // <UnauthorizedException><error>unauthorized</error><error_description>An Authentication object was not found in the SecurityContext</error_description></UnauthorizedException>

    // todo set auth cookie

}) satisfies PageServerLoad;

