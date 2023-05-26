import type {PageServerLoad} from './$types';
import {redirect} from "@sveltejs/kit";

interface OauthTokenBody {
    access_token: string,
    token_type: string, //Bearer
    expires_in: number, //3600
    refresh_token: string,
}
const clientId = import.meta.env.VITE_ONSHAPE_OAUTH_CLIENT_ID;
if (!clientId) {
    throw new Error("No Onshape oauth client id set");
}
const clientSecret = import.meta.env.VITE_ONSHAPE_OAUTH_CLIENT_SECRET;
if (!clientSecret) {
    throw new Error("No Onshape oauth client secret set");
}
const redirectUrl = import.meta.env.VITE_ONSHAPE_OAUTH_REDIRECT_URI;
if (!redirectUrl) {
    throw new Error("No Onshape oauth redirect url set");
}

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
        'client_id': clientId,
        "client_secret": clientSecret,
        "redirect_uri": redirectUrl,
    });
    // console.log("params", params.toString())

    const res = await fetch("https://oauth.onshape.com/oauth/token", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    });

    const base64decode = atob;


    const body = await res.json() as unknown as OauthTokenBody;
    const expiryTimestamp = Date.now() + (.75 * body.expires_in)*1000

    const stateStr = searchParams.get("state")

    if (!stateStr) {
        console.log("ERROR! State was not returned with the token response");
    }

    const state: {searchParams: {[key:string]: any}} = JSON.parse(base64decode(stateStr || ""));

    const cookieValue = JSON.stringify({
        ...body,
        expiryTimestamp
    });
    console.log("Setting Cookie", cookieValue);
    cookies.set("sessionid", cookieValue, {
        path: "/",
        secure: import.meta.env.DEV ? true : undefined, // needed for dev
        sameSite: import.meta.env.DEV ? "none" : undefined, // needed for dev
    })

    // Build the redirect url and include the state args

    const redirSearchParams = new URLSearchParams()
    for (const [key, value] of Object.entries(state.searchParams)) {
        if (typeof value == "string" && value.startsWith("{$")) {
            // skip it
        } else {
            redirSearchParams.append(key, value);
        }
    }
    const redirUrl = `/onshape/release?${redirSearchParams}`
    // console.log("redirUrl", redirUrl.toString());

    throw redirect(302, redirUrl) //@todo need state
    // console.log("OauthTokenBody", await res.text())
    // <UnauthorizedException><error>unauthorized</error><error_description>An Authentication object was not found in the SecurityContext</error_description></UnauthorizedException>

    // todo set auth cookie

}) satisfies PageServerLoad;

