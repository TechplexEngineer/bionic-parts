import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Actions {
    constructor(private client: Client) {
    }

    /** Get an Action */
    async getAction<T = Models.Action>(parameters: Parameters.GetAction): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}`,
            method: 'GET',
            params: {
                display: parameters.display,
                entities: parameters.entities,
                fields: parameters.fields,
                member: parameters.member,
                member_fields: parameters.memberFields,
                memberCreator: parameters.memberCreator,
                memberCreator_fields: parameters.memberCreatorFields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment. */
    async updateAction<T = unknown>(parameters: Parameters.UpdateAction): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}`,
            method: 'PUT',
            params: {
                text: parameters.text,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a specific action. Only comment actions can be deleted. */
    async deleteAction<T = unknown>(parameters: Parameters.DeleteAction): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Get a specific property of an action */
    async getActionField<T = Models.Action>(
        parameters: Parameters.GetActionField,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}/${parameters.field}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get the Board for an Action */
    async getActionBoard<T = Models.Board>(
        parameters: Parameters.GetActionBoard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}/board`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the card for an action */
    async getActionCard<T = Models.Card>(
        parameters: Parameters.GetActionCard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}/card`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the List for an Action */
    async getActionList<T = Models.List>(
        parameters: Parameters.GetActionList,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}/list`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Gets the member of an action (not the creator) */
    async getActionMember<T = Models.Member>(
        parameters: Parameters.GetActionMember,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}/member`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the Member who created the Action */
    async getActionMemberCreator<T = Models.Member>(
        parameters: Parameters.GetActionMemberCreator,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}/memberCreator`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the Organization of an Action */
    async getActionOrganization<T = Models.Organization>(
        parameters: Parameters.GetActionOrganization,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}/organization`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update a comment action */
    async updateActionText<T = unknown>(
        parameters: Parameters.UpdateActionText,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.id}/text`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** List reactions for an action */
    async getActionReactions<T = unknown>(
        parameters: Parameters.GetActionReactions,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.idAction}/reactions`,
            method: 'GET',
            params: {
                member: parameters.member,
                emoji: parameters.emoji,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Adds a new reaction to an action */
    async addActionReaction<T = unknown>(
        parameters: Parameters.AddActionReaction,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.idAction}/reactions`,
            method: 'POST',
            data: {
                shortName: parameters.shortName,
                skinVariation: parameters.skinVariation,
                native: parameters.native,
                unified: parameters.unified,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get information for a reaction */
    async getActionReaction<T = unknown>(
        parameters: Parameters.GetActionReaction,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.idAction}/reactions/${parameters.id}`,
            method: 'GET',
            params: {
                member: parameters.member,
                emoji: parameters.emoji,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Deletes a reaction */
    async deleteActionReaction<T = unknown>(
        parameters: Parameters.DeleteActionReaction,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.idAction}/reactions/${parameters.id}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** List a summary of all reactions for an action */
    async getActionReactionSummary<T = unknown>(
        parameters: Parameters.GetActionReactionSummary
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/actions/${parameters.idAction}/reactionsSummary`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }
}
