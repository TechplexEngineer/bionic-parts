import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Applications {
    constructor(private client: Client) {
    }

    async applicationsKeyCompliance<T = unknown>(
        parameters: Parameters.ApplicationsKeyCompliance,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/applications/${parameters.key}/compliance`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }
}
