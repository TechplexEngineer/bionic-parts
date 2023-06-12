import {describe, it} from "vitest";
import getdb, {DataLayer} from "$lib/getdb";


describe("db", () => {
    it('should ', async () => {
        const ddb = await getdb(undefined);
        const db = new DataLayer(ddb);

        const res = await db.getProjectsByOnshapeDocId("da2bc7f409791a8720b27217")
        console.log(res);
    });
});