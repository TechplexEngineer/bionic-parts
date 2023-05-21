import type { PageServerLoad, Actions } from './$types';

import trelloClient from "$lib/trello";

export const load = (async ({locals:{db}}) => {
	return {
	};
}) satisfies PageServerLoad;

export const actions = {

	create: async ({ request , locals: {db}}) => {
		const backlogListId = "6468e280779ad802bb3775d4";
		await trelloClient.cards.createCard({
			name: "test card",
			desc: "Description",
			idList: backlogListId,
		})

		return {};
	}
} satisfies Actions;
