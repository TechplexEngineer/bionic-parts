// Inspired by https://github.com/BuilderIO/qwik/issues/3345#issuecomment-1475385715
import type {D1Database} from "@miniflare/d1";
import {drizzle} from "drizzle-orm/d1";
import type {DrizzleD1Database} from "drizzle-orm/d1";
import {migrate} from "drizzle-orm/d1/migrator";

let getDevDb = async (): Promise<D1Database> => {
    // throw new Error("Not in a dev env, but attempted to access dev db");
    console.log("ERROR: Not in a dev env, but attempted to access dev db")
};


if (import.meta.env.DEV) {
    const fs = await import("fs/promises");
    const {D1Database:D1D, D1DatabaseAPI} = await import("@miniflare/d1");
    const {createSQLiteDB} = await import("@miniflare/shared");

    let devDb: D1Database;

    getDevDb = async ():Promise<D1Database> => {
        if (!devDb) {
            const basePath = ".wrangler/state/d1";
            await fs.mkdir(basePath, {recursive: true});
            const sqlLite = await createSQLiteDB(
                `${basePath}/BIONIC_PARTS_DB.sqlite3`
            );
            devDb = new D1D(new D1DatabaseAPI(sqlLite));
        }
        return devDb;
    };
}

const getDbFromPlatform = async (platform: App.Platform|undefined):Promise<DrizzleD1Database> => {
    let db;
    console.log("meta", JSON.stringify(import.meta,null,2))
    console.log("mode", import.meta.env.MODE)
    console.log("prod", import.meta.env.PROD)
    console.log("dev", import.meta.env.DEV)
    console.log("ssr", import.meta.env.SSR)
    console.log("BIONIC_PARTS_DB", platform, platform?.env, platform?.env?.BIONIC_PARTS_DB)
    if (platform?.env?.BIONIC_PARTS_DB) {
        db = platform.env?.BIONIC_PARTS_DB;
    } else {
        db = await getDevDb();
    }

    console.log("db", db, !!db)


    if (import.meta.env.DEV) { //we can only apply migrations in dev
        const ddb = drizzle(db as any);
        await migrate(ddb, { migrationsFolder: "./src/lib/migrations" });
        return ddb;
    }

    return drizzle(db as any); //@todo why is Miniflare's D1Database incompatible with Cloudflare's?
};

export default getDbFromPlatform;