import type {PageServerLoad} from './$types';
import {redirect} from "@sveltejs/kit";

interface OauthTokenBody {
    access_token: string,
    token_type: string, //Bearer
    expires_in: number, //3600
    refresh_token: string,
}

export const load = (async ({url: {searchParams}, cookies}) => {
    const inParams = Object.fromEntries(searchParams);
    console.log("oauth redirect", inParams);

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
        'client_id': import.meta.env.VITE_ONSHAPE_OAUTH_CLIENT_ID,
        "client_secret": import.meta.env.VITE_ONSHAPE_OAUTH_CLIENT_SECRET,
        "redirect_uri": import.meta.env.VITE_ONSHAPE_OAUTH_REDIRECT_URI
    });
    // console.log("params", params.toString())

    const res = await fetch("https://oauth.onshape.com/oauth/token", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    });



    const body = await res.json() as unknown as OauthTokenBody;
    const expiryTimestamp = Date.now() + (.75 * body.expires_in)*1000



    cookies.set("sessionid", JSON.stringify({
        ...body,
        expiryTimestamp
    }), {
        path: "/"
    })

    throw redirect(307, "/onshape/release") //@tod need code
    // console.log("OauthTokenBody", await res.text())
    // <UnauthorizedException><error>unauthorized</error><error_description>An Authentication object was not found in the SecurityContext</error_description></UnauthorizedException>

    // todo set auth cookie

}) satisfies PageServerLoad;

