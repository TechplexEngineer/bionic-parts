import {PartReleaseState} from "./PartReleaseState";
import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";

interface ReleasedPart {
    partId: string,
    microversionId: string
}
    

export const getPartState = async (part: BTPartMetadataInfo, releasedParts: ReleasedPart[]): Promise<PartReleaseState> => {
    if (partHasBeenReleased(part)) {
        if (partHasChanged(part, getLatestReleasedVersion(part, releasedParts))) {
            return PartReleaseState.ChangedSinceLastRelease;
        } else {
            return PartReleaseState.Released;
        }
    }
    return PartReleaseState.NeverReleased;
}

const partHasBeenReleased = (part: BTPartMetadataInfo) => {
    return false
}

const partHasChanged = (currentRev: BTPartMetadataInfo, releasedPart: BTPartMetadataInfo) => {
    if (currentRev.microversionId == releasedPart.microversionId) {
        return false;
    }
    return false
}
const getLatestReleasedVersion = (part: BTPartMetadataInfo, releasedParts: ReleasedPart[]) => {
    return part;
}