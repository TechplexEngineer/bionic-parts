import type {Actions, PageServerLoad} from './$types';
import {createNewProject} from "./createNewProject";
import {filterProjects, formDataToObject} from "$lib/util";
import {redirect} from "@sveltejs/kit";
import {getOnshapeClientFromCookies, onshapeCookieName} from "$lib/onshape";

enum ProjectStatus {
    Active = "Active",
    Archived = "Archived"
}

export const load = (async ({locals: {db}, cookies}) => {
    const projects = await db.getAllProjects();

    const Onshape = await getOnshapeClientFromCookies(cookies);
    const teamInfo = await Onshape.TeamApi.find({});

    const filteredProjects = filterProjects(projects, teamInfo);

    // console.log("Team Info", teamInfo);
    // console.log("Projects", projects);
    // console.log("Filtered Projects", filteredProjects);

    return {
        projects: filteredProjects
    };
}) satisfies PageServerLoad;

export const actions = {
    createProject: async (event) => {
        // console.log("Create New Project", event);
        const inputData = await createNewProject(event)
        console.log("Create New Project", inputData);

        if (inputData?.queryState) {
            // 303 = request changed to GET and body thrown away as we have already processed it
            throw redirect(303, `/onshape/release/?${inputData?.queryState}`);
        } else {
            // 303 = request changed to GET and body thrown away as we have already processed it
            throw redirect(303, `/onshape/project/${inputData?.slug}`);
        }
    },
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
            throw redirect(303, `/onshape/project/${project?.slug}`);
        }
    }
} satisfies Actions;
