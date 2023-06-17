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
import {
    Actions,
    Applications,
    Batch,
    Boards,
    Cards,
    Checklists,
    CustomFields,
    Emoji,
    Enterprises, Labels, Lists, Members, Notifications, Organizations, Plugins, Search, Tokens, Webhooks
} from "$lib/trelloAPI/api";
import type {Client, RequestConfig} from "$lib/trelloAPI";
import type {Config} from "$lib/trelloAPI/config";
import {paramSerializer} from "$lib/trelloAPI";

const key = import.meta.env.VITE_TRELLO_KEY;
if (!key) {
    throw new Error('Missing VITE_TRELLO_KEY');
}
const secret = import.meta.env.VITE_TRELLO_SECRET;
if (!secret) {
    throw new Error('Missing VITE_TRELLO_SECRET');
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

interface OauthTrelloClientConfig {
    oauthAccessToken: string
    oauthAccessTokenSecret: string
    baseUrl?: string
}

export class OauthTrelloClient implements Client {

    private defaultBaseUrl = 'https://api.trello.com/1'

    constructor(private config: OauthTrelloClientConfig) {
        this.config.baseUrl = this.config.baseUrl ?? this.defaultBaseUrl;
    }

    actions = new Actions(this);
    applications = new Applications(this);
    batch = new Batch(this);
    boards = new Boards(this);
    cards = new Cards(this);
    checklists = new Checklists(this);
    customFields = new CustomFields(this);
    emoji = new Emoji(this);
    enterprises = new Enterprises(this);
    labels = new Labels(this);
    lists = new Lists(this);
    members = new Members(this);
    notifications = new Notifications(this);
    organizations = new Organizations(this);
    plugins = new Plugins(this);
    search = new Search(this);
    tokens = new Tokens(this);
    webhooks = new Webhooks(this);

    async sendRequest<T>(rawRequestConfig: RequestConfig): Promise<T> {
        const params = paramSerializer({
            ...rawRequestConfig.params,
        });
        const url = `${this.config.baseUrl}/${rawRequestConfig.url}?${params}`;


        const auth = oauth.toAuthHeader(await client.sign(
            rawRequestConfig.method,
            url,
            {
                token: {
                    key: this.config.oauthAccessToken,
                    secret: this.config.oauthAccessTokenSecret,
                }
            },
        ));

        const req = new Request(url, {
            method: rawRequestConfig.method,
            headers: {
                'Authorization': auth,
                ...rawRequestConfig.headers,
            },
            body: rawRequestConfig.data
        })

        const response = await fetch(req);

        if (200 <= response.status && response.status <= 299) {
            return await response.json();
        }

        throw new Error(`Trello API error Status: ${response.status} RequestBody: ${await response.text()}`);
    }
}