import type {TokenPermission} from './tokenPermission';
import type {TrelloID} from './trelloID';

export interface Token {
    id?: TrelloID;
    identifier?: string;
    idMember?: TrelloID;
    dateCreated?: string;
    dateExpires?: string;
    permissions?: TokenPermission[];
}
