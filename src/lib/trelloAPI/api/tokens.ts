import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Tokens {
    constructor(private client: Client) {
    }

    /** Retrieve information about a token. */
    async getToken<T = Models.Token>(parameters: Parameters.GetToken): Promise<T> {
        const config: RequestConfig = {
            url: `/tokens/${parameters.token}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
                webhooks: parameters.webhooks,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Retrieve information about a token's owner by token. */
    async getTokenMember<T = Models.Member>(
        parameters: Parameters.GetTokenMember,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/tokens/${parameters.token}/member`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Retrieve all webhooks created with a Token. */
    async getTokenWebhooks<T = unknown>(
        parameters: Parameters.GetTokenWebhooks,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/tokens/${parameters.token}/webhooks`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Create a new webhook for a Token. */
    async createTokenWebhooks<T = Models.Webhook>(
        parameters: Parameters.CreateTokenWebhooks,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/tokens/${parameters.token}/webhooks`,
            method: 'POST',
            params: {
                description: parameters.description,
                callbackURL: parameters.callbackURL,
                idModel: parameters.idModel,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Retrieve a webhook created with a Token. */
    async getTokenWebhook<T = Models.Webhook>(
        parameters: Parameters.GetTokenWebhook,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Update a Webhook created by Token */
    async updateTokenWebhook<T = unknown>(
        parameters: Parameters.UpdateTokenWebhook,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
            method: 'PUT',
            params: {
                description: parameters.description,
                callbackURL: parameters.callbackURL,
                idModel: parameters.idModel,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a webhook created with given token. */
    async deleteTokenWebhook<T = unknown>(
        parameters: Parameters.DeleteTokenWebhook,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/tokens/${parameters.token}/webhooks/${parameters.idWebhook}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Delete a token. */
    async deleteToken<T = unknown>(parameters: Parameters.DeleteToken): Promise<T> {
        const config: RequestConfig = {
            url: `/tokens/${parameters.token}/`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }
}
