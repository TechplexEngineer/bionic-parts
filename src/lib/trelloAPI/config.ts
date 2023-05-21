

export interface Config {
  key: string;
  token: string;
  baseUrl?: string;
}

// export namespace Config {
//   export type Error = any;
//   export type BaseRequestConfig = any;
//   /** @deprecated */
//   export type Telemetry = any;
//
//   export interface Middlewares {
//     onError?: Config.Middlewares.OnErrorHandler;
//     onResponse?: Config.Middlewares.OnResponseHandler;
//   }
//
//   export namespace Middlewares {
//     export type OnErrorHandler = (error: Config.Error) => void;
//     export type OnResponseHandler<T = unknown> = (data: T) => void;
//   }
// }
