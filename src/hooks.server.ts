import type {Handle} from '@sveltejs/kit';
import {redirect} from "@sveltejs/kit";
import getdb, {DataLayer} from "$lib/getdb";
import {sequence} from "@sveltejs/kit/hooks";
import {getOnshapeClientFromCookies, hasInitialToken} from "$lib/onshape";
import {getTrelloClientFromCookies} from "$lib/trello";
import {type BuildAuthorizeUrlParams, Oauth} from "$lib/OnshapeAPI";

const redirectUrl = import.meta.env.VITE_ONSHAPE_OAUTH_REDIRECT_URI
if (!redirectUrl) {
    throw new Error("No VITE_ONSHAPE_OAUTH_REDIRECT_URI set");
}
const clientId = import.meta.env.VITE_ONSHAPE_OAUTH_CLIENT_ID;
if (!clientId) {
    throw new Error("No VITE_ONSHAPE_OAUTH_CLIENT_ID set");
}

const injectDb = (async ({event, resolve}) => {
    if (event.request.url === "http://sveltekit-prerender/[fallback]") {
        // Don't inject for fallback pre-rendering
        return resolve(event);
    }

    // Inject the database into all requests
    event.locals.rawDb = await getdb(event.platform);
    event.locals.db = new DataLayer(event.locals.rawDb);

    return resolve(event);
}) satisfies Handle;

const injectOnshapeClient = (async ({event, resolve}) => {
    if (event.request.url === "http://sveltekit-prerender/[fallback]") {
        // Don't inject for fallback pre-rendering
        return resolve(event);
    }

    // Inject the onshape client into all requests
    event.locals.onshape = {
        client: await getOnshapeClientFromCookies(event.cookies),
        loginRedirect: async (state = "", companyId?: string) => {
            const args: BuildAuthorizeUrlParams = {
                clientId: clientId,
                redirectUrl: redirectUrl,
                state: state//base64(JSON.stringify({searchParams, action: "release"} satisfies OauthStateData))
            };
            if (companyId) {
                args.companyId = companyId;
            }
            const authUrl = Oauth.buildAuthorizeUrl(args);
            return redirect(307, authUrl.toString());

        }
    };

    return resolve(event);
}) satisfies Handle;

const injectTrelloClient = (async ({event, resolve}) => {
    if (event.request.url === "http://sveltekit-prerender/[fallback]") {
        // Don't inject for fallback pre-rendering
        return resolve(event);
    }

    // Inject the onshape client into all requests
    event.locals.trello = await getTrelloClientFromCookies(event.cookies);

    return resolve(event);
}) satisfies Handle;

export const handle = sequence(injectDb, injectOnshapeClient, injectTrelloClient);