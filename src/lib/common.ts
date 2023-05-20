import type {BTRootDiffInfo} from "$lib/OnshapeAPI/BTRootDiffInfo";

export enum PartReleaseState {
	NeverReleased = "Never Released",
	Released = "Released",
	ChangedSinceLastRelease = "Changed Since Last Release"
}
export const hasReleasedPartChanged = (releasedPartId: string, res:BTRootDiffInfo): boolean => {
	for (const [_key, value] of Object.entries(res.collectionChanges)) {
		for (const change of value) {
			if (change.targetId == releasedPartId){
				return true
			}
		}
	}
	return false
}

type Project = {
	name: string;
	slug: string;
	onshapeDID: string;
	mainAssemblyEid: string;
};
export type { Project };