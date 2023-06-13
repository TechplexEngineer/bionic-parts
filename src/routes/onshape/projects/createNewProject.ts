import {formDataToObject} from "$lib/util";
import {validateNewProject} from "./validate";
import {type Action, fail, redirect} from "@sveltejs/kit";
import type {ProjectModel} from "$lib/schema";

export const createNewProject: Action = async ({request, locals: {db}}) => {

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
                access: {
                    write: (inputData.onshapeTeamsWrite as string[]).map(team => ({teamId: team as string})),
                }
            },
            trello: {
                boardId: inputData.trelloBoardId as string,
                listId: inputData.trelloListId as string,
            }
        }
    };
    try {
        await db.addNewProject(data);
    } catch (e) {
        console.log("fail"); //@todo handle this better
        return fail(500, {message: e?.message});
    }

    return inputData;
}