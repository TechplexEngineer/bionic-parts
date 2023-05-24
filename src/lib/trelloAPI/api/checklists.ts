import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';
import type {Checklist} from "$lib/trelloAPI/api/models";

export class Checklists {
    constructor(private client: Client) {
    }

    async createChecklist<T = Checklist>(
        parameters: Parameters.CreateChecklist,
    ): Promise<T> {
        const config: RequestConfig = {
            url: '/checklists',
            method: 'POST',
            params: {
                idCard: parameters.idCard,
                name: parameters.name,
                pos: parameters.pos,
                idChecklistSource: parameters.idChecklistSource,
            },
        };

        return this.client.sendRequest(config);
    }

    async getChecklist<T = Checklist>(parameters: Parameters.GetChecklist): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}`,
            method: 'GET',
            params: {
                cards: parameters.cards,
                checkItems: parameters.checkItems,
                checkItem_fields: parameters.checkItemFields,
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update an existing checklist. */
    async updateChecklist<T = Checklist>(
        parameters: Parameters.UpdateChecklist,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}`,
            method: 'PUT',
            params: {
                name: parameters.name,
                pos: parameters.pos,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a checklist */
    async deleteChecklist<T = unknown>(
        parameters: Parameters.DeleteChecklist,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    async getChecklistField<T = unknown>(
        parameters: Parameters.GetChecklistField,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}/${parameters.field}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }


    async updateChecklistField<T = unknown>(
        parameters: Parameters.UpdateChecklistField,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}/${parameters.field}`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    async getChecklistBoard<T = unknown>(
        parameters: Parameters.GetChecklistBoard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}/board`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    async getChecklistCards<T = unknown>(
        parameters: Parameters.GetChecklistCards,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}/cards`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }


    async getChecklistCheckItems<T = unknown>(
        parameters: Parameters.GetChecklistCheckItems,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}/checkItems`,
            method: 'GET',
            params: {
                filter: parameters.filter,
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }


    async createChecklistCheckItems<T = unknown>(
        parameters: Parameters.CreateChecklistCheckItems,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}/checkItems`,
            method: 'POST',
            params: {
                name: parameters.name,
                pos: parameters.pos,
                checked: parameters.checked,
            },
        };

        return this.client.sendRequest(config);
    }


    async getChecklistCheckItem<T = unknown>(
        parameters: Parameters.GetChecklistCheckItem,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}/checkItems/${parameters.idCheckItem}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Remove an item from a checklist */
    async deleteChecklistCheckItem<T = unknown>(
        parameters: Parameters.DeleteChecklistCheckItem,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/checklists/${parameters.id}/checkItems/${parameters.idCheckItem}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }
}
