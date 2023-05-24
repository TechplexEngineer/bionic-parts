// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        interface Platform {
            env?: {
                BIONIC_PARTS_DB?: D1Database;
            }
        }

    }

    interface ImportMetaEnv {
        VITE_ONSHAPE_ACCESS_KEY?: string;
        VITE_ONSHAPE_SECRET_KEY?: string;
        VITE_TRELLO_KEY?: string;
        VITE_TRELLO_TOKEN?: string;
    }
}

export {};
