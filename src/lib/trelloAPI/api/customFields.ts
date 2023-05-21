import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class CustomFields {
    constructor(private client: Client) {
    }

    /** Create a new Custom Field on a board. */
    async createCustomField<T = Models.CustomField>(
        parameters?: Parameters.CreateCustomField,
        callback?: Callback<T>,
    ): Promise<T> {
        const config: RequestConfig = {
            url: '/customFields',
            method: 'POST',
            data: {
                idModel: parameters?.idModel,
                modelType: parameters?.modelType,
                name: parameters?.name,
                type: parameters?.type,
                options: parameters?.options,
                pos: parameters?.pos,
                display_cardFront: parameters?.displayCardFront,
            },
        };

        return this.client.sendRequest(config);
    }


    async getCustomField<T = Models.CustomField>(
        parameters: Parameters.GetCustomField,
        callback?: Callback<T>,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/customFields/${parameters.id}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Update a Custom Field definition. */
    async updateCustomField<T = Models.CustomField>(
        parameters: Parameters.UpdateCustomField,
        callback?: Callback<T>,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/customFields/${parameters.id}`,
            method: 'PUT',
            data: {
                name: parameters.name,
                pos: parameters.pos,
                'display/cardFront': parameters.dispalyCardFront,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a Custom Field from a board. */
    async deleteCustomField<T = unknown>(
        parameters: Parameters.DeleteCustomField,
        callback?: Callback<T>,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/customFields/${parameters.id}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Get the options of a drop down Custom Field */
    async getCustomFieldOptions<T = unknown>(
        parameters: Parameters.GetCustomFieldOptions,
        callback?: Callback<T>,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/customFields/${parameters.id}/options`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Add an option to a dropdown Custom Field */
    async addCustomFieldOption<T = unknown>(
        parameters: Parameters.AddCustomFieldOption,
        callback?: Callback<T>,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/customFields/${parameters.id}/options`,
            method: 'POST',
        };

        return this.client.sendRequest(config);
    }

    /** Retrieve a specific, existing Option on a given dropdown-type Custom Field */
    async getCustomFieldsOption<T = unknown>(
        parameters: Parameters.GetCustomFieldsOption,
        callback?: Callback<T>,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/customFields/${parameters.id}/options/${parameters.idCustomFieldOption}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Delete an option from a Custom Field dropdown. */
    async deleteCustomFieldsOption<T = unknown>(
        parameters: Parameters.DeleteCustomFieldsOption,
        callback?: Callback<T>,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/customFields/${parameters.id}/options/${parameters.idCustomFieldOption}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }
}
