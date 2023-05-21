import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Webhooks {
    constructor(private client: Client) {
    }

    /** Create a new webhook. */
    async createWebhook<T = Models.Webhook>(
        parameters: Parameters.CreateWebhook,
    ): Promise<T> {
        const config: RequestConfig = {
            url: '/webhooks/',
            method: 'POST',
            params: {
                description: parameters.description,
                callbackURL: parameters.callbackURL,
                idModel: parameters.idModel,
                active: parameters.active,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a webhook by ID. */
    async getWebhook<T = Models.Webhook>(parameters: Parameters.GetWebhook): Promise<T> {
        const config: RequestConfig = {
            url: `/webhooks/${parameters.id}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Update a webhook by ID. */
    async updateWebhook<T = Models.Webhook>(
        parameters: Parameters.UpdateWebhook,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/webhooks/${parameters.id}`,
            method: 'PUT',
            params: {
                description: parameters.description,
                callbackURL: parameters.callbackURL,
                idModel: parameters.idModel,
                active: parameters.active,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a webhook by ID. */
    async deleteWebhook<T = unknown>(parameters: Parameters.DeleteWebhook): Promise<T> {
        const config: RequestConfig = {
            url: `/webhooks/${parameters.id}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Get a field on a Webhook */
    async getWebhookField<T = unknown>(
        parameters: Parameters.GetWebhookField,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/webhooks/${parameters.id}/${parameters.field}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }
}
