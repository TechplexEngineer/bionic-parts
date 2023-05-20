// Inspired by https://github.com/BuilderIO/qwik/issues/3345#issuecomment-1475385715
import * as fs from "node:fs/promises";

let getDevDb: any = () => {
    throw new Error("Not in a dev env, ");
};


if (import.meta.env.DEV) {
    const {D1Database:D1D, D1DatabaseAPI} = await import("@miniflare/d1");
    const {createSQLiteDB} = await import("@miniflare/shared");

    let devDb: any;

    getDevDb = async () => {
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

const getDb = async (platform: App.Platform|undefined) => {
    if (platform?.env?.BIONIC_PARTS_DB) {
        return platform.env?.BIONIC_PARTS_DB;
    }

    return getDevDb();
};

export default getDb;