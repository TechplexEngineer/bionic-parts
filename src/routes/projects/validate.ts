export interface NewProjectData {
    name: string,
    slug: string,
    onshapeDoc: string[],
    trelloBoard: string,
    onshapeTeamsWrite: string[],
}

export const validateNewProject = (inputData: Record<string, string | string[] | FormDataEntryValue>): {
    valid: boolean,
    message?: string,
    value?: NewProjectData
} => {

    if (!inputData.name) {
        return {valid: false, message: "Project name is required"};
    }
    if (!inputData.slug) {
        return {valid: false, message: "Project slug is required"};
    }
    if (typeof inputData.slug !== "string" || !inputData.slug.match(/[a-z0-9-]+/)) {
        return {valid: false, message: "Project slug must be lowercase alphanumeric with dashes"};
    }
    if (!inputData.onshapeDoc) {
        return {valid: false, message: "Onshape Document IDs are required"};
    }
    if (!inputData.trelloBoardId) {
        return {valid: false, message: "Trello Board ID is required"};
    }

    const value = inputData as unknown as NewProjectData; // @todo is there a better way to do this that is more type safe?

    return {valid: true, value};
}