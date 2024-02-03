import type { Actions, PageServerLoad } from './$types';

import { message, superValidate } from 'sveltekit-superforms/server';
import { orderRequestSchema } from './orderRequestSchemea';
import { fail, redirect } from '@sveltejs/kit';

export const load = (async () => {
    // Server API:
    const form = await superValidate(orderRequestSchema);

    // Always return { form } in load and form actions.
    return { form };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({request}) => {
        const form = await superValidate(request, orderRequestSchema);

        // Convenient validation check:
        if (!form.valid) {
            // Again, always return { form } and things will just work.
            return fail(400, {form});
        }

        const resp = await fetch("https://script.google.com/macros/s/AKfycbzWeROGIu3-TzXGCZVnJ6qSil0CTAr1oW9T3-HdNJnv13JSl8TQnZSZGyATmasvhbTrBg/exec", {
            method: "POST",
            body: JSON.stringify({
                "item": "test",
                "part number": "test pn"
            })
        })

        // TODO: Do something with the validated data
        console.log('POST', request.url, form.data);

        return message(form, "Form Submitted"); // use this for forms to make changes without redirecting

        // add a large delay to demonstrate the loading indicator
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("")
            }, 5000)
        })

        throw redirect(302, request.url)

        // Yep, return { form } here too
        return {form};
    }
} satisfies Actions;