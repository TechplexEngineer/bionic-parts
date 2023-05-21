import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Plugins {
    constructor(private client: Client) {
    }

    /** Get plugins */
    async getPlugin<T = Models.Plugin>(parameters: Parameters.GetPlugin): Promise<T> {
        const config: RequestConfig = {
            url: `/plugins/${parameters.id}/`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Update a Plugin */
    async updatePlugin<T = Models.Plugin>(
        parameters: Parameters.UpdatePlugin,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/plugins/${parameters.id}/`,
            method: 'PUT',
        };

        return this.client.sendRequest(config);
    }

    /** Create a new listing for a given locale for your Power-Up */
    async createPluginListing<T = Models.PluginListing>(
        parameters: Parameters.CreatePluginListing,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/plugins/${parameters.idPlugin}/listing`,
            method: 'POST',
            data: {
                description: parameters.description,
                locale: parameters.locale,
                overview: parameters.overview,
                name: parameters.name,
            },
        };

        return this.client.sendRequest(config);
    }


    async getPluginComplianceMemberPrivacy<T = unknown>(
        parameters: Parameters.GetPluginComplianceMemberPrivacy,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/plugins/${parameters.id}/compliance/memberPrivacy`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Update an existing listing for your Power-Up */
    async updatePluginListing<T = Models.PluginListing>(
        parameters: Parameters.UpdatePluginListing,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/plugins/${parameters.idPlugin}/listings/${parameters.idListing}`,
            method: 'PUT',
            data: {
                description: parameters.description,
                locale: parameters.locale,
                overview: parameters.overview,
                name: parameters.name,
            },
        };

        return this.client.sendRequest(config);
    }
}
