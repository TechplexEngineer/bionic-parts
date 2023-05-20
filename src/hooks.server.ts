import type { Handle } from '@sveltejs/kit';
import getdb from "$lib/getdb";

export const handle = (async ({ event, resolve }) => {
    // Inject the database into all requests
    event.locals.db = await getdb(event.platform);

    return resolve(event);

}) satisfies Handle;