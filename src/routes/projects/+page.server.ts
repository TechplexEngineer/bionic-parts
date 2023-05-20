import type { PageServerLoad, Actions } from './$types';
import OnshapeApi, {WVM} from '$lib/OnshapeAPI';
import type {GetOpts} from "$lib/OnshapeAPI";

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

const Onshape = new OnshapeApi({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: true
});

enum ProjectStatus {
	Active = "Active",
	Archived = "Archived"
}

const projects = [
    {
        name: 'Part Release Testing',
        slug: 'prt',
        onshapeDocumentIds: ['da2bc7f409791a8720b27217'],
        mainAssembly: {did:"da2bc7f409791a8720b27217", eid: '664a9bb3abb6cc5366dcb48c'},
		status: ProjectStatus.Active
    },
	{
		name: 'Equinox - 2023 Charged Up',
		slug: "2023",
		onshapeDocumentIds: ['658f927b92496d6e1d48f734', '4ea26e79e54813afbedeac75', '8a5c1e82b8ee360e344bae3f', '1160e05bce038d95370ba3b7', '616204c430ecab0324dcddd9'],
		mainAssembly: {did: '616204c430ecab0324dcddd9', eid:'046763c2f9e0b227050e2182'},
		status: ProjectStatus.Active
	},
	{
		name: 'Pandora - 2022 Rapid React',
		slug: "2022",
		onshapeDocumentIds: ['ef5af647c02e3b8511615776'],
		mainAssembly: {did:'ef5af647c02e3b8511615776', eid:'0cf335002fd47035deb8fc5a'},
		status: ProjectStatus.Archived
	},
	{
		name: 'Putney Shed',
		slug: "shed",
		onshapeDocumentIds: ['2088a3e0bb9aac1250987e2f', '7e1538310bd669aa384247d7', 'c57cc05e4ed47c6254e67f34', '61bafcdc50dec80b93789acb', '752127334c726821ec2ba5b5', '47b0a8f30dcf78147ad7fa4e'],
		mainAssembly: {did:'47b0a8f30dcf78147ad7fa4e', eid:'f346ac940af13018d5b7467c'},
		status: ProjectStatus.Active
	},
	{
		name: 'Superpit',
		slug: "pit23",
		onshapeDocumentIds: ['784f8ba95c876288b27f8cb3'],
		mainAssembly: {did: '784f8ba95c876288b27f8cb3', eid:'25458a243f4f90ffbefdd000'},
		status: ProjectStatus.Active
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
