import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Members {
    constructor(private client: Client) {
    }

    /** Get a member */
    async getMember<T = Models.Member>(parameters: Parameters.GetMember): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}`,
            method: 'GET',
            params: {
                actions: parameters.actions,
                boards: parameters.boards,
                boardBackgrounds: parameters.boardBackgrounds,
                boardsInvited: parameters.boardsInvited,
                boardsInvited_fields: parameters.boardsInvitedFields,
                boardStars: parameters.boardStars,
                cards: parameters.cards,
                customBoardBackgrounds: parameters.customBoardBackgrounds,
                customEmoji: parameters.customEmoji,
                customStickers: parameters.customStickers,
                fields: parameters.fields,
                notifications: parameters.notifications,
                organizations: parameters.organizations,
                organization_fields: parameters.organizationFields ?? parameters.organization?.fields,
                organization_paid_account: parameters.organizationPaidAccount ?? parameters.organization?.paidAccount,
                organizationsInvited: parameters.organizationsInvited,
                organizationsInvited_fields: parameters.organizationsInvitedFields,
                paid_account: parameters.paidAccount,
                savedSearches: parameters.savedSearches,
                tokens: parameters.tokens,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update a Member */
    async updateMember<T = unknown>(parameters: Parameters.UpdateMember): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}`,
            method: 'PUT',
            params: {
                fullName: parameters.fullName,
                initials: parameters.initials,
                username: parameters.username,
                bio: parameters.bio,
                avatarSource: parameters.avatarSource,
                'prefs/colorBlind': parameters.colorBlind,
                'prefs/locale': parameters.locale,
                'prefs/minutesBetweenSummaries': parameters.minutesBetweenSummaries,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a particular property of a member */
    async getMemberField<T = unknown>(parameters: Parameters.GetMemberField): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/${parameters.field}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** List the actions for a member */
    async getMemberActions<T = Array<Models.Member>>(
        parameters: Parameters.GetMemberActions,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/actions`,
            method: 'GET',
            params: {
                filter: parameters.filter,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a member's custom board backgrounds */
    async getMemberBoardBackgrounds<T = Array<Models.BoardBackground>>(
        parameters: Parameters.GetMemberBoardBackgrounds,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardBackgrounds`,
            method: 'GET',
            params: {
                filter: parameters.filter,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Upload a new boardBackground */
    async uploadMemberBoardBackground<T = Array<Models.BoardBackground>>(
        parameters: Parameters.UploadMemberBoardBackground,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardBackgrounds`,
            method: 'POST',
            params: {
                file: parameters.file,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a member's board background */
    async getMemberBoardBackground<T = Models.BoardBackground>(
        parameters: Parameters.GetMemberBoardBackground,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update a board background */
    async updateBoardBackground<T = Models.BoardBackground>(
        parameters: Parameters.UpdateBoardBackground,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
            method: 'PUT',
            params: {
                brightness: parameters.brightness,
                tile: parameters.tile,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a board background */
    async deleteMemberBoardBackground<T = unknown>(
        parameters: Parameters.DeleteMemberBoardBackgroud,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardBackgrounds/${parameters.idBackground}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** List a member's board stars */
    async getMemberBoardStars<T = unknown>(
        parameters: Parameters.GetMemberBoardStars,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardStars`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Star a new board on behalf of a Member */
    async starMemberBoard<T = Models.BoardStars[]>(
        parameters: Parameters.StarMemberBoard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardStars`,
            method: 'POST',
            params: {
                idBoard: parameters.idBoard,
                pos: parameters.pos,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a specific boardStar */
    async getMemberBoardStar<T = Models.BoardStars>(
        parameters: Parameters.GetMemberBoardStar,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Update the position of a starred board */
    async updateMemberBoardStar<T = unknown>(
        parameters: Parameters.UpdateMemberBoardStar,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
            method: 'PUT',
            params: {
                pos: parameters.pos,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Unstar a board */
    async unstarMemberBoard<T = unknown>(
        parameters: Parameters.UnstarMemberBoard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardStars/${parameters.idStar}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Lists the boards that the user is a member of. */
    async getMemberBoards<T = Models.Board[]>(
        parameters: Parameters.GetMemberBoards,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boards`,
            method: 'GET',
            params: {
                filter: parameters.filter,
                fields: parameters.fields,
                lists: parameters.lists,
                organization: parameters.organization,
                organization_fields: parameters.organizationFields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the boards the member has been invited to */
    async getMemberBoardsInvited<T = Models.Board[]>(
        parameters: Parameters.GetMemberBoardsInvited,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/boardsInvited`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Gets the cards a member is on */
    async getMemberCards<T = Models.Card[]>(
        parameters: Parameters.GetMemberCards,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/cards`,
            method: 'GET',
            params: {
                filter: parameters.filter,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a member's custom board backgrounds */
    async getMemberCustomBoardBackgrounds<T = Models.BoardBackground[]>(
        parameters: Parameters.GetMemberCustomBoardBackgrounds,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customBoardBackgrounds`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Upload a new custom board background */
    async uploadMemberCustomBoardBackground<T = Models.BoardBackground>(
        parameters: Parameters.UploadMemberCustomBoardBackground,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customBoardBackgrounds`,
            method: 'POST',
            params: {
                file: parameters.file,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a specific custom board background */
    async getMemberCustomBoardBackground<T = Models.BoardBackground>(
        parameters: Parameters.GetMemberCustomBoardBackground,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Update a specific custom board background */
    async updateMemberCustomBoardBackground<T = Models.BoardBackground>(
        parameters: Parameters.UpdateMemberCustomBoardBackground,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
            method: 'PUT',
            params: {
                brightness: parameters.brightness,
                tile: parameters.tile,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a specific custom board background */
    async deleteMemberCustomBoardBackground<T = unknown>(
        parameters: Parameters.DeleteMemberCustomBoardBackground,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customBoardBackgrounds/${parameters.idBackground}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Get a Member's uploaded custom Emojis */
    async getMemberCustomEmojis<T = Models.CustomEmoji[]>(
        parameters: Parameters.GetMemberCustomEmojis,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customEmoji`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Create a new custom Emoji */
    async createMemberCustomEmoji<T = Models.CustomEmoji>(
        parameters: Parameters.CreateMemberCustomEmoji,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customEmoji`,
            method: 'POST',
            params: {
                file: parameters.file,
                name: parameters.name,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a Member's custom Emoji */
    async getMemberCustomEmoji<T = Models.CustomEmoji>(
        parameters: Parameters.GetMemberCustomEmoji,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customEmoji/${parameters.idEmoji}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a Member's uploaded stickers */
    async getMemberCustomStickers<T = Models.CustomSticker[]>(
        parameters: Parameters.GetMemberCustomStickers,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customStickers`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Upload a new custom sticker */
    async uploadMemberCustomSticker<T = Models.CustomSticker>(
        parameters: Parameters.UploadMemberCustomSticker,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customStickers`,
            method: 'POST',
            params: {
                file: parameters.file,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a Member's custom Sticker */
    async getMemberCustomSticker<T = Models.CustomSticker>(
        parameters: Parameters.GetMemberCustomSticker,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customStickers/${parameters.idSticker}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a Member's custom Sticker */
    async deleteMemberCustomSticker<T = unknown>(
        parameters: Parameters.DeleteMemberCustomSticker,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/customStickers/${parameters.idSticker}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Get a member's notifications */
    async getMemberNotifications<T = Models.Notification[]>(
        parameters: Parameters.GetMemberNotifications,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/notifications`,
            method: 'GET',
            params: {
                entities: parameters.entities,
                display: parameters.display,
                filter: parameters.filter,
                read_filter: parameters.readFilter,
                fields: parameters.fields,
                limit: parameters.limit,
                page: parameters.page,
                before: parameters.before,
                since: parameters.since,
                memberCreator: parameters.memberCreator,
                memberCreator_fields: parameters.memberCreatorFields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a member's Workspaces */
    async getMemberOrganizations<T = Models.Organization[]>(
        parameters: Parameters.GetMemberOrganizations,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/organizations`,
            method: 'GET',
            params: {
                filter: parameters.filter,
                fields: parameters.fields,
                paid_account: parameters.paidAccount,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a member's Workspaces they have been invited to */
    async getMemberOrganizationsInvited<T = Models.Organization[]>(
        parameters: Parameters.GetMemberOrganizationsInvited,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/organizationsInvited`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** List the saved searches of a Member */
    async getMemberSavedSearches<T = Models.SavedSearch[]>(
        parameters: Parameters.GetMemberSavedSearches,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/savedSearches`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Create a saved search */
    async createMemberSavedSearch<T = Models.SavedSearch>(
        parameters: Parameters.CreateMemberSavedSearch,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/savedSearches`,
            method: 'POST',
            params: {
                name: parameters.name,
                query: parameters.query,
                pos: parameters.pos,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a saved search */
    async getMemberSavedSearch<T = Models.SavedSearch>(
        parameters: Parameters.GetMemberSavedSearch,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Update a saved search */
    async updateMemberSavedSearch<T = Models.SavedSearch>(
        parameters: Parameters.UpdateMemberSavedSerch,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
            method: 'PUT',
            params: {
                name: parameters.name,
                query: parameters.query,
                pos: parameters.pos,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a saved search */
    async deleteMemberSavedSearch<T = unknown>(
        parameters: Parameters.DeleteMemberSavedSearch,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/savedSearches/${parameters.idSearch}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** List a members app tokens */
    async getMemberTokens<T = Models.Token[]>(
        parameters: Parameters.GetMemberTokens,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/tokens`,
            method: 'GET',
            params: {
                webhooks: parameters.webhooks,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Create a new avatar for a member */
    async createMemberAvatar<T = unknown>(
        parameters: Parameters.CreateMemberAvatar,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/avatar`,
            method: 'POST',
            params: {
                file: parameters.file,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Dismiss a message */
    async dismissMemberMessage<T = unknown>(
        parameters: Parameters.DismissMemberMessage,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/members/${parameters.id}/oneTimeMessagesDismissed`,
            method: 'POST',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }
}
