import 'dotenv/config'

import {Configuration, DocumentApi} from "./onshape_api";
import APIKeyAuthMiddleware from "./authMiddleware";
import {OnshapeClient} from "./onshapeClient";

const secretKey = process.env.ONSHAPE_SECRET_KEY!
const accessKey = process.env.ONSHAPE_ACCESS_KEY!

const config = new Configuration({
    middleware: [
        APIKeyAuthMiddleware(secretKey, accessKey)
    ]
})

const dapi = new DocumentApi(config)

const docVersions = await dapi.getDocumentVersions({did: "da2bc7f409791a8720b27217"})
console.log(docVersions);


const client = new OnshapeClient(config);

const docVersions2 = await client.DocumentApi.getDocumentVersions({did: "da2bc7f409791a8720b27217"});
console.log(docVersions2);