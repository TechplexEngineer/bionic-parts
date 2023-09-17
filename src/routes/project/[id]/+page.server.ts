import type {PageServerLoad, Actions} from './$types';
import {projectSchema} from "$lib/schema";
import {eq} from "drizzle-orm";
import {redirect} from "@sveltejs/kit";
import type {BTDocumentInfo} from "$lib/OnshapeAPI";

export const load = (async ({params, locals: {db, onshape: Onshape}}) => {
    console.time("load project")

    console.time("db.getProjectBySlug")
    const project = await db.getProjectById(parseInt(params.id))
    if (!project) {
        console.log(`project with id: ${params.id} not found`);
        throw redirect(307, '/projects');
    }
    console.timeEnd("db.getProjectBySlug")

    if (!Onshape.client) {
        throw Onshape.loginRedirect();
    }

    const promises: Promise<BTDocumentInfo>[] = [];

    console.time("getDocument loop")
    for (const did of project.data.onshape.docIds) {
        promises.push(Onshape.client.DocumentApi.getDocument({did}));
    }
    console.timeEnd("getDocument loop")

    console.time("getDocument promise.all")
    const docs = await Promise.all(promises);
    console.timeEnd("getDocument promise.all")

    console.timeEnd("load project")

    return {
        // filtered down what we publish about the project
        project: {
            id: project.id,
            name: project.name,
            data: {
                onshape: {
                    access: project.data.onshape.access,
                },
                trello: {
                    boardId: project.data.trello.boardId,
                    listId: project.data.trello.listId,
                }
            }
        },
        docs: docs,
        parts: [],
    };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({request}) => {
        return {};
    }
} satisfies Actions;
