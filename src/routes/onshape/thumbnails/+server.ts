/**
 * This is a proxy for onshape thumbnails api
 */
import type {RequestHandler} from "@sveltejs/kit";


export const GET = (async ({url, locals: {onshape}}) => {

    if (!onshape.client) {
        return new Response(JSON.stringify({message: "Onshape not authenticated"}), {status: 401});
    }
    const urlParam = url.searchParams.get('url');

    if (!urlParam) {
        return new Response(JSON.stringify({message: "bad request"}), {status: 400});
    }

    const matches = urlParam.match(/https:\/\/[^.]+.onshape.com\/api(\/thumbnails\/d\/[^/]+\/w\/[^/]+\/s\/\d+x\d+(\?t=\d+)?)/);
    if (!matches) {
        return new Response(JSON.stringify({message: "bad request"}), {status: 400});
    }
    const apiPath = matches[1];

    return onshape.client.request.raw({
        method: "GET",
        path: apiPath
    })

}) satisfies RequestHandler;