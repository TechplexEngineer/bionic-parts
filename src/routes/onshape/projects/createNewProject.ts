import {formDataToObject} from "$lib/util";
import {validateNewProject} from "./validate";
import {type Action, fail, redirect} from "@sveltejs/kit";
import type {ProjectModel} from "$lib/schema";
import {getOauth1TokenFromCookie, getTrelloClientFromCookies, trelloCookieName} from "$lib/trello";

export const createNewProject: Action = async ({request, locals: {db, onshape}, cookies}) => {

    const inputData = formDataToObject(await request.formData())

    const validation = validateNewProject(inputData);
    if (!validation.valid) {
        return fail(500, {message: validation.message});
    }
    if (!onshape.client) {
        throw onshape.loginRedirect(); //@todo this will loose data if the user submits and is not logged in
    }

    const userInfo = await onshape.client.UserApi.sessionInfo()

    // const trello = await getTrelloClientFromCookies(cookies)
    const tokenInfo = getOauth1TokenFromCookie(cookies, trelloCookieName);

    if (!tokenInfo || !('oauthAccessToken' in tokenInfo) || !('oauthAccessTokenSecret' in tokenInfo)) {
        // @todo trigger trello auth. Try not to loose data
        return null;
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
                },
                projectOwnerId: userInfo.id!
            },
            trello: {
                boardId: inputData.trelloBoardId as string,
                listId: inputData.trelloListId as string,
                token: {
                    oauthAccessToken: tokenInfo.oauthAccessToken,
                    oauthAccessTokenSecret: tokenInfo.oauthAccessTokenSecret,
                    expiryTimestamp: tokenInfo.expiryTimestamp
                }
            }
        }
    };
    try {
        await db.addNewProject(data);
    } catch (e: any) {
        console.log("fail"); //@todo handle this better
        return fail(500, {message: e?.message});
    }

    return inputData;
}