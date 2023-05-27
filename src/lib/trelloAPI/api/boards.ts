import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';
import type {Labels} from "$lib/trelloAPI/api/labels";
import type {Label} from "./models";

export class Boards {
    constructor(private client: Client) {
    }

    /** Get information about the memberships users have to the board. */
    async getBoardMemberships<T = Models.Memberships>(
        parameters: Parameters.GetBoardMemberships,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/memberships`,
            method: 'GET',
            params: {
                filter: parameters.filter,
                activity: parameters.activity,
                orgMemberType: parameters.orgMemberType,
                member: parameters.member,
                member_fields: parameters.memberFields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Request a single board. */
    async getBoard<T = Models.Board>(parameters: Parameters.GetBoard): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}`,
            method: 'GET',
            params: {
                actions: parameters.actions,
                boardStars: parameters.boardStars,
                cards: parameters.cards,
                card_fields: parameters.card?.fields,
                card_list: parameters.card?.list,
                card_members: parameters.card?.members,
                card_stickers: parameters.card?.stickers,
                card_attachments: parameters.card?.attachments,
                card_pluginData: parameters.cardPluginData ?? parameters.card?.pluginData,
                checklists: parameters.checklists,
                customFields: parameters.customFields,
                fields: parameters.fields,
                labels: parameters.labels,
                lists: parameters.lists,
                members: parameters.members,
                memberships: parameters.memberships,
                pluginData: parameters.pluginData,
                organization: parameters.organization,
                organization_pluginData: parameters.organizationPluginData,
                myPrefs: parameters.myPrefs,
                tags: parameters.tags,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update an existing board by id */
    async updateBoard<T = unknown>(parameters: Parameters.UpdateBoard): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}`,
            method: 'PUT',
            params: {
                name: parameters.name,
                desc: parameters.desc,
                closed: parameters.closed,
                subscribed: parameters.subscribed,
                idOrganization: parameters.idOrganization,
                'prefs/permissionLevel': parameters.permissionLevel ?? parameters.prefs?.permissionLevel,
                'prefs/selfJoin': parameters.selfJoin ?? parameters.prefs?.selfJoin,
                'prefs/cardCovers': parameters.cardCovers ?? parameters.prefs?.cardCovers,
                'prefs/hideVotes': parameters.hideVotes ?? parameters.prefs?.hideVotes,
                'prefs/invitations': parameters.invitations ?? parameters.prefs?.invitations,
                'prefs/voting': parameters.voting ?? parameters.prefs?.voting,
                'prefs/comments': parameters.comments ?? parameters.prefs?.comments,
                'prefs/background': parameters.background ?? parameters.prefs?.background,
                'prefs/cardAging': parameters.cardAging ?? parameters.prefs?.cardAging,
                'prefs/calendarFeedEnabled': parameters.calendarFeedEnabled ?? parameters.prefs?.calendarFeedEnabled,
                'labelNames/green': parameters.green ?? parameters.labelNames?.green,
                'labelNames/yellow': parameters.yellow ?? parameters.labelNames?.yellow,
                'labelNames/orange': parameters.orange ?? parameters.labelNames?.orange,
                'labelNames/red': parameters.red ?? parameters.labelNames?.red,
                'labelNames/purple': parameters.purple ?? parameters.labelNames?.purple,
                'labelNames/blue': parameters.blue ?? parameters.labelNames?.blue,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a board. */
    async deleteBoard<T = void>(parameters: Parameters.DeleteBoard): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}`,
            method: 'DELETE',
            data: parameters.body,
        };

