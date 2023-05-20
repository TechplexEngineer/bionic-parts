import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from '../../../../.svelte-kit/types/src/routes';
import OnshapeApi, {WVM} from '$lib/OnshapeAPI';
import type {GetOpts} from "$lib/OnshapeAPI";

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

const Onshape = new OnshapeApi({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: true
});

const projects = [
    {
        name: 'Part Release Testing',
        slug: 'prt',
        onshapeDID: 'da2bc7f409791a8720b27217',
        mainAssemblyEid: '664a9bb3abb6cc5366dcb48c'
    }
]

export const load = (() => {
	return {
		projects
	};
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
	runQuery: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData) as unknown as runQueryData;

		if (data.httpMethod == "get") {
			const opts: GetOpts = {
				resource: data.resource,
				d: data.did,
				e: data.eid,
				subresource: data.subresource || undefined
			};
			opts[data.wvm as WVM] = data.wvmid;

			return {
				opts: opts,
				output: await Onshape.get(opts),
				// out2: await Onshape.GetParts(data.did, WVM.V, data.wvmid, data.eid)
			}
		}
		// NOTE: Only GET is supported as this is published online
	}
} satisfies Actions;
