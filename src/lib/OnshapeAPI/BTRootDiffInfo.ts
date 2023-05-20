export interface BTRootDiffInfo {
    changes: {[key: string]: BTDiffInfo_changes},
    collectionChanges: {[key: string]: BTDiffInfo_collectionChanges[]},
    sourceVersionId: string,
    sourceMicroversionId: string,
    targetMicroversionId: string,
    targetVersionId: string,
    type: GBTNodeChange
}


export enum GBTNodeChange {
    NONE="NONE",
    MOVED="MOVED",
    MODIFIED="MODIFIED",
    MOVED_AND_MODIFIED="MOVED_AND_MODIFIED",
    ADDED="ADDED",
    DELETED="DELETED",
    UNKNOWN="UNKNOWN"

}
export interface BTDiffInfo_changes {
    type: GBTNodeChange,
    sourceValue: string,
    targetValue: string,
}

export enum EntityType {
    parts="parts",
    sketches="sketches",
    points="points",
    mateConnectors="mateConnectors",
    planes="planes",
    curves="curves",
    surfaces="surfaces",
}

export interface BTDiffInfo_collectionChanges {
    type: GBTNodeChange,
    entityType: EntityType,
    targetId: string // partId
}