import {error} from '@sveltejs/kit';
import type {RequestHandler} from './$types';
import trelloClient from "$lib/trello";
import {BTTranslationRequestState} from "$lib/OnshapeAPI";
import {getOnshapeClient} from "$lib/onshape";
import type {Oauth2Token} from "$lib/onshape";
import type {IncomingWebhook} from "./incommingWebhook";
import type {WebhookUserData} from "./webhookUserData";

const registerEvent = "webhook.register";


export const POST = (async (event) => {
    const body = await event.request.json() as unknown as IncomingWebhook;

    if (body.event == registerEvent) {
        return new Response();
    }

    if (body.event != "onshape.model.translation.complete") {
        console.log("unhandled event", body.event, body)
        return new Response();
    }
    const translationId = body.translationId!
    try {
        const event = JSON.parse(body.data) as unknown as WebhookUserData;

        const Onshape = await getOnshapeClient(event.tokenInfo);

        const translation = await Onshape.TranslationApi.getTranslation({tid: translationId});

        if (translation.requestState != BTTranslationRequestState.Done) {
            console.log(`translation ${translationId} status ${translation.requestState}, unable to proceed`)
            if (translation.requestState == BTTranslationRequestState.Failed) {
                return new Response(); // @todo send error to remove webhook
            } else {
                return new Response(); // webhook should be called again later
            }
        }

        console.log("translation", translation) // @todo not sure which fields are populated
        // {
        //     documentId: 'da2bc7f409791a8720b27217',
        //     href: 'https://cad.onshape.com/api/v6/translations/64760fe6c1e696296a252e59',
        //     id: '64760fe6c1e696296a252e59',
        //     name: 'Part Studio 1 - Part 2',
        //     requestElementId: 'dfc0766722250803423263f8',
        //     requestState: 'DONE',
        //     resultDocumentId: 'da2bc7f409791a8720b27217',
        //     resultExternalDataIds: [ '64760fec47c6ac151b4fb9db' ],
        //     versionId: 'e6dfc5a88fdafa4560bfa609'
        // }

        // translation.requestElementId; //which are these are used when?
        if (!translation.resultExternalDataIds || !translation.resultDocumentId) {
            return new Response(); //@todo send error to remove webhook
        }

        for (const resultElementId of translation.resultExternalDataIds) {
            const file = await Onshape.DocumentApi.downloadExternalData({
                did: translation.resultDocumentId,
                fid: resultElementId,
            })

            // const file = await Onshape.BlobElementApi.downloadFileWorkspace({
            //     did: translation.resultDocumentId,
            //     wid: translation.resultWorkspaceId!,
            //     eid: resultElementId,
            //     // contentDisposition: "Test"
            // }, {
            //     headers: {
            //         Accept: 'application/octet-stream'
            //     }
            // })
            await trelloClient.cards.createCardAttachment({
                id: event.cardId,
                file: file,
                name: `${translation.name}.step`
            });

            if (body.webhookId) {
                await Onshape.WebhookApi.unregisterWebhook({webhookid: body.webhookId})
            } else {
                console.log("no webhook id to unregister")
            }
        }
    } catch (e) {
        console.log("Error processing webhook", e, body)
        // console.log("Expected event data to be json. got:", body.data)
    }
    return new Response();


}) satisfies RequestHandler;