
import { TrelloClient } from 'trello.js';
import fetchAdapter from "@haverstack/axios-fetch-adapter"

const trelloClient = new TrelloClient({
	key: import.meta.env.VITE_TRELLO_KEY,
	token: import.meta.env.VITE_TRELLO_TOKEN,
    baseRequestConfig: {
		adapter: fetchAdapter
	}
});

export default trelloClient;