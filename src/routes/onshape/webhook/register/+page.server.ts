/**
 * This file allows the registration of webhooks for testing purposes.
 */
import type { PageServerLoad } from './$types';

export const load = (async ({ url: { searchParams }, cookies, locals: { onshape: Onshape } }) => {
    if (!Onshape.client) {
        throw Onshape.loginRedirect();
    }

    // const res = await Onshape.client.WebhookApi.unregisterWebhook({ webhookid: "63dbe85c3dd9a956324e6a47" });
    // await Onshape.client.WebhookApi.unregisterWebhook({ webhookid: "637103dc2c0d267df2a4208d" });
    // await Onshape.client.WebhookApi.unregisterWebhook({ webhookid: "6370965f2c0d267df2a0e157" });

    // const webhook = await Onshape.client.WebhookApi.createWebhook({
    //     bTWebhookParams: {
    //         documentId: "da2bc7f409791a8720b27217",
    //         url: "https://webhook.site/f912c580-e62a-48a3-b70a-d8d29656b979",
    //         events: [
    //             "onshape.model.lifecycle.changed"
    //         ],
    //         options: {
    //             collapseEvents: true,
    //         }
    //     }
    // });
    // console.log('webhook', JSON.stringify(res, null, 2));
    

    
    return {
        // webhooks: webhook.items || []
    }
}) satisfies PageServerLoad;
