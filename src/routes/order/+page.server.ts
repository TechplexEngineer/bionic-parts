import type { Actions, PageServerLoad } from './$types';

import { superValidate } from 'sveltekit-superforms/server';
import { orderRequestSchema } from './orderRequestSchemea';

export const load = (async () => {
    // Server API:
    const form = await superValidate(orderRequestSchema);

    // Always return { form } in load and form actions.
    return { form };
}) satisfies PageServerLoad;