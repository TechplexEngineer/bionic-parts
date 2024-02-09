import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

import { message, superValidate } from 'sveltekit-superforms/server';
import { links } from '../links';

export const load = (async ({ url, params }) => {

    console.log(url, params.key)

    const redirTo = links[params.key];

    if (!redirTo)
        return { message: "Link not found" };

    throw redirect(302, redirTo.link)

}) satisfies PageServerLoad;