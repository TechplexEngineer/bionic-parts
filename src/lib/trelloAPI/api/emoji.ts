import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Emoji {
    constructor(private client: Client) {
    }

    /** List available Emoji */
    async emoji<T = Models.Emoji>(parameters?: Parameters.Emoji): Promise<T> {
        const config: RequestConfig = {
            url: '/emoji',
            method: 'GET',
            params: {
                locale: parameters?.locale,
                spritesheets: parameters?.spriteSheets,
            },
        };

        return this.client.sendRequest(config);
    }
}
