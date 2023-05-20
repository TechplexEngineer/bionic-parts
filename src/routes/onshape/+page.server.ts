import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import OnshapeApi, {GetOpts, WVM} from '$lib/OnshapeAPI';

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
	 * Modify game state in reaction to a keypress. If client-side JavaScript
	 * is available, this will happen in the browser instead of here
	 */
	runQuery: async ({ request, cookies }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData) as unknown as runQueryData;


		if (data.httpMethod == "get") {
			const opts: GetOpts = {
				resource: data.resource,
				d: data.did,
				e: data.eid,
				subresource: data.subresource || undefined
			};
			opts[data.wvm] = data.wvmid;

			return {
				opts: opts,
				output: await Onshape.get(opts),
				// out2: await Onshape.GetParts(data.did, WVM.V, data.wvmid, data.eid)
			}

		}

		// return {
		// 	output: "test"
		// }

		// if ()

		// Onshape.get({
		//
		// })
		// const game = new Game(cookies.get('sverdle'));
        //
		// const data = await request.formData();
		// const key = data.get('key');
        //
		// const i = game.answers.length;
        //
		// if (key === 'backspace') {
		// 	game.guesses[i] = game.guesses[i].slice(0, -1);
		// } else {
		// 	game.guesses[i] += key;
		// }
        //
		// cookies.set('sverdle', game.toString());
	},

	enter: async ({ request, cookies }) => {
		// const game = new Game(cookies.get('sverdle'));
        //
		// const data = await request.formData();
		// const guess = data.getAll('guess') as string[];
        //
		// if (!game.enter(guess)) {
		// 	return fail(400, { badGuess: true });
		// }
        //
		// cookies.set('sverdle', game.toString());
	},

	restart: async ({ cookies }) => {
		// cookies.delete('sverdle');
	}
} satisfies Actions;
