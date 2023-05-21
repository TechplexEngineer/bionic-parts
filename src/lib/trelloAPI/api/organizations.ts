import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Organizations {
    constructor(private client: Client) {
    }

    /** Create a new Workspace */
    async createOrganization<T = unknown>(
        parameters: Parameters.CreateOrganization,
    ): Promise<T> {
        const config: RequestConfig = {
            url: '/organizations',
            method: 'POST',
            params: {
                displayName: parameters.displayName,
                desc: parameters.desc,
                name: parameters.name,
                website: parameters.website,
            },
        };

        return this.client.sendRequest(config);
    }


    async getOrganization<T = Models.Organization>(
        parameters: Parameters.GetOrganization,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Update an organization */
    async updateOrganization<T = Models.Organization>(
        parameters: Parameters.UpdateOrganization,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}`,
            method: 'PUT',
            params: {
                name: parameters.name,
                displayName: parameters.displayName,
                desc: parameters.desc,
                website: parameters.website,
                'prefs/associatedDomain': parameters.associatedDomain,
                'prefs/externalMembersDisabled': parameters.externalMembersDisabled,
                'prefs/googleAppsVersion': parameters.googleAppsVersion,
                'prefs/boardVisibilityRestrict/org': parameters.org,
                'prefs/boardVisibilityRestrict/private': parameters.private,
                'prefs/boardVisibilityRestrict/public': parameters.public,
                'prefs/orgInviteRestrict': parameters.orgInviteRestrict,
                'prefs/permissionLevel': parameters.permissionLevel,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete an Organization */
    async deleteOrganization<T = unknown>(
        parameters: Parameters.DeleteOrganization,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }


    async getOrganizationField<T = Models.Organization>(
        parameters: Parameters.GetOrganizationField,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/${parameters.field}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** List the actions on a Workspace */
    async getOrganizationActions<T = Models.Action[]>(
        parameters: Parameters.GetOrganizationActions,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/actions`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** List the boards in a Workspace */
    async getOrganizationBoards<T = Array<Models.Board>>(
        parameters: Parameters.GetOrganizationBoards,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/boards`,
            method: 'GET',
            params: {
                filter: parameters.filter,
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Retrieve the exports that exist for the given organization */
    async getOrganizationExports<T = Models.Export[]>(
        parameters: Parameters.GetOrganizationExports,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/exports`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Kick off CSV export for an organization */
    async exportOrganizationCSV<T = Models.Export>(
        parameters: Parameters.ExportOrganizationCSV,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/exports`,
            method: 'POST',
            params: {
                attachments: parameters.attachments,
            },
        };

        return this.client.sendRequest(config);
    }

    /** List the members in a Workspace */
    async getOrganizationMembers<T = Array<Models.Member>>(
        parameters: Parameters.GetOrganizationMembers,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/members`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }


    async updateOrganizationMember<T = unknown>(
        parameters: Parameters.UpdateOrganizationMember,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/members`,
            method: 'PUT',
            params: {
                email: parameters.email,
                fullName: parameters.fullName,
                type: parameters.type,
            },
        };

        return this.client.sendRequest(config);
    }

    /** List the memberships of a Workspace */
    async getOrganizationMemberships<T = Array<Models.Memberships>>(
        parameters: Parameters.GetOrganizationMemberships,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/memberships`,
            method: 'GET',
            params: {
                filter: parameters.filter,
                member: parameters.member,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a single Membership for an Organization */
    async getOrganizationMembership<T = unknown>(
        parameters: Parameters.GetOrganizationMembership,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/memberships/${parameters.idMembership}`,
            method: 'GET',
            params: {
                member: parameters.member,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get organization scoped pluginData on this Workspace */
    async getOrganizationPluginData<T = Array<Models.PluginData>>(
        parameters: Parameters.GetOrganizationPluginData,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/pluginData`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** List the organization's collections */
    async getOrganizationTags<T = Array<Models.Tag>>(
        parameters: Parameters.GetOrganizationTags,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/tags`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Create a Tag in an Organization */
    async createOrganizationTag<T = unknown>(
        parameters: Parameters.CreateOrganizationTag,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/tags`,
            method: 'POST',
        };

        return this.client.sendRequest(config);
    }

    /** Add a member to a Workspace or update their member type. */
    async addOrganizationMember<T = unknown>(
        parameters: Parameters.AddOrganizationMember,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/members/${parameters.idMember}`,
            method: 'PUT',
            params: {
                type: parameters.type,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Remove a member from a Workspace */
    async deleteOrganizationMember<T = unknown>(
        parameters: Parameters.DeleteOrganizationMember,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/members/${parameters.idMember}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Deactivate or reactivate a member of a Workspace */
    async updateOrganizationDeactivateStatus<T = unknown>(
        parameters: Parameters.UpdateOrganizationDeactivateStatus,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/members/${parameters.idMember}/deactivated`,
            method: 'PUT',
            params: {
                value: parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Set the logo image for a Workspace */
    async setOrganizationLogo<T = unknown>(
        parameters: Parameters.SetOrganizationLogo,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/logo`,
            method: 'POST',
            params: {
                file: parameters.file,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Delete a logo from a Workspace */
    async deleteOrganizationLogo<T = unknown>(
        parameters: Parameters.DeleteOrganizationLogo,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/logo`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Remove a member from a Workspace and from all Workspace boards */
    async deleteOrganizationMemberFromAll<T = unknown>(
        parameters: Parameters.DeleteOrganizationMemberFromAll,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/members/${parameters.idMember}/all`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Remove the associated Google Apps domain from a Workspace */
    async deleteOrganizationAssociatedDomain<T = unknown>(
        parameters: Parameters.DeleteOrganizationAssociatedDomain,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/prefs/associatedDomain`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Remove the email domain restriction on who can be invited to the Workspace */
    async deleteOrganizationInvites<T = unknown>(
        parameters: Parameters.DeleteOrganizationInvites,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/prefs/orgInviteRestrict`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Delete an organization's tag */
    async deleteOrganizationTag<T = unknown>(
        parameters: Parameters.DeleteOrganizationTag,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/tags/${parameters.idTag}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Used to check whether the given board has new billable guests on it. */
    async getOrganizationNewBillableGuestBoard<T = unknown>(
        parameters: Parameters.GetOrganizationNewBillableGuestBoard,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/organizations/${parameters.id}/newBillableGuests/${parameters.idBoard}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }
}
