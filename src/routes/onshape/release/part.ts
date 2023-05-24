import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
import type {PartReleaseState} from "./PartReleaseState";

export interface Part {
    part: BTPartMetadataInfo,
    state: PartReleaseState
}