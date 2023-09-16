import {message, superValidate} from 'sveltekit-superforms/server';
import type {Actions, PageServerLoad} from './$types';
import {fail, redirect} from "@sveltejs/kit";
import {schema} from "../form/schema";

export const load = (async () => {
    // Server API:
    const form = await superValidate(schema);

    // Always return { form } in load and form actions.
    return {form};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({request}) => {
        const form = await superValidate(request, schema);

        // Convenient validation check:
        if (!form.valid) {
            // Again, always return { form } and things will just work.
            return fail(400, {form});
        }

        // TODO: Do something with the validated data
        console.log('POST', request.url, form.data);

        // return message(form, "Form Submitted"); // use this for forms to make changes without redirecting

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