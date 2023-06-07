import type {Cookies} from "@sveltejs/kit";


export interface Oauth2Token {
    access_token: string;
    token_type: string; //"bearer",
    refresh_token: string;
    expires_in: number; //253,
    scope: string //Onshape: "OAuth2ReadPII,OAuth2Read", Trello: "read,write,account",
    expiryTimestamp?: number; // 1685069016155
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
    if (typeof tokenInfo.refresh_token !== "string") {
        throw new Error("Invalid tokenInfo.refresh_token");
    }

    const expiryTimestamp = Date.now() + (.75 * tokenInfo.expires_in) * 1000
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