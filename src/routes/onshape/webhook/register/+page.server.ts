/**
 * This file allows the registration of webhooks for testing purposes.
 */
import type {PageServerLoad} from './$types';

export const load = (async ({url: {searchParams}, cookies, locals: {onshape: Onshape}}) => {
    if (!Onshape.client) {
        throw Onshape.loginRedirect();
    }
    
    const webhook = await Onshape.client.WebhookApi.getWebhooks({})
    console.log("webhook", JSON.stringify(webhook, null, 2))

    return {
        webhooks: webhook.items
    }
}) satisfies PageServerLoad;
