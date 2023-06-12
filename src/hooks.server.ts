import type {Handle} from '@sveltejs/kit';
import getdb, {DataLayer} from "$lib/getdb";

export const handle = (async ({event, resolve}) => {
    // Inject the database into all requests
    event.locals.rawDb = await getdb(event.platform);
    event.locals.db = new DataLayer(event.locals.rawDb);
    return resolve(event);
}) satisfies Handle;