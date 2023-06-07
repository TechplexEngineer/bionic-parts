import type {Cookies} from "@sveltejs/kit";
import {Configuration, Oauth, OnshapeClient} from "$lib/OnshapeAPI";
import type {Oauth2Token} from "$lib/oauth";
import {setOauthTokenInCookie} from "$lib/oauth";

export const clientId = import.meta.env.VITE_ONSHAPE_OAUTH_CLIENT_ID;
if (!clientId) {
    throw new Error("No Onshape oauth client id set");
}
export const clientSecret = import.meta.env.VITE_ONSHAPE_OAUTH_CLIENT_SECRET;
if (!clientSecret) {
    throw new Error("No Onshape oauth client secret set");
}
export const redirectUrl = import.meta.env.VITE_ONSHAPE_OAUTH_REDIRECT_URI;
if (!redirectUrl) {
    throw new Error("No Onshape oauth redirect url set");
}

export interface OauthStateData {
    searchParams: { [key: string]: any }
    action: "release" | "webhook/register"
}


export const onshapeCookieName = "parts_onshape_sessionid";

const doTokenRefresh = async (refresh_token: string) => {
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

    const res = await Oauth.token({
        grantType: "refresh_token",
        refreshToken: refresh_token,
        clientId: clientId,
        clientSecret: clientSecret,
        redirectUrl: redirectUrl,
    });
    return res;
}

export const hasInitialToken = async (cookies: Cookies, cookieName: string) => {
    const token = getOauthTokenFromCookie(cookies, cookieName);
    if (!token) {
        console.log("No onshape token found in cookie");
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

export const getOnshapeClient = async (tokenInfo: Oauth2Token | null, refreshCb?: (token: Oauth2Token) => void) => {
    const Onshape = new OnshapeClient(new Configuration({
        middleware: [{
            pre: async (context) => {
                if (tokenInfo?.expiryTimestamp && tokenInfo.expiryTimestamp <= Date.now()) {
                    // console.log("token expired, refreshing"); //@todo store the state so we don't continually refresh
                    const res = await doTokenRefresh(tokenInfo.refresh_token);
                    const tokenResponse = await res.json() as unknown as Oauth2Token;

                    refreshCb && refreshCb(tokenResponse)

                    // console.log("tokenResponse", tokenResponse);
                    if (context.init.headers) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        context.init.headers.Authorization = `Bearer ${tokenResponse.access_token}`;
                    } else {
                        console.log("ERROR! NO HEADERS 1");
                    }
                } else {
                    if (context.init.headers) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        context.init.headers.Authorization = `Bearer ${tokenInfo.access_token}`;
                    } else {
                        console.log("ERROR! NO HEADERS 2");
                    }
                }
                return {url: context.url, init: context.init}
            },
            post: async (context) => {
                return context.response
            }
        }]
    }));
    return Onshape;
}

export const getOnshapeClientFromCookies = async (cookies: Cookies, cookieName: string) => {
    const tokenInfo = getOauthTokenFromCookie(cookies, cookieName);

    return await getOnshapeClient(tokenInfo, (tokenResponse) => {
        setOauthTokenInCookie(cookies, cookieName, tokenResponse);
    });
}
