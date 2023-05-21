import type * as Models from './models';
import type * as Parameters from './parameters';
import type {Client} from '../clients';
import type {RequestConfig} from '../types';

export class Enterprises {
    constructor(private client: Client) {
    }

    /** Get an enterprise by its ID. */
    async getEnterprise<T = Models.Enterprise>(
        parameters: Parameters.GetEnterprise,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
                members: parameters.members,
                member_fields: parameters.memberFields ?? parameters.member?.fields,
                member_filter: parameters.memberFilter ?? parameters.member?.filter,
                member_sort: parameters.memberSort ?? parameters.member?.sort,
                member_sortBy: parameters.memberSortBy,
                member_sortOrder: parameters.memberSortOrder,
                member_startIndex: parameters.memberStartIndex ?? parameters.member?.startIndex,
                member_count: parameters.memberCount ?? parameters.member?.count,
                organizations: parameters.organizations,
                organization_fields: parameters.organizationFields ?? parameters.organization?.fields,
                organization_paid_accounts: parameters.organizationPaidAccounts ?? parameters.organization?.paidAccounts,
                organization_memberships: parameters.organizationMemberships ?? parameters.organization?.memberships,
            },
        };

        return this.client.sendRequest(config);
    }

    /**
     * Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from
     * an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is
     * required for this route.
     */
    async getEnterpriseAuditLog<T = Models.EnterpriseAuditLog[]>(
        parameters: Parameters.GetEnterpriseAuditLog,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/auditlog`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get an enterprise's admin members. */
    async getEnterpriseAdmins<T = Models.EnterpriseAdmin>(
        parameters: Parameters.GetEnterpriseAdmins,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/admins`,
            method: 'GET',
            params: {
                fields: parameters.fields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the signup URL for an enterprise. */
    async getEnterpriseSignupUrl<T = Models.GetEnterprisesIdSignupUrl>(
        parameters: Parameters.GetEnterpriseSignupUrl,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/signupUrl`,
            method: 'GET',
            params: {
                authenticate: parameters.authenticate,
                confirmationAccepted: parameters.confirmationAccepted,
                returnUrl: parameters.returnUrl,
                tosAccepted: parameters.tosAccepted,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get the members of an enterprise. */
    async getEnterpriseMembers<T = Models.Member[]>(
        parameters: Parameters.GetEnterpriseMembers,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/members`,
            method: 'GET',
            params: {
                fields: parameters.fields,
                filter: parameters.filter,
                sort: parameters.sort,
                sortBy: parameters.sortBy,
                sortOrder: parameters.sortOrder,
                startIndex: parameters.startIndex,
                count: parameters.count,
                organization_fields: parameters.organizationFields,
                board_fields: parameters.boardFields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get a specific member of an enterprise by ID. */
    async getEnterpriseMember<T = Models.Member>(
        parameters: Parameters.GetEnterpriseMember,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/members/${parameters.idMember}`,
            method: 'GET',
            params: {
                fields: parameters.fields,
                organization_fields: parameters.organizationFields,
                board_fields: parameters.boardFields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Get whether an organization can be transferred to an enterprise. */
    async getEnterpriseTransferrableOrganization<T = Models.TransferrableOrganization>(
        parameters: Parameters.GetEnterpriseTransferrableOrganization,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/transferrable/organization/${parameters.idOrganization}`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get the Workspaces that are claimable by the enterprise by ID. */
    async getEnterprisesIdClaimableOrganizations<T = Models.ClaimableOrganizations>(
        parameters: Parameters.GetEnterprisesIdClaimableOrganizations,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/claimableOrganizations`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Get the Workspaces that are pending for the enterprise by ID. */
    async getEnterprisesIdPendingOrganizations<T = Models.PendingOrganizations[]>(
        parameters: Parameters.GetEnterprisesIdPendingOrganizations,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/pendingOrganizations`,
            method: 'GET',
        };

        return this.client.sendRequest(config);
    }

    /** Create an auth Token for an Enterprise. */
    async createEnterpriseToken<T = unknown>(
        parameters: Parameters.CreateEnterpriseToken,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/tokens`,
            method: 'POST',
            params: {
                expiration: parameters.expiration,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Transfer an organization to an enterprise. */
    async transferOrganizationToEnterprise<T = Array<Models.Organization>>(
        parameters: Parameters.TransferOrganizationToEnterprise,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/organizations`,
            method: 'PUT',
            params: {
                idOrganization: parameters.idOrganization,
            },
        };

        return this.client.sendRequest(config);
    }

    /** This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. */
    async updateEnterpriseMemberLicense<T = Models.Member>(
        parameters: Parameters.UpdateEnterpriseMemberLicense,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/members/${parameters.idMember}/licensed`,
            method: 'PUT',
            params: {
                value: parameters.values ?? parameters.value,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Deactivate a Member of an Enterprise. */
    async deactivateEnterpriseMember<T = unknown>(
        parameters: Parameters.DeactivateEnterpriseMember,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/members/${parameters.idMember}/deactivated`,
            method: 'PUT',
            params: {
                value: parameters.value,
                fields: parameters.fields,
                organization_fields: parameters.organizationFields,
                board_fields: parameters.boardFields,
            },
        };

        return this.client.sendRequest(config);
    }

    /** Make Member an admin of Enterprise. */
    async makeEnterpriseMemberAdmin<T = unknown>(
        parameters: Parameters.MakeEnterpriseMemberAdmin,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/admins/${parameters.idMember}`,
            method: 'PUT',
        };

        return this.client.sendRequest(config);
    }

    /** Remove a member as admin from an enterprise. */
    async deleteEnterpriseMemberAdmin<T = unknown>(
        parameters: Parameters.DeleteEnterpriseMemberAdmin,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/admins/${parameters.idMember}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }

    /** Remove an organization from an enterprise. */
    async deleteEnterpriseOrganization<T = unknown>(
        parameters: Parameters.DeleteEnterpriseOrganization,
    ): Promise<T> {
        const config: RequestConfig = {
            url: `/enterprises/${parameters.id}/organizations/${parameters.idOrg}`,
            method: 'DELETE',
        };

        return this.client.sendRequest(config);
    }
}
