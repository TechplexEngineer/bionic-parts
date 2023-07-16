import type {Actions, PageServerLoad} from './$types';
import {filterProjects} from "$lib/util";
import {redirect} from "@sveltejs/kit";

export const load = (async ({locals: {db, onshape: Onshape}, cookies, url: {searchParams}}) => {
    const projects = await db.getAllProjects();

    if (!Onshape.client) {
        throw Onshape.loginRedirect();
    }

    const teamInfo = await Onshape.client.TeamApi.find({});
    const userInfo = await Onshape.client.UserApi.sessionInfo();

    const filteredProjects = filterProjects(projects, teamInfo, userInfo.id);

    return {
        projects: filteredProjects
    };
}) satisfies PageServerLoad;

export const actions = {

    addDoc2Project: async ({request, locals: {db}}) => {
        const data = await request.formData();
        const onshapeDocId = data.get("onshapeDocId") as string;
        const projectId = data.get("projectId") as string;

        const project = await db.addDoc2Project(onshapeDocId, parseInt(projectId));

        const queryState = data.get("queryState");
        if (queryState) {
            // 303 = request changed to GET and body thrown away as we have already processed it
            throw redirect(303, `/onshape/release/?${queryState}`);
        } else {
            // 303 = request changed to GET and body thrown away as we have already processed it
            throw redirect(303, `/project/${project?.slug}`);
        }
    }
} satisfies Actions;
