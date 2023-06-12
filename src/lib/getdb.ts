// Inspired by https://github.com/BuilderIO/qwik/issues/3345#issuecomment-1475385715
import type {D1Database} from "@miniflare/d1";
import {drizzle} from "drizzle-orm/d1";
import {DrizzleD1Database} from "drizzle-orm/d1";
import {migrate} from "drizzle-orm/d1/migrator";
import {eq, sql} from "drizzle-orm";
import type {ProjectModel} from "$lib/schema";
import {projectSchema} from "$lib/schema";
import {SQLiteSyncDialect} from "drizzle-orm/sqlite-core";

let getDevDb = async (): Promise<any> => {
    // throw new Error("Not in a dev env, but attempted to access dev db");
    console.log("ERROR: Not in a dev env, but attempted to access dev db")
};


if (import.meta.env.DEV) {
    const fs = await import("fs/promises");
    const {D1Database: D1D, D1DatabaseAPI} = await import("@miniflare/d1");
    const {createSQLiteDB} = await import("@miniflare/shared");

    let devDb: D1Database;

    getDevDb = async (): Promise<D1Database> => {
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

const getDbFromPlatform = async (platform: App.Platform | undefined): Promise<DrizzleD1Database> => {
    let db;
    if (platform?.env?.BIONIC_PARTS_DB) {
        db = platform.env?.BIONIC_PARTS_DB;
    } else {
        db = await getDevDb();
    }

    // This was a problem b/c we were trying to get the DB during the build process
    // if (import.meta.env.DEV) { //we can only apply migrations in dev
    const ddb = drizzle(db as any);
    await migrate(ddb, {migrationsFolder: "./src/lib/migrations"});
    return ddb;
    // }

    // return drizzle(db as any); //@todo why is Miniflare's D1Database incompatible with Cloudflare's?
};

export class DataLayer {
    public readonly db: DrizzleD1Database;

    constructor(db: DrizzleD1Database) {
        this.db = db;
    }

    public async getProjectBySlug(slug: string): Promise<ProjectModel> {
        return this.db.select()
            .from(projectSchema)
            .where(eq(projectSchema.slug, slug)).get();
    }

    public async addNewProject(project: ProjectModel): Promise<any> {
        this.db.insert(projectSchema).values(project).run();
    }

    public async getProjectsByOnshapeDocId(docId: string): Promise<ProjectModel[]> {
        const qry = sql`SELECT *
            FROM projects
            WHERE EXISTS (
                SELECT 1 
                FROM json_each(json_extract(data, '$.onshape.docIds')) 
                WHERE value = ${docId}
            );`

        return this.db.all<ProjectModel>(qry)
    }


    async getAllProjects() {
        return this.db.select().from(projectSchema).all();
    }
}

export default getDbFromPlatform;