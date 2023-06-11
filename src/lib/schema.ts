import {blob, integer, sqliteTable, text} from 'drizzle-orm/sqlite-core';
import type {InferModel} from "drizzle-orm";
import {customType} from "drizzle-orm/sqlite-core";


interface ProjectData {
    onshape: {
        // access: {
        //     read: {
        //         teamId: string,
        //     },
        //     write: {
        //         teamId: string,
        //     }
        // }
        docIds: string[],
        // mainAssembly: { did: string, eid: string },
    },
    trello: {
        boardId: string,
    }
}

const dbJson = customType({
    dataType: () => 'text',
    toDriver: (value: any) => JSON.stringify(value),
    fromDriver: (value: any) => JSON.parse(value),
});


// A project relates onshape documents with a trello board
export const projectSchema = sqliteTable('projects', {
    id: integer('id').primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    data: dbJson('data').$type<ProjectData>(), //json data
    // onshape: dbJson('onshape',).$type<{ docIds: string[] }>(),
    // mainAssembly: blob('mainAssembly', {mode: 'json'}).$type<{ did: string, eid: string }>(),
    // trello: dbJson('trello',).$type<{ boardId: string, boardUrl: string }>(),
});
export type ProjectModel = InferModel<typeof projectSchema>;
