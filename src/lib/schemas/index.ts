
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import type {InferModel} from "drizzle-orm";

// export const users = sqliteTable('users', {
// 	id: integer('id').primaryKey(),
// 	name: text('name').notNull(),
// 	email: text('email').notNull(),
// });
// export type User = InferModel<typeof users>;
//
// export const projects = sqliteTable('releasedParts', {
// 	id: integer('id').primaryKey(),
// 	projectId: text('name'),
// 	partId: text('onshapePartId').notNull(),
// 	releasedVersion: text('onshapeReleasedVersion').notNull(),
// 	userNotes: text('onshapeReleasedVersion'),
// });
// export type Project = InferModel<typeof projects>;

export const parts = sqliteTable('releasedParts', {
	id: integer('id').primaryKey(),
	projectId: text('projectId'),
	partId: text('onshapePartId').notNull(),
	releasedVersion: text('onshapeReleasedVersion').notNull(),
	userNotes: text('onshapeReleasedVersion'),
});
export type PartModel = InferModel<typeof parts>;