import type {Actions, PageServerLoad} from './$types';
import {getOauthTokenFromCookie, onshapeCookieName} from "$lib/onshape";

export const load = (() => {
    return {};
}) satisfies PageServerLoad;

interface runQueryData {
    resource: string
    did: string
    wvm: string
    wvmid: string
    eid: string
    subresource: string
    httpMethod: string
    body: string
}

export const actions = {
    /**
     * Run a raw Onshape API request
     */
    runQuery: async ({request, cookies, locals: {onshape: Onshape}}) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData) as unknown as runQueryData;

        if (!Onshape.client) {
            throw Onshape.loginRedirect();
        }

        if (data.httpMethod == "get") {

            let path = `/${data.resource}/d/${data.did}/${data.wvm}/${data.wvmid}/e/${data.eid}`;
            if (data.subresource) path += `/${data.subresource}`

            const res = await Onshape.client.request.raw({
                method: "GET",
                path: path,
            })

            return {
                opts: {},
                output: await res.json(),
                // out2: await Onshape.GetParts(data.did, WVM.V, data.wvmid, data.eid)
            }
        }
        // NOTE: Only GET is supported as this is published online
    },
    test: async ({cookies, locals: {onshape: Onshape}}) => {
        if (!Onshape.client) {
            throw Onshape.loginRedirect();
        }
        // const res = await Onshape.request.raw({
        //     method: "GET",
        //     path: "/partstudios/d/da2bc7f409791a8720b27217/v/e6dfc5a88fdafa4560bfa609/e/dfc0766722250803423263f8/stl",
        // }, {
        //     redirect: "manual",
        // });
        // console.log("res", res);

        const res = await Onshape.client.request.exportPartStudioStl({
            did: "da2bc7f409791a8720b27217",
            wvm: "v",
            wvmid: "e6dfc5a88fdafa4560bfa609",
            eid: "dfc0766722250803423263f8"
        }, await getOauthTokenFromCookie(cookies, onshapeCookieName)!);

        console.log(await res.blob());

        // try {
        //     const a = await Onshape.PartStudioApi.exportPartStudioStlRaw({
        //         did: "da2bc7f409791a8720b27217",
        //         wvm: "v",
        //         wvmid: "e6dfc5a88fdafa4560bfa609",
        //         eid: "dfc0766722250803423263f8"
        //     }, {
        //         credentials: "include",
        //         redirect: "manual",
        //         headers: {
        //             "Accept": "application/vnd.onshape.v1+octet-stream"
        //         }
        //     });
        //     return {
        //         output: await a.raw.text(),
        //     }
        // } catch (e) {
        //     const redirRes: Response = e.response;
        //     const redirLocation = redirRes.headers.get("location");
        //     if (redirRes.status !== 307 || !redirLocation) {
        //         //sorry can't help you
        //         return {
        //             output: "Error",
        //             status: redirRes.status,
        //             statusText: redirRes.statusText,
        //         }
        //     }
        //
        //     const res = await fetch(redirLocation, {
        //         method: "GET",
        //         headers: {
        //             "Authorization": "Bearer " + await getOauthTokenFromCookie(cookies, cookieName)?.access_token,
        //         }
        //     });
        //     console.log(await res.blob());
        //     return {
        //         blob: "here"
        //     }
        // }

        // const a = await Onshape.DocumentApi.getDocumentRaw({
        //     did: "da2bc7f409791a8720b27217",
        // })

        return {
            output: "Error",
        }
    }
} satisfies Actions;