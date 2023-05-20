import type { PageServerLoad, Actions } from './$types';
import OnshapeApi, {WVM} from '$lib/OnshapeAPI';

const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;

const Onshape = new OnshapeApi({
	accessKey: accessKey,
	secretKey: secretKey,
	debug: true
});


export const load = (() => {
	return {
		parts: []
	};
}) satisfies PageServerLoad;



export const actions = {

	default: async ({ request }) => {

	}
} satisfies Actions;
