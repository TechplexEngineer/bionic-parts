import type { Part } from "./part";

export interface PartStatusRequest {
    parts: Part[],
    did: string,
    wvm: string,
    wvmid: string,
}