import type { DrizzleD1Database } from "drizzle-orm/d1";
import type { DataLayer } from "$lib/getdb";
import { OnshapeClient } from "$lib/OnshapeAPI";
import type { Redirect } from "@sveltejs/kit";
import { TrelloClient } from "$lib/trelloAPI";
import type { OauthTrelloClient } from "$lib/trelloClient";

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

            trello: {
                client: OauthTrelloClient | null,
                loginRedirect: () => Promise<Redirect>
            }
        }

        // interface PageData {}
        interface Platform {
            env?: {
                BIONIC_PARTS_DB?: D1Database;
            }
        }

    }
}

export { };
