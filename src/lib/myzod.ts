//source: https://github.com/colinhacks/zod/pull/2042#issuecomment-1738293039

import { z, ZodType } from 'zod';
import type { ZodTypeDef } from 'zod/lib/types';

declare module 'zod' {
    interface ZodType<
        Output = any,
        Def extends ZodTypeDef = ZodTypeDef,
        Input = Output
    > {
        annotate(symbol: string | Record<string, any>, value?: any): this;
        meta?: { [key: string]: any };
    }
}

// Extend ZodType's prototype
Object.defineProperty(ZodType.prototype, 'annotate', {
    value: function (key: string | Record<string, any>, value?: any) {
        if (!this.meta) {
            this.meta = {};
        }
        if (typeof key !== 'string') {
            Object.assign(this.meta, key);
            return this;
        }
        this.meta[key] = value;
        return this;
    },
    writable: true
});

export { z };