        return this.client.sendRequest(config);
    }

    /** Get a single, specific field on a board */
    async getBoardField<T = unknown>(parameters: Parameters.GetBoardField): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/${parameters.field}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get an Actions on a Board. */
    async getBoardActions<T = unknown>(
        parameters: Parameters.GetBoardActions,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.boardId}/actions`,
            method: 'GET',
            params: {
                filter: parameters.filter,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a single Card on a Board. */
    async getBoardCard<T = unknown>(parameters: Parameters.GetBoardCard): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/cards/${parameters.idCard}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get a Stars on a Board. */
    async getBoardStars<T = Array<Models.BoardStars>>(
        parameters: Parameters.GetBoardStars,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.boardId}/boardStars`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get all of the checklists on a Board. */
    async getBoardChecklists<T = unknown>(
        parameters: Parameters.GetBoardChecklists,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/checklists`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Create a new checklist on a board. */
    async createBoardChecklist<T = unknown>(
        parameters: Parameters.CreateBoardChecklist,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/checklists`,
            method: 'POST',
            params: {
                name: parameters.name,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get all of the open Cards on a Board. */
    async getBoardCards<T = unknown>(parameters: Parameters.GetBoardCards): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/cards`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get the Cards on a Board that match a given filter. */
    async getBoardCardsFilter<T = unknown>(
        parameters: Parameters.GetBoardCardsFilter,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/cards/${parameters.filter}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get the Custom Field Definitions that exist on a board. */
    async getBoardCustomFields<T = Models.CustomField[]>(
        parameters: Parameters.GetBoardCustomFields,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/customFields`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get all of the Labels on a Board. */
    async getBoardLabels<T = Label[]>(parameters: Parameters.GetBoardLabels): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/labels`,
            method: 'GET',
            params: {
                fields: parameters.fields,
                limit: parameters.limit,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Create a new Label on a Board. */
    async createBoardLabel<T = Label>(
        parameters: Parameters.CreateBoardLabel,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/labels`,
            method: 'POST',
            params: {
                name: parameters.name,
                color: parameters.color,
            },
        };

        return this.client.sendRequest<T>(config);
    }

    /** Get the Lists on a Board */
    async getBoardLists<T = Models.List[]>(
        parameters: Parameters.GetBoardLists,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/lists`,
            method: 'GET',
            params: {
                cards: parameters.cards,
                card_fields: parameters.cardFields,
                filter: parameters.filter,
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Create a new List on a Board. */
    async createBoardList<T = Models.List>(
        parameters: Parameters.CreateBoardList,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/lists`,
            method: 'POST',
            params: {
                name: parameters.name,
                pos: parameters.pos,
            },
        };

        return this.client.sendRequest(config);
    }

    async getBoardListsFilter<T = unknown>(
        parameters: Parameters.GetBoardListsFilter,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/lists/${parameters.filter}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get the Members for a board */
    async getBoardMembers<T = unknown>(
        parameters: Parameters.GetBoardMembers,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/members`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Invite a Member to a Board via their email address. */
    async inviteMember<T = unknown>(parameters: Parameters.InviteMember): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/members`,
            method: 'PUT',
            params: {
                email: parameters.email,
                type: parameters.type,
            },
            data: {
                fullName: parameters.fullName,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Add a member to the board. */
    async addMemberToBoard<T = unknown>(
        parameters: Parameters.AddMemberToBoard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/members/${parameters.idMember}`,
            method: 'PUT',
            params: {
                type: parameters.type,
                allowBillableGuest: parameters.allowBillableGuest,
            },
        };

        return this.client.sendRequest(config);
    }

    async removeMemberFromBoard<T = unknown>(
        parameters: Parameters.RemoveMemberFromBoard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/members/${parameters.idMember}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Update an existing board by id */
    async updateMemberOnBoard<T = unknown>(
        parameters: Parameters.UpdateMemberOnBoard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/memberships/${parameters.idMembership}`,
            method: 'PUT',
            params: {
                type: parameters.type,
                member_fields: parameters.memberFields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update emailPosition Pref on a Board */
    async updateEmailPosition<T = unknown>(
        parameters: Parameters.UpdateEmailPosition,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/myPrefs/emailPosition`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Change the default list that email-to-board cards are created in. */
    async changeEmailList<T = unknown>(
        parameters: Parameters.ChangeEmailList,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/myPrefs/idEmailList`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    async updateShowListGuide<T = unknown>(
        parameters: Parameters.UpdateShowListGuide,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/myPrefs/showListGuide`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    async updateShowSidebar<T = unknown>(
        parameters: Parameters.UpdateShowSidebar,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/myPrefs/showSidebar`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    async updateShowSidebarActivity<T = unknown>(
        parameters: Parameters.UpdateShowSidebarActivity,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/myPrefs/showSidebarActivity`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    async updateShowSidebarBoardActions<T = unknown>(
        parameters: Parameters.UpdateShowSidebarBoardActions,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/myPrefs/showSidebarBoardActions`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    async updateShowSidebarMembers<T = unknown>(
        parameters: Parameters.UpdateShowSidebarMembers,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/myPrefs/showSidebarMembers`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Create a new board. */
    async createBoard<T = Models.Board>(parameters: Parameters.CreateBoard): Promise<T> {
        const config: RequestConfig = {
            url: '/boards/',
            method: 'POST',
            params: {
                name: parameters.name,
                defaultLabels: parameters.defaultLabels,
                defaultLists: parameters.defaultLists,
                desc: parameters.desc,
                idOrganization: parameters.idOrganization,
                idBoardSource: parameters.idBoardSource,
                keepFromSource: parameters.keepFromSource,
                powerUps: parameters.powerUps,
                prefs_permissionLevel: parameters.prefsPermissionLevel ?? parameters.prefs?.permissionLevel,
                prefs_voting: parameters.prefsVoting ?? parameters.prefs?.voting,
                prefs_comments: parameters.prefsComments ?? parameters.prefs?.comments,
                prefs_invitations: parameters.prefsInvitations ?? parameters.prefs?.invitations,
                prefs_selfJoin: parameters.prefsSelfJoin ?? parameters.prefs?.selfJoin,
                prefs_cardCovers: parameters.prefsCardCovers ?? parameters.prefs?.cardCovers,
                prefs_background: parameters.prefsBackground ?? parameters.prefs?.background,
                prefs_cardAging: parameters.prefsCardAging ?? parameters.prefs?.cardAging,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Create a new board. */
    async createCalendarKey<T = unknown>(
        parameters: Parameters.CreateCalendarKey,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/calendarKey/generate`,
            method: 'POST',
        };

        return this.client.sendRequest(config);
    }

    async createEmailKey<T = unknown>(parameters: Parameters.CreateEmailKey): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/emailKey/generate`,
            method: 'POST',
        };

        return this.client.sendRequest(config);
    }

    async createIdTags<T = unknown>(parameters: Parameters.CreateIdTags): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/idTags`,
            method: 'POST',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    async markAsViewed<T = unknown>(parameters: Parameters.MarkAsViewed): Promise<T> {
        const config: RequestConfig = {
            url: `/boards/${parameters.id}/markedAsViewed`,
            method: 'POST',
        };

        return this.client.sendRequest(config);
    }

}
