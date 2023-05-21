import {TrelloClient} from "$lib/trelloAPI";


const key = import.meta.env.VITE_TRELLO_KEY;
if (!key) {
    throw new Error('Missing trello key');
}
const token = import.meta.env.VITE_TRELLO_TOKEN;
if (!token) {
    throw new Error('Missing trello token');
}

const trelloClient = new TrelloClient({
    key: key,
    token: token,

});

export default trelloClient;