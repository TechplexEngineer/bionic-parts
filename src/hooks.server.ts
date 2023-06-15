import type {Handle} from '@sveltejs/kit';
import getdb, {DataLayer} from "$lib/getdb";

export const handle = (async ({event, resolve}) => {
    if (event.request.url === "http://sveltekit-prerender/[fallback]") {
        // Don't inject db for fallback prerendering
        return resolve(event);
    }

    // Inject the database into all requests
    event.locals.rawDb = await getdb(event.platform);
    event.locals.db = new DataLayer(event.locals.rawDb);

    return resolve(event);
}) satisfies Handle;