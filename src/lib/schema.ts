import {customType, integer, sqliteTable, text, uniqueIndex} from 'drizzle-orm/sqlite-core';
import type {InferModel} from "drizzle-orm";
import type {Oauth1AccessToken} from "$lib/trello";


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
        projectOwnerId: string // onshape user that has access to project
    },
    trello: {
        boardId: string,
        listId: string,
        token: Oauth1AccessToken,
    }
}

// had to create a custom type as the blob type with mode JSON has a buffer encode that makes the
// sqlite json functions not work and was not working in the workers env.
// see https://github.com/drizzle-team/drizzle-orm/issues/749
const dbJson = customType({
    dataType: () => 'text', // must be text for sqlite3 json operators to work
    toDriver: (value: any) => {
        // console.log('dbJson toDriver', value)
        return JSON.stringify(value)
    },
    fromDriver: (value: any) => {
        // console.log('dbJson fromDriver', value)
        return JSON.parse(value)
    },
});


// A project relates onshape documents with a trello board and access permissions
export const projectSchema = sqliteTable('projects', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    data: dbJson('data').notNull().$type<ProjectData>(), //json data
});
export type ProjectModel = InferModel<typeof projectSchema>;


interface PartData {
    partId: string,
    documentId: string,
    elementId: string,
    releasedFromVersion: {
        versionId: string,
        versionDate: string,
    },
}

export const parts = sqliteTable('parts', {
    id: integer('id').primaryKey(),
    projectId: integer('projectId'),
    data: dbJson('data').notNull().$type<PartData>(), //json data
    // partId: text('onshapePartId').notNull(),
    // // partMetadata: blob('partMetadata', { mode: 'json'}).$type<{name:string, description:string}>(),
    // releasedVersion: text('onshapeReleasedVersion').notNull(),
    // userNotes: text('onshapeReleasedVersion'),
});
export type PartModel = InferModel<typeof parts>;