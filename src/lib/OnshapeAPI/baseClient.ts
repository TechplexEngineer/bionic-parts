import type {Configuration} from "$lib/OnshapeAPI/onshape_api";

export class BaseClient {

    constructor(protected configuration: Configuration) {
    }
}