import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Batch {
    constructor(private client: Client) {
    }

    /** Make up to 10 GET requests in a single, batched API call. */
    async getBatch<T = unknown>(parameters: Parameters.GetBatch): Promise<T> {
        const config: RequestConfig = {
            url: '/batch',
            method: 'GET',
            params: {
                urls: parameters.urls,
            },
        };

        return this.client.sendRequest(config);
    }
}
