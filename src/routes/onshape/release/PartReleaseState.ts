export enum PartReleaseState {
    NeverReleased = "Never Released",
    Released = "Released",
    ChangedSinceLastRelease = "Changed Since Last Release",
    Unknown = "Unknown",
}

interface test {
    string: string
}

// const makeTyped = (pt: any)<T>: Omit<T, "">  => { // part: BTPartMetadataInfo }
//         return pt
//     }

export function makeTyped<T>(thing: any): T {
    return thing as T;
}