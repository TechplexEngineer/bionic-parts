import type {Actions, PageServerLoad} from './$types';
import {createNewProject} from "./createNewProject";
import {filterProjects, formDataToObject} from "$lib/util";
import {redirect} from "@sveltejs/kit";
import {getOnshapeClientFromCookies, onshapeCookieName} from "$lib/onshape";

enum ProjectStatus {
    Active = "Active",
    Archived = "Archived"
}

const projects = [
    {
        name: 'Part Release Testing',
        slug: 'prt',
        onshapeDocIds: ['https://cad.onshape.com/documents/da2bc7f409791a8720b27217'],
        mainAssembly: {did: "da2bc7f409791a8720b27217", eid: '664a9bb3abb6cc5366dcb48c'},
        status: ProjectStatus.Active,
        trello: "https://trello.com/b/OGUJmSaG/design-to-manufacturing"
    },
    {
        name: 'Equinox - 2023 Charged Up',
        slug: "2023",
        onshapeDocIds: ['658f927b92496d6e1d48f734', '4ea26e79e54813afbedeac75', '8a5c1e82b8ee360e344bae3f', '1160e05bce038d95370ba3b7', '616204c430ecab0324dcddd9'],
        mainAssembly: {did: '616204c430ecab0324dcddd9', eid: '046763c2f9e0b227050e2182'},
        status: ProjectStatus.Active
    },
    {
        name: 'Pandora - 2022 Rapid React',
        slug: "2022",
        onshapeDocIds: ['ef5af647c02e3b8511615776'],
        mainAssembly: {did: 'ef5af647c02e3b8511615776', eid: '0cf335002fd47035deb8fc5a'},
        status: ProjectStatus.Archived
    },
    {
        name: 'Putney Shed',
        slug: "shed",
        onshapeDocIds: ['2088a3e0bb9aac1250987e2f', '7e1538310bd669aa384247d7', 'c57cc05e4ed47c6254e67f34', '61bafcdc50dec80b93789acb', '752127334c726821ec2ba5b5', '47b0a8f30dcf78147ad7fa4e'],
        mainAssembly: {did: '47b0a8f30dcf78147ad7fa4e', eid: 'f346ac940af13018d5b7467c'},
        status: ProjectStatus.Active
    },
    {
        name: 'Superpit',
        slug: "pit23",
        onshapeDocIds: ['784f8ba95c876288b27f8cb3'],
        mainAssembly: {did: '784f8ba95c876288b27f8cb3', eid: '25458a243f4f90ffbefdd000'},
        status: ProjectStatus.Active
    }
]

export const load = (async ({locals: {db}, cookies}) => {
    const projects = await db.getAllProjects();

    const Onshape = await getOnshapeClientFromCookies(cookies);
    const teamInfo = await Onshape.TeamApi.find({});

    const filteredProjects = filterProjects(projects, teamInfo);

    console.log("Team Info", teamInfo);
    console.log("Projects", projects);
    console.log("Filtered Projects", filteredProjects);

    return {
        projects: filteredProjects
    };
}) satisfies PageServerLoad;

export const actions = {
    default: async (event) => {
        // console.log("Create New Project", event);
        const inputData = await createNewProject(event)
        console.log("Create New Project", inputData);

        if (inputData?.queryState) {
            // 303 = request changed to GET and body thrown away as we have already processed it
            throw redirect(303, `/onshape/release/?${inputData?.queryState || inputData?.slug}`);
        } else {
            // 303 = request changed to GET and body thrown away as we have already processed it
            throw redirect(303, `/onshape/project/${inputData?.slug}`);
        }
    },
} satisfies Actions;
