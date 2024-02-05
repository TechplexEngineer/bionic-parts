import type { Actions, PageServerLoad } from './$types';

import { message, superValidate } from 'sveltekit-superforms/server';
import { orderRequestSchema } from './orderRequestSchemea';
import { fail } from '@sveltejs/kit';
import { redirect } from 'sveltekit-flash-message/server'

export const load = (async ({ url }) => {
    // Server API:
    const form = await superValidate(orderRequestSchema);

    form.data.item = url.searchParams.get('item') || url.searchParams.get('i') || "";
    form.data.partNumber = url.searchParams.get('partNumber') || url.searchParams.get('pn') || "";
    form.data.vendor = url.searchParams.get('vendor') || url.searchParams.get('v') || "";
    form.data.quantity = url.searchParams.get('quantity') || url.searchParams.get('q') || "";
    form.data.requester = url.searchParams.get('requester') || url.searchParams.get('req') || "";

    // Always return { form } in load and form actions.
    return { form };
}) satisfies PageServerLoad;

export const actions = {
    default: async (props) => {
        const { request } = props;
        const form = await superValidate(request, orderRequestSchema);

        // Convenient validation check:
        if (!form.valid) {
            // Again, always return { form } and things will just work.
            return fail(400, {form});
        }

        const resp = await fetch("https://script.google.com/macros/s/AKfycbzWeROGIu3-TzXGCZVnJ6qSil0CTAr1oW9T3-HdNJnv13JSl8TQnZSZGyATmasvhbTrBg/exec", {
            method: "POST",
            body: JSON.stringify({
                "item": form.data.item,
                "part number": form.data.partNumber,
                "qty": form.data.quantity,
                "requester": form.data.requester
            })
        })


        // // TODO: Do something with the validated data
        // console.log('POST', request.url, form.data);

        // return message(form, "Item added to Order Sheet Submitted"); // use this for forms to make changes without redirecting

        // // add a large delay to demonstrate the loading indicator
        // await new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve("")
        //     }, 5000)
        // })

        const reqUrl = new URL(request.url)

        console.log('reqUrl', reqUrl.origin + reqUrl.pathname);



        throw redirect(reqUrl.origin + reqUrl.pathname, { type: "success", message: "Item added to Order Sheet Submitted" }, props);

        // Yep, return { form } here too
        return {form};
    }
} satisfies Actions;