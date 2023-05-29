import type {Oauth2Token} from "$lib/onshape";

export interface WebhookUserData {
    tokenInfo: Oauth2Token //@todo this is probably a bad idea (insecure) should read from private storage kv or db1
    // translationId: string,
    cardId: string
}