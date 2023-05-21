import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Labels {
    constructor(private client: Client) {
    }

    /** Get information about a single Label. */
    async getLabel<T = unknown>(parameters: Parameters.GetLabel): Promise<T> {
        const config: RequestConfig = {
            url: `/labels/${parameters.id}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update a label by ID. */
    async updateLabel<T = unknown>(parameters: Parameters.UpdateLabel): Promise<T> {
        const config: RequestConfig = {
            url: `/labels/${parameters.id}`,
            method: 'PUT',
            params: {
                name: parameters.name,
                color: parameters.color,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a label by ID. */
    async deleteLabel<T = unknown>(parameters: Parameters.DeleteLabel): Promise<T> {
        const config: RequestConfig = {
            url: `/labels/${parameters.id}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Update a field on a label. */
    async updateLabelField<T = unknown>(
        parameters: Parameters.UpdateLabelField,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/labels/${parameters.id}/${parameters.field}`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Create a new Label on a Board. */
    async createLabel<T = unknown>(parameters: Parameters.CreateLabel): Promise<T> {
        const config: RequestConfig = {
            url: '/labels',
            method: 'POST',
            params: {
                name: parameters.name,
                color: parameters.color,
                idBoard: parameters.idBoard,
            },
        };

        return this.client.sendRequest(config);
    }
}
