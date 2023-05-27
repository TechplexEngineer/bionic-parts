import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";

export interface PartRelease {
    part: BTPartMetadataInfo,
    qty: number,
    mfgMethod: string,
    notes: string,
    params: OnshapeFrameQueryParams,
    subsystemName: string,
}