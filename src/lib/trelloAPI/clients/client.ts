import type {RequestConfig} from '../types';

export interface Client {
    sendRequest<T>(requestConfig: RequestConfig): Promise<T>;
}
