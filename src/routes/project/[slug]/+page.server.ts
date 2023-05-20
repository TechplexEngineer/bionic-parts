import type { PageServerLoad, Actions } from './$types';
import {projects as projectsSchema, parts as partsSchema} from "$lib/schemas";
import {eq} from "drizzle-orm";
import {redirect} from "@sveltejs/kit";

export const load =  (async ({params, locals:{db}}) => {
	const project = await db.select().from(projectsSchema).where(eq(projectsSchema.slug, params.slug)).get();
	if (!project) {
		console.log(`project with slug: ${params.slug} not found`);
		throw redirect(307, '/projects');
	}
	const parts = await db.select().from(partsSchema).where(eq(partsSchema.projectId, project.id)).all();
	return {
		project: project,
		parts: parts || [],
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		return {};
	}
} satisfies Actions;
