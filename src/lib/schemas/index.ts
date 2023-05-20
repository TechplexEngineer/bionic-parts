
import {blob, integer, sqliteTable, text} from 'drizzle-orm/sqlite-core';
import type {InferModel} from "drizzle-orm";

export const parts = sqliteTable('parts', {
	id: integer('id').primaryKey(),
	projectId: text('projectId'),
	partId: text('onshapePartId').notNull(),
	releasedVersion: text('onshapeReleasedVersion').notNull(),
	userNotes: text('onshapeReleasedVersion'),
});
export type PartModel = InferModel<typeof parts>;

// export const projects = sqliteTable('projects', {
// 	id: integer('id').primaryKey(),
// 	name: text('name').notNull(),
// 	slug: text('onshapePartId').notNull(),
// 	onshapeDocIds: blob('onshapeDocIds', { mode: 'json'}).$type<string[]>(),
// 	mainAssembly: blob('mainAssembly', { mode: 'json'}).$type<{did:string, eid:string}>(),
// 	status: text('status'),
// });
// export type Project = InferModel<typeof projects>;

// export const users = sqliteTable('users', {
// 	id: integer('id').primaryKey(),
// 	name: text('name').notNull(),
// 	email: text('email').notNull(),
// });
// export type User = InferModel<typeof users>;