import {describe, it, expect} from "vitest";
import getdb from "$lib/getdb";
import {sql} from "drizzle-orm";
import type {ProjectModel} from "$lib/schema";


describe("db", () => {
    it("should work", async () => {
        const db = await getdb(undefined);


        // broken
        const res = await db.all<ProjectModel>(sql`SELECT name, slug FROM projects WHERE json_extract(data, '$.onshape.docIds') LIKE '%da2bc7f409791a8720b27217%';`)

        // works
        // const qry2 = sql`SELECT name, slug FROM projects WHERE json_extract(data, '$.onshape.docIds') LIKE %${docId}%`;
        // const res = await db.all(sql`SELECT json_extract(data, '$.onshape.docIds') as t from projects;`)
        // const res = await db.all(sql`SELECT '${projectSchema.data}' as docs`)
        // const res = await db.all(sql`SELECT json_extract('{"onshape":{"docIds":["https://cad.onshape.com/documents/da2bc7f409791a8720b27217"]},"trello":{"boardId":"https://trello.com/b/OGUJmSaG/design-to-manufacturing"}}', '$.onshape.docIds') as docs`)
        // const res = await db.all(sql`SELECT data from projects`)

        console.log(res);

    });
});