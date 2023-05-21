

export type RequestConfig = {
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    params?: {[key: string]: any},
    headers?: {[key: string]: any},
    data?: any,
};
