import type {PageServerLoad, Actions} from './$types';
import {projectSchema} from "$lib/schema";
import {eq} from "drizzle-orm";
import {redirect} from "@sveltejs/kit";

export const load = (async ({params, locals: {db}}) => {
    const project = await db.select().from(projectSchema).where(eq(projectSchema.slug, params.slug)).get();
    if (!project) {
        console.log(`project with slug: ${params.slug} not found`);
        throw redirect(307, '/onshape/projects');
    }
    // const parts = await db.select().from(partsSchema).where(eq(partsSchema.projectId, project.id)).all();
    return {
        project: project,
        parts: [],
    };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({request}) => {
        return {};
    }
} satisfies Actions;
