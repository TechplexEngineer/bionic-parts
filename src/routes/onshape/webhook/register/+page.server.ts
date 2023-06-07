/**
 * This file allows the registration of webhooks for testing purposes.
 */
import {clientId, onshapeCookieName, getOnshapeClientFromCookies, hasInitialToken, redirectUrl} from "$lib/onshape";
import type {OauthStateData} from "$lib/onshape";
import {base64} from "$lib/util";
import {Oauth} from "$lib/OnshapeAPI";
import {redirect} from "@sveltejs/kit";
import type {PageServerLoad} from './$types';

export const load = (async ({url: {searchParams}, cookies}) => {
    if (!await hasInitialToken(cookies, onshapeCookieName)) {
        const authUrl = Oauth.buildAuthorizeUrl({
            clientId: clientId!,
            redirectUrl: redirectUrl!,
            state: base64(JSON.stringify({searchParams, action: "webhook/register"} satisfies OauthStateData)),
            // companyId: searchParams.companyId //@todo not sure if this is needed
        })
        throw redirect(307, authUrl.toString());
    }
    const Onshape = await getOnshapeClientFromCookies(cookies, onshapeCookieName);

    const webhook = await Onshape.WebhookApi.getWebhooks({})
    console.log("webhook", JSON.stringify(webhook, null, 2))

    return {
        webhooks: webhook.items
    }
}) satisfies PageServerLoad;
