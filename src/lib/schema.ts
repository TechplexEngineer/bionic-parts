import {customType, integer, sqliteTable, text, uniqueIndex} from 'drizzle-orm/sqlite-core';
import type {InferModel} from "drizzle-orm";


interface ProjectData {
    onshape: {
        access: {
            read?: {
                // onshape team ids that can release parts in this project
                teamId: string,
            }[],
            write?: {
                // onshape team ids that can add documents to the project
                teamId: string,
            }[]
        }
        docIds: string[],
        // mainAssembly: { did: string, eid: string },
    },
    trello: {
        boardId: string,
    }
}

// had to create a custom type as the blob type with mode JSON has a buffer encode that makes the
// sqlite json functions not work and was not working in the workers env.
// see https://github.com/drizzle-team/drizzle-orm/issues/749
const dbJson = customType({
    dataType: () => 'text', // must be text for sqlite3 json operators to work
    toDriver: (value: any) => JSON.stringify(value),
    fromDriver: (value: any) => JSON.parse(value),
});


// A project relates onshape documents with a trello board and access permissions
export const projectSchema = sqliteTable('projects', {
    id: integer('id').primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    data: dbJson('data').$type<ProjectData>(), //json data
}, (table) => ({
    nameIdx: uniqueIndex('slugUniqueIdx').on(table.slug),
}));
export type ProjectModel = InferModel<typeof projectSchema>;
