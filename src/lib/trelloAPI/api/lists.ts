import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Lists {
    constructor(private client: Client) {
    }

    /** Get information about a List */
    async getList<T = unknown>(parameters: Parameters.GetList): Promise<T> {
        const config: RequestConfig = {
            url: `/lists/${parameters.id}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update the properties of a List */
    async updateList<T = unknown>(parameters: Parameters.UpdateList): Promise<T> {
        const config: RequestConfig = {
            url: `/lists/${parameters.id}`,
            method: 'PUT',
            params: {
                name: parameters.name,
                closed: parameters.closed,
                idBoard: parameters.idBoard,
                pos: parameters.pos,
                subscribed: parameters.subscribed,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Create a new List on a Board */
    async createList<T = Models.List>(parameters: Parameters.CreateList): Promise<T> {
        const config: RequestConfig = {
            url: '/lists',
            method: 'POST',
            params: {
                name: parameters.name,
                idBoard: parameters.idBoard,
                idListSource: parameters.idListSource,
                pos: parameters.pos,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Archive all cards in a list */
    async archiveAllCardsInList<T = unknown>(
        parameters: Parameters.ArchiveAllCardsInList,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/lists/${parameters.id}/archiveAllCards`,
            method: 'POST',
        };

        return this.client.sendRequest(config);
    }

    /** Move all Cards in a List */
    async moveAllCardsInList<T = unknown>(
        parameters: Parameters.MoveAllCardsInList,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/lists/${parameters.id}/moveAllCards`,
            method: 'POST',
            params: {
                idBoard: parameters.idBoard,
                idList: parameters.idList,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Archive or unarchive a list */
    async setListCloseState<T = Models.List>(
        parameters: Parameters.SetListCloseState,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/lists/${parameters.id}/closed`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Move a List to a different Board */
    async moveListToDifferentBoard<T = unknown>(
        parameters: Parameters.MoveListToDifferentBoard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/lists/${parameters.id}/idBoard`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Rename a list */
    async renameList<T = unknown>(parameters: Parameters.RenameList): Promise<T> {
        const config: RequestConfig = {
            url: `/lists/${parameters.id}/${parameters.field}`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the Actions on a List */
    async getListActions<T = unknown>(parameters: Parameters.GetListActions): Promise<T> {
        const config: RequestConfig = {
            url: `/lists/${parameters.id}/actions`,
            method: 'GET',
            params: {
                filter: parameters.filter,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the board a list is on */
    async getListBoard<T = unknown>(parameters: Parameters.GetListBoard): Promise<T> {
        const config: RequestConfig = {
            url: `/lists/${parameters.id}/board`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** List the cards in a list */
    async getListCards<T = Models.Card[]>(
        parameters: Parameters.GetListCards,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/lists/${parameters.id}/cards`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }
}
