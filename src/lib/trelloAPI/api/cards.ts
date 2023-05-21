import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Cards {
    constructor(private client: Client) {
    }

    /** Create a new card */
    async createCard<T = Models.Card>(parameters: Parameters.CreateCard): Promise<T> {
        const config: RequestConfig = {
            url: '/cards',
            method: 'POST',
            params: {
                name: parameters.name,
                desc: parameters.desc,
                pos: parameters.pos,
                due: parameters.due,
                dueComplete: parameters.dueComplete,
                idList: parameters.idList,
                idMembers: parameters.idMembers,
                idLabels: parameters.idLabels,
                urlSource: parameters.urlSource,
                fileSource: parameters.fileSource,
                mimeType: parameters.mimeType,
                idCardSource: parameters.idCardSource,
                keepFromSource: parameters.keepFromSource,
                address: parameters.address,
                locationName: parameters.locationName,
                coordinates: parameters.coordinates,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a card by its ID */
    async getCard<T = Models.Card>(parameters: Parameters.GetCard): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
                actions: parameters.actions,
                attachments: parameters.attachments,
                attachment_fields: parameters.attachmentFields,
                members: parameters.members,
                member_fields: parameters.memberFields,
                membersVoted: parameters.membersVoted,
                memberVoted_fields: parameters.memberVotedFields,
                checkItemStates: parameters.checkItemStates,
                checklists: parameters.checklists,
                checklist_fields: parameters.checklistFields,
                board: parameters.board,
                board_fields: parameters.boardFields,
                list: parameters.list,
                pluginData: parameters.pluginData,
                stickers: parameters.stickers,
                sticker_fields: parameters.stickerFields,
                customFieldItems: parameters.customFieldItems,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update a card */
    async updateCard<T = Models.Card>(parameters: Parameters.UpdateCard): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}`,
            method: 'PUT',
            params: {
                name: parameters.name,
                desc: parameters.desc,
                closed: parameters.closed,
                idMembers: parameters.idMembers,
                idAttachmentCover: parameters.idAttachmentCover,
                idList: parameters.idList,
                idLabels: parameters.idLabels,
                idBoard: parameters.idBoard,
                pos: parameters.pos,
                due: parameters.due,
                dueComplete: parameters.dueComplete,
                subscribed: parameters.subscribed,
                address: parameters.address,
                locationName: parameters.locationName,
                coordinates: parameters.coordinates,
                cover: parameters.cover,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a Card */
    async deleteCard<T = Models.DeletedCard>(parameters: Parameters.DeleteCard): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Get a specific property of a card */
    async getCardField<T = Models.Card>(parameters: Parameters.GetCardField): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/${parameters.field}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** List the Actions on a Card */
    async getCardActions<T = Models.Action[]>(
        parameters: Parameters.GetCardActions,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/actions`,
            method: 'GET',
            params: {
                filter: parameters.filter,
            },
        };

        return this.client.sendRequest(config);
    }

    /** List the attachments on a card */
    async getCardAttachments<T = Models.Attachment[]>(
        parameters: Parameters.GetCardAttachments,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/attachments`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Create an Attachment to a Card */
    async createCardAttachment<T = Models.Attachment>(
        parameters: Parameters.CreateCardAttachment,
    ): Promise<T> {
        let formData: FormData | undefined;

        if (parameters.file) {
            formData = new FormData();

            formData.append('file', parameters.file, parameters.name);
            formData.append('name', parameters.name!);
            formData.append('mimeType', parameters.mimeType!);
        }

        const config: RequestConfig = {
            url: `/cards/${parameters.id}/attachments`,
            method: 'POST',

            params: {
                name: parameters.name,
                mimeType: parameters.mimeType,
                url: parameters.url,
                setCover: parameters.setCover,
            },
            data: formData,
        };

        return this.client.sendRequest(config);
    }

    /** Get a specific Attachment on a Card. */
    async getCardAttachment<T = Models.Attachment[]>(
        parameters: Parameters.GetCardAttachment,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/attachments/${parameters.idAttachment}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete an Attachment */
    async deleteCardAttachment<T = Models.DeletedCard>(
        parameters: Parameters.DeleteCardAttachment,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/attachments/${parameters.idAttachment}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Get the board a card is on */
    async getCardBoard<T = Models.Board>(parameters: Parameters.GetCardBoard): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/board`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the completed checklist items on a card */
    async getCardCompletedChecklists<T = unknown>(
        parameters: Parameters.GetCardCompletedChecklists,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/checkItemStates`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the checklists on a card */
    async getCardChecklists<T = unknown>(
        parameters: Parameters.GetCardChecklists,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/checklists`,
            method: 'GET',
            params: {
                checkItems: parameters.checkItems,
                checkItem_fields: parameters.checkItemFields,
                filter: parameters.filter,
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Create a new checklist on a card */
    async createCardChecklist<T = unknown>(
        parameters: Parameters.CreateCardChecklist,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/checklists`,
            method: 'POST',
            params: {
                name: parameters.name,
                idChecklistSource: parameters.idChecklistSource,
                pos: parameters.pos,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a specific checkItem on a card */
    async getCardChecklistItem<T = unknown>(
        parameters: Parameters.GetCardChecklistItem,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update an item in a checklist on a card. */
    async updateCardCheckItem<T = unknown>(
        parameters: Parameters.UpdateCardCheckItem,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
            method: 'PUT',
            params: {
                name: parameters.name,
                state: parameters.state,
                idChecklist: parameters.idChecklist,
                pos: parameters.pos,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a checklist item */
    async deleteCardChecklistItem<T = unknown>(
        parameters: Parameters.DeleteCardChecklistItem,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/checkItem/${parameters.idCheckItem}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Get the list a card is in */
    async getCardList<T = Models.List>(parameters: Parameters.GetCardList): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/list`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the members on a card */
    async getCardMembers<T = unknown>(parameters: Parameters.GetCardMembers): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/members`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the members who have voted on a card */
    async getCardMembersVoted<T = unknown>(
        parameters: Parameters.GetCardMembersVoted,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/membersVoted`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Vote on the card for a given member. */
    async voteOnCardForGivenMember<T = unknown>(
        parameters: Parameters.VoteOnCardForGivenMember,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/membersVoted`,
            method: 'POST',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get any shared pluginData on a card. */
    async getCardPluginData<T = unknown>(
        parameters: Parameters.GetCardPluginData,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/pluginData`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get the stickers on a card */
    async getCardStickers<T = unknown>(
        parameters: Parameters.GetCardStickers,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/stickers`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
            data: parameters.body,
        };

        return this.client.sendRequest(config);
    }

    /** Add a sticker to a card */
    async addStickerToCard<T = unknown>(
        parameters: Parameters.AddStickerToCard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/stickers`,
            method: 'POST',
            params: {
                image: parameters.image,
                top: parameters.top,
                left: parameters.left,
                zIndex: parameters.zIndex,
                rotate: parameters.rotate,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a specific sticker on a card */
    async getCardSticker<T = unknown>(parameters: Parameters.GetCardSticker): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update a sticker on a card */
    async updateCardSticker<T = unknown>(
        parameters: Parameters.UpdateCardSticker,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
            method: 'PUT',
            params: {
                top: parameters.top,
                left: parameters.left,
                zIndex: parameters.zIndex,
                rotate: parameters.rotate,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Remove a sticker from the card */
    async deleteCardSticker<T = unknown>(
        parameters: Parameters.DeleteCardSticker,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/stickers/${parameters.idSticker}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Update an existing comment */
    async updateCardComment<T = unknown>(
        parameters: Parameters.UpdateCardComment,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/actions/${parameters.idAction}/comments`,
            method: 'PUT',
            params: {
                text: parameters.text,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a comment */
    async deleteCardComment<T = unknown>(
        parameters: Parameters.DeleteCardComment,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/actions/${parameters.idAction}/comments`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /**
     * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields
     * check out the [Getting Started With Custom
     * Fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
     */

    /**
     * Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields
     * check out the [Getting Started With Custom
     * Fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)
     */

    async updateCardCustomField<T = unknown>(
        parameters: Parameters.UpdateCardCustomField,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.idCard}/customField/${parameters.idCustomField}/item`,
            method: 'PUT',
        };

        return this.client.sendRequest(config);
    }

    /** Get the custom field items for a card. */
    async getCardCustomFields<T = Models.CustomFieldItems[]>(
        parameters: Parameters.GetCardCustomFields,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/customFieldItems`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Add a new comment to a card */
    async addCardComment<T = Models.Action>(
        parameters: Parameters.AddCardComment,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/actions/comments`,
            method: 'POST',
            params: {
                text: parameters.text,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Add a label to a card */
    async addCardLabel<T = unknown>(parameters: Parameters.AddCardLabel): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/idLabels`,
            method: 'POST',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Add a member to a card */
    async addCardMember<T = unknown>(parameters: Parameters.AddCardMember): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/idMembers`,
            method: 'POST',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Create a new label for the board and add it to the given card. */
    async createCardLabel<T = unknown>(
        parameters: Parameters.CreateCardLabel,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/labels`,
            method: 'POST',
            params: {
                color: parameters.color,
                name: parameters.name,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Mark notifications about this card as read */
    async markCardNotificationAsRead<T = unknown>(
        parameters: Parameters.MarkCardNotificationAsRead,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/markAssociatedNotificationsRead`,
            method: 'POST',
        };

        return this.client.sendRequest(config);
    }

    /** Remove a label from a card */
    async deleteCardLabel<T = unknown>(
        parameters: Parameters.DeleteCardLabel,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/idLabels/${parameters.idLabel}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Remove a member from a card */
    async deleteCardMember<T = unknown>(
        parameters: Parameters.DeleteCardMember,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/idMembers/${parameters.idMember}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Remove a member's vote from a card */
    async deleteCardMemberVote<T = unknown>(
        parameters: Parameters.DeleteCardMemberVote,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/membersVoted/${parameters.idMember}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Update an item in a checklist on a card. */
    async updateCardChecklistItem<T = Models.CheckItem>(
        parameters: Parameters.UpdateCardChecklistItem,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.idCard}/checklist/${parameters.idChecklist}/checkItem/${parameters.idCheckItem}`,
            method: 'PUT',
            params: {
                pos: parameters.pos,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a checklist from a card */
    async deleteCardChecklist<T = unknown>(
        parameters: Parameters.DeleteCardChecklist,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/cards/${parameters.id}/checklists/${parameters.idChecklist}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }
}
