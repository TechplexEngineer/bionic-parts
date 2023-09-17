import {formDataToObject} from "$lib/util";
import {validateNewProject} from "../validate";
import {type Action, fail} from "@sveltejs/kit";
import type {ProjectModel} from "$lib/schema";
import {getOauth1TokenFromCookie, trelloCookieName} from "$lib/trello";


