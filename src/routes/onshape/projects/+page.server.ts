import type {PageServerLoad, Actions} from './$types';
import {projectSchema, type ProjectModel} from "$lib/schema";
import {validateNewProject} from "./validate";
import {fail, json, redirect} from '@sveltejs/kit';
import {formDataToObject} from "$lib/util";

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

export const load = (async ({locals: {db}}) => {
    console.log("before");
    const projects = await db.select().from(projectSchema).all();
    console.log("here", projects);

    return {
        projects
    };
}) satisfies PageServerLoad;

export const actions = {

    create: async ({request, locals: {db}}) => {

        const inputData = formDataToObject(await request.formData())

        const validation = validateNewProject(inputData);
        if (!validation.valid) {
            return fail(500, {message: validation.message});
        }

        const data: ProjectModel = {
            id: undefined as any,
            name: inputData.name as string,
            slug: inputData.slug as string,
            data: {
                onshape: {
                    docIds: [...inputData.onshapeDoc],

                },
                trello: {
                    boardId: inputData.trelloBoardId as string
                }
            }
            // trello: {
            //     boardId: inputData.trelloBoardId as string,
            //     boardUrl: inputData.trelloBoardId as string
            // },
            // onshape: {
            //     docIds: [...inputData.onshapeDoc],
            // }
            // data: JSON.stringify({
            //     onshape: {
            //         docIds: [...inputData.onshapeDoc],
            //     },
            //     trello: {
            //         boardId: inputData.trelloBoardId as string
            //     }
            // })
        };

        console.log(JSON.stringify(data));


        await db.insert(projectSchema).values(data).run();

        throw redirect(307, `/onshape/project/${inputData.slug}`)
    }
} satisfies Actions;
