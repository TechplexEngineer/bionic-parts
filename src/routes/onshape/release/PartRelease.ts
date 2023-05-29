import type {BTPartMetadataInfo} from "$lib/OnshapeAPI";
import type {OnshapeFrameQueryParams} from "./OnshapeFrameQueryParams";
import type {MfgMethods} from "./options";
import type {FormLabsPrinterMaterials, Machines, Printers, PrusaPrinterMaterials} from "./options";

export interface PartRelease {
    part: BTPartMetadataInfo,
    qty: number,
    notes: string,
    params: OnshapeFrameQueryParams,
    subsystemName: string,

    mfgMethod: MfgMethods
    machinesUsed: Machines[]
    printerUsed: Printers
    printerMaterialUsed: PrusaPrinterMaterials | FormLabsPrinterMaterials
    cotsLink: string
}