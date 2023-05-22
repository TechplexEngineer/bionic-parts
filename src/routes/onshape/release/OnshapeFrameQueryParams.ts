import type {WVM} from "$lib/OnshapeAPI";

export interface OnshapeFrameQueryParams {
    did: string,
    wv: WVM.W | WVM.V, //w or v
    cfg: string,
    wvid: string
    eid: string,
    clientId: string,
    companyId: string,
    locale: string,
    server: string, //https://cad.onshape.com
    userId: string,
}