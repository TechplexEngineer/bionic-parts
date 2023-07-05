import type {PageServerLoad} from './$types';
import {redirect} from 'sveltekit-flash-message/server'

// export const load = ((event) => {
//     // Makes a 303 redirect
//     throw redirect(
//         "/flash/display",
//         {type: "danger", message: "This is a message"},
//         event
//     )
// }) satisfies PageServerLoad;

import type {Actions} from './$types';

export const actions = {
    default: async (event) => {
        // TODO log the user in
        const fd = await event.request.formData();

        const type = JSON.parse(fd.get('type') as string)?.value;
        const message = fd.get('message');

        console.log(`type: ${type} message: ${message}`)

        throw redirect(
            "/flash",
            {type: type, message: message},
            event
        )
    }
} satisfies Actions;