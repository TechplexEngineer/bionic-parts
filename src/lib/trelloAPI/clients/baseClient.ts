import type {Client} from './client';
import type {Config} from '../config';

import type {RequestConfig} from '../types';

function encode(value: string) {
    return encodeURIComponent(value)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}

export const paramSerializer = (parameters: Record<string, any>): string => {
    const parts: string[] = [];

    Object.entries(parameters).forEach(([key, value]) => {
        if (value === null || typeof value === 'undefined') {
            return undefined;
        }

        if (Array.isArray(value)) {
            // eslint-disable-next-line no-param-reassign
            value = value.join(',');
        }

        if (value instanceof Date) {
            // eslint-disable-next-line no-param-reassign
            value = value.toISOString();
        } else if (value !== null && typeof value === 'object') {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
        }

        parts.push(`${encode(key)}=${encode(value)}`);

        return undefined;
    });

    return parts.join('&');
}

export class BaseClient implements Client {

    private defaultBaseUrl = 'https://api.trello.com/1'

    constructor(private config: Config) {
        this.config.baseUrl = this.config.baseUrl ?? this.defaultBaseUrl;
    }

    async sendRequest<T>(rawRequestConfig: RequestConfig): Promise<T> {
        const params = paramSerializer({
            ...rawRequestConfig.params,
            key: this.config.key,
            token: this.config.token,
        });
        const url = `${this.config.baseUrl}/${rawRequestConfig.url}?${params}`;
        const response = await fetch(url, {
            method: rawRequestConfig.method,
            headers: rawRequestConfig.headers,
            body: rawRequestConfig.data,
        });

        if (200 <= response.status && response.status <= 299) {
            return await response.json();
        }

        throw new Error(`Trello API error Status: ${response.status} RequestBody: ${await response.text()}`);
    }
}
