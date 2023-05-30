import type {Color} from './color';
import type {Limits} from './limits';
import type {Preview} from './preview';
import type {TrelloID} from './trelloID';

export interface Attachment {
    id: TrelloID;
    bytes: number | null;
    date: string;
    edgeColor: Color | null;
    idMember: TrelloID;
    isUpload: boolean;
    mimeType: string;
    name: string;
    previews: Preview[];
    url: string;
    pos: number;
    fileName: string | null;
    limits: Limits;
}
