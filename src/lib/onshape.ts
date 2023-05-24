
const accessKey = import.meta.env.VITE_ONSHAPE_ACCESS_KEY;
if (!accessKey) {
	throw Error("Missing VITE_ONSHAPE_ACCESS_KEY")
}
const secretKey = import.meta.env.VITE_ONSHAPE_SECRET_KEY;
if (!secretKey) {
	throw Error("Missing VITE_ONSHAPE_SECRET_KEY")
}

import {Configuration, OnshapeClient} from "$lib/OnshapeAPI";
import APIKeyAuthMiddleware from "$lib/OnshapeAPI/authMiddleware";

const Onshape = new OnshapeClient(new Configuration({
	middleware: [APIKeyAuthMiddleware(secretKey, accessKey)]
}))

export default Onshape;