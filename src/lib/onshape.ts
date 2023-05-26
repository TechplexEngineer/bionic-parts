import type {Cookies} from "@sveltejs/kit";

// const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
// if (!accessKey) {
// 	throw Error("Missing VITE_ONSHAPE_ACCESS_KEY")
// }
// const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;
// if (!secretKey) {
// 	throw Error("Missing VITE_ONSHAPE_SECRET_KEY")
// }

import {Configuration, Oauth, OnshapeClient} from "$lib/OnshapeAPI";
import APIKeyAuthMiddleware from "$lib/OnshapeAPI/authMiddleware";

// export const OnshapeAPIKeyClient = new OnshapeClient(new Configuration({
// 	middleware: [APIKeyAuthMiddleware(secretKey, accessKey)]
// }))

export const cookieName = "sessionid";

export const hasInitialToken = async (cookies: Cookies, cookieName: string) => {
    const rawTokenInfo = cookies.get(cookieName);
    const isLoggedIn = !!rawTokenInfo;
    return isLoggedIn;
}

export interface Oauth2Token {
    access_token:string;
    token_type: string; //"bearer",
    refresh_token:string;
    expires_in: number; //253,
    scope: string //"OAuth2ReadPII OAuth2Read"
    expiryTimestamp?:number; // 1685069016155
}

export const getOauthTokenFromCookie = (cookies: Cookies, cookieName: string) => {
    const rawTokenInfo = cookies.get(cookieName);
    const isLoggedIn = !!rawTokenInfo;
    if (!isLoggedIn) {
        return null;
    }
    const tokenInfo: Oauth2Token = JSON.parse(rawTokenInfo);
    return tokenInfo;
}

export const setOauthTokenInCookie = (cookies: Cookies, cookieName: string, tokenInfo: Oauth2Token) => {
    const expiryTimestamp = Date.now() + (.75 * tokenInfo.expires_in)*1000
    const cookieValue = JSON.stringify({
        ...tokenInfo,
        expiryTimestamp
    });
    cookies.set(cookieName, cookieValue, {
        path: "/",
        secure: true, // needed for dev (and prod?)
        sameSite: "none", // needed for dev (and prod?)
    })
}

export const getOnshapeClient = async (cookies: Cookies, cookieName: string) => {
	const tokenInfo = getOauthTokenFromCookie(cookies, cookieName);
	const Onshape = new OnshapeClient(new Configuration({
        middleware: [{
            pre: async (context) => {
                if (tokenInfo?.expiryTimestamp && tokenInfo.expiryTimestamp <= Date.now()) {
                    // console.log("token expired, refreshing"); //@todo store the state so we don't continually refresh
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
                        refreshToken: tokenInfo.refresh_token,
                        clientId: clientId,
                        clientSecret: clientSecret,
                        redirectUrl: redirectUrl,
                    });
                    const tokenResponse = await res.json();
                    // console.log("tokenResponse", tokenResponse);
                    if (context.init.headers) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        context.init.headers.Authorization = `Bearer ${tokenResponse.access_token}`;
                    }
                }
                return {url: context.url, init: context.init}
            }
        }]
    }));
	return Onshape;
}
