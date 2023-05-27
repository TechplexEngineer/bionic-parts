import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";

export interface PartRelease {
    part: BTPartMetadataInfo,
    qty: number,
    notes: string,
    params: OnshapeFrameQueryParams,
    subsystemName: string,

    mfgMethod: string
    machinesUsed: string
    printerUsed: string
    printerMaterialUsed: string
    cotsLink: string
}