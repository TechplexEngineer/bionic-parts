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
        const translationId = body.translationId!
        try {
            const event = JSON.parse(body.data) as unknown as WebhookUserData;

            const Onshape = await getOnshapeClient(event.tokenInfo);

            const translation = await Onshape.TranslationApi.getTranslation({tid: translationId});

            if (translation.requestState != BTTranslationRequestState.Done) {
                console.log(`translation ${translationId} status ${translation.requestState}, unable to proceed`)
                return new Response();
            }

            console.log("translation", translation) // @todo not sure which fields are populated

            // translation.requestElementId; //which are these are used when?
            translation.resultElementIds

            for (const resultElementId of translation.resultElementIds!) {
                const file = await Onshape.BlobElementApi.downloadFileWorkspace({
                    did: translation.resultDocumentId!,
                    wid: translation.resultWorkspaceId!,
                    eid: resultElementId,
                    // contentDisposition: "Test"
                }, {
                    headers: {
                        Accept: 'application/octet-stream'
                    }
                })
                await trelloClient.cards.createCardAttachment({
                    id: event.cardId,
                    file: file,
                    name: ""
                })
                // @todo delete webhook
            }
        } catch (e) {
            console.log("Expected event data to be json. got:", body.data)
        }
    } else {
        console.log("unhandled event", body.event, body)
    }


    return new Response();
}) satisfies RequestHandler;