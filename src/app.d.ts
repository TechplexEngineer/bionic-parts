import type {DrizzleD1Database} from "drizzle-orm/d1";
import type {DataLayer} from "$lib/getdb";
import {OnshapeClient} from "$lib/OnshapeAPI";
import type {Redirect} from "@sveltejs/kit";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}

        // Locals is a property of the RequestEvent
        interface Locals {
            rawDb: DrizzleD1Database;
            db: DataLayer;

            onshape: {
                client: OnshapeClient | null,
                loginRedirect: (state?: { [key: string]: string }, companyId?: string) => Redirect
            }
        }

        // interface PageData {}
        interface Platform {
            env?: {
                BIONIC_PARTS_DB?: D1Database;
            }
        }

    }

    interface ImportMetaEnv {
        // VITE_ONSHAPE_OAUTH_CLIENT_ID?: string;
        // VITE_ONSHAPE_OAUTH_SECRET?: string;

        VITE_ONSHAPE_OAUTH_CLIENT_ID?: string;
        VITE_ONSHAPE_OAUTH_CLIENT_SECRET?: string;
        VITE_ONSHAPE_OAUTH_REDIRECT_URI?: string;

        // VITE_TRELLO_KEY?: never;
        VITE_TRELLO_TOKEN?: never;

        VITE_TRELLO_KEY?: string;
        VITE_TRELLO_SECRET?: string;
        VITE_TRELLO_OAUTH_REDIRECT_URI?: string;
    }
}

export {};
