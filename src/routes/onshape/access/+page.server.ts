import type {Actions, PageServerLoad} from './$types';
import {getOauthTokenFromCookie, onshapeCookieName} from "$lib/onshape";
import { fail } from '@sveltejs/kit';

export const load = (async ({ url: { searchParams }, cookies, locals: { onshape: Onshape } }) => {
    if (!Onshape.client) {
        throw Onshape.loginRedirect();
    }

    

    return {};
}) satisfies PageServerLoad;




export const actions = {
    access: async ({ request, locals: { db, onshape: Onshape } }) => {

        if (!Onshape.client) {
            throw Onshape.loginRedirect();
        }

        const res = await Onshape.client.request.raw({
            method: "POST",
            path: "https://cad.onshape.com/api/teams/657cebb8e48b1056c9026832/members",
            body: {
                "email": "blake.bourque@gmail.com",
                "admin": false
            }
        });
        
        if (res.status / 100 !== 2) {
            return fail(res.status, { message: res.statusText, body: await res.json() });
        }
        return {};

        
    },

} satisfies Actions;
