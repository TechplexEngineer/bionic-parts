import {describe, expect, test} from 'vitest';
import type {BTRootDiffInfo} from "$lib/OnshapeAPI/BTRootDiffInfo";
import {hasReleasedPartChanged} from "$lib/common";


const res1: BTRootDiffInfo = {
    "sourceVersionId": "4a9943812a2ae4574d5a91fa",
    "sourceMicroversionId": "e4f4822d26f0d6036d2de24e",
    "targetMicroversionId": "86777dd24dddeb23554ba31e",
    "targetVersionId": "c080ea081713baaa57431bbc",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    "type": "MODIFIED",
    "collectionChanges": {
        "sketches": [
            {
                "sketchEntityIds": [
                    "GpZlcoNKlii4"
                ],
                "featureId": "FHJgmwFAN8H9aha_2",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "type": "ADDED",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "entityType": "sketches",
                "targetId": "JID"
            },
            {
                "sketchEntityIds": [
                    "",
                    ""
                ],
                "featureId": "FHJgmwFAN8H9aha_2",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "type": "ADDED",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "entityType": "sketches",
                "targetId": "JJD"
            },
            {
                "sketchEntityIds": [
                    "GpZlcoNKlii4.center"
                ],
                "featureId": "FHJgmwFAN8H9aha_2",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "type": "ADDED",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "entityType": "sketches",
                "targetId": "JIH"
            }
        ],
        "parts": [
            {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "type": "MODIFIED",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                "entityType": "parts",
                "targetId": "JHD",
                "sourceId": "JHD",
                "changes": {
                    "geometry": {
                        "type": "MODIFIED",
                        "geometryChangeMessages": [
                            "EDGE_COUNT_CHANGED: From 12 to 14 in ",
                            "FACE_COUNT_CHANGED: From 6 to 7 in ",
                            "Mass property mismatch: Mass in  changed from [3.2774128E-5, 3.277310387233731E-5, 3.2775152127662684E-5] to [2.955653550773089E-5, 2.955557955661529E-5, 2.9557491458846494E-5]: Index 0 missed by 3.2156124134908185E-6, for ranges [ 3.277310387233731E-5, 3.2775152127662684E-5], [ 2.955557955661529E-5, 2.9557491458846494E-5]; gap is 156992.7524981195%% of range 1 and 168189.16579554867%% of range 2.",
                            "Mass property mismatch: Volume in  changed from [3.2774128E-5, 3.277310387233731E-5, 3.2775152127662684E-5] to [2.955653550773089E-5, 2.955557955661529E-5, 2.9557491458846494E-5]: Index 0 missed by 3.2156124134908185E-6, for ranges [ 3.277310387233731E-5, 3.2775152127662684E-5], [ 2.955557955661529E-5, 2.9557491458846494E-5]; gap is 156992.7524981195%% of range 1 and 168189.16579554867%% of range 2.",
                            "Mass property mismatch: Periphery in  changed from [0.0064516, 0.006451567998005333, 0.006451632001994667] to [0.007211661218646247, 0.007211630300187107, 0.007211692137105387]: Index 0 missed by 7.599982981924399E-4, for ranges [ 0.006451567998005333, 0.006451632001994667], [ 0.007211630300187107, 0.007211692137105387]; gap is 1187423.3248561174%% of range 1 and 1229036.5033185754%% of range 2.",
                            "EDGE_COUNT_CHANGED: From 12 to 14, [JLB, JLF] are added, ",
                            "FACE_COUNT_CHANGED: From 6 to 7, [JLC, JLG, JLK] are added, [JHG, JHK] are missing, "
                        ]
                    }
                }
            }
        ]
    },
    "changes": {
        "microversion": {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            "type": "MODIFIED",
            "sourceValue": "5d2050612d73558f38de0245",
            "targetValue": "6abacc965b1ad2ea5f4d5544"
        }
    }
}

describe("hasReleasedPartChanged", () => {
    // let instance = null;
    //
    // beforeEach(() => {
    //     //create instance of the component and mount it
    // })
    //
    // afterEach(() => {
    //     //destory/unmount instance
    // })

    test("Expected parts are changed", () => {
        expect(hasReleasedPartChanged("JJD", res1)).toBeTruthy();
        expect(hasReleasedPartChanged("JIH", res1)).toBeTruthy();
        expect(hasReleasedPartChanged("JHD", res1)).toBeTruthy();
    })

    test("others are not", () => {
        expect(hasReleasedPartChanged("JHH", res1)).toBeFalsy();
    })
})