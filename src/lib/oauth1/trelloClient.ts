// class TrelloClient {
//     private fetchApi: typeof fetch;
//
//     constructor(fetchApi?: typeof fetch) {
//         this.fetchApi = fetchApi || fetch;
//     }
//
//     public async getOAuthRequestToken() {
//
//     }
// }

import * as oauth from "$lib/oauth1/mod"

const key = import.meta.env.VITE_TRELLO_KEY;
if (!key) {
    throw new Error('Missing trello key');
}
const secret = import.meta.env.VITE_TRELLO_SECRET;
if (!secret) {
    throw new Error('Missing trello token');
}

const client = new oauth.OAuthClient({
    consumer: {
        key: key,
        secret: secret
    },
    signature: oauth.HMAC_SHA1, //from the example https://glitch.com/edit/#!/trello-oauth
});


export const buildRequestGetOAuthRequestToken = async (callbackUri: string): Promise<Request> => {

    const method = "POST";
    const url = "https://trello.com/1/OAuthGetRequestToken";

    const auth = oauth.toAuthHeader(await client.sign(
        method,
        url,
        {
            params: {
                oauth_callback: callbackUri,
            }
        },
    ));

    return new Request(url, {
        method: method,
        headers: {
            'Authorization': auth,
        },
    })
}

export const buildRequestGetOAuthAccessToken = async (oauthToken: string, oauthTokenSecret: string, oauthVerifier: string): Promise<Request> => {

    const method = "POST";
    const url = "https://trello.com/1/OAuthGetAccessToken";

    const auth = oauth.toAuthHeader(await client.sign(
        method,
        url,
        {
            token: {
                key: oauthToken,
                secret: oauthTokenSecret,
            },
            params: {
                oauth_verifier: oauthVerifier,
            }
        },
    ));

    return new Request(url, {
        method: method,
        headers: {
            'Authorization': auth,
        },
    })
}