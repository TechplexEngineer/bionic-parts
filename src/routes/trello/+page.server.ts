import type { PageServerLoad, Actions } from './$types';
import {projects as projectsSchema} from "$lib/schemas";
import type {ProjectModel} from "$lib/schemas";

import { TrelloClient } from 'trello.js';

const trelloClient = new TrelloClient({
	key: import.meta.env.VITE_TRELLO_KEY,
	token: import.meta.env.VITE_TRELLO_TOKEN,
});


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
