import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Notifications {
    constructor(private client: Client) {
    }


    async getNotification<T = unknown>(
        parameters: Parameters.GetNotification,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/notifications/${parameters.id}`,
            method: 'GET',
            params: {
                board: parameters.board,
                board_fields: parameters.boardFields,
                card: parameters.card,
                card_fields: parameters.cardFields,
                display: parameters.display,
                entities: parameters.entities,
                fields: parameters.fields,
                list: parameters.list,
                member: parameters.member,
                member_fields: parameters.memberFields,
                memberCreator: parameters.memberCreator,
                memberCreator_fields: parameters.memberCreatorFields,
                organization: parameters.organization,
                organization_fields: parameters.organizationFields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update the read status of a notification */
    async updateNotification<T = unknown>(
        parameters: Parameters.UpdateNotification,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/notifications/${parameters.id}`,
            method: 'PUT',
            params: {
                unread: parameters.unread,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a specific property of a notification */
    async getNotificationField<T = unknown>(
        parameters: Parameters.GetNotificationField,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/notifications/${parameters.id}/${parameters.field}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Mark all notifications as read */
    async markAllNotificationsAsRead<T = unknown>(
        parameters?: Parameters.MarkAllNotificationsAsRead,
    ): Promise<T> {
        const config: RequestConfig = {
            url: '/notifications/all/read',
            method: 'POST',
            params: {
                read: parameters?.read,
                ids: parameters?.ids,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Update Notification's read status */
    async updateNotificationReadStatus<T = unknown>(
        parameters: Parameters.UpdateNotificationReadStatus,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/notifications/${parameters.id}/unread`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the board a notification is associated with */
    async getNotificationBoard<T = unknown>(
        parameters: Parameters.GetNotificationBoard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/notifications/${parameters.id}/board`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the card a notification is associated with */
    async getNotificationCard<T = unknown>(
        parameters: Parameters.GetNotificationCard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/notifications/${parameters.id}/card`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the list a notification is associated with */
    async getNotificationList<T = unknown>(
        parameters: Parameters.GetNotificationList,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/notifications/${parameters.id}/list`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the member (not the creator) a notification is about */
    async getNotificationMember<T = unknown>(
        parameters: Parameters.GetNotificationMember,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/notifications/${parameters.id}/member`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the member who created the notification */
    async getNotificationMemberCreator<T = unknown>(
        parameters: Parameters.GetNotificationMemberCreator,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/notifications/${parameters.id}/memberCreator`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the organization a notification is associated with */
    async getNotificationOrganization<T = unknown>(
        parameters: Parameters.GetNotificationOrganization,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/notifications/${parameters.id}/organization`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }
}
