/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BTCompanyInfo,
  BTDocumentSummaryInfo,
  BTListResponseBTCompanyInfo,
} from '../models';
import {
    BTCompanyInfoFromJSON,
    BTCompanyInfoToJSON,
    BTDocumentSummaryInfoFromJSON,
    BTDocumentSummaryInfoToJSON,
    BTListResponseBTCompanyInfoFromJSON,
    BTListResponseBTCompanyInfoToJSON,
} from '../models';

export interface FindCompanyRequest {
    uid?: string;
    activeOnly?: boolean;
    includeAll?: boolean;
}

export interface GetCompanyRequest {
    cid: string;
}

export interface GetDocumentsByNameRequest {
    cid: string;
    name: string;
}

/**
 * 
 */
export class CompanyApi extends runtime.BaseAPI {

    /**
     * Retrieve user companies.
     */
    async findCompanyRaw(requestParameters: FindCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTListResponseBTCompanyInfo>> {
        const queryParameters: any = {};

        if (requestParameters.uid !== undefined) {
            queryParameters['uid'] = requestParameters.uid;
        }

        if (requestParameters.activeOnly !== undefined) {
            queryParameters['activeOnly'] = requestParameters.activeOnly;
        }

        if (requestParameters.includeAll !== undefined) {
            queryParameters['includeAll'] = requestParameters.includeAll;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/companies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTListResponseBTCompanyInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve user companies.
     */
    async findCompany(requestParameters: FindCompanyRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTListResponseBTCompanyInfo> {
        const response = await this.findCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve company by company ID.
     */
    async getCompanyRaw(requestParameters: GetCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTCompanyInfo>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getCompany.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/companies/{cid}`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTCompanyInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve company by company ID.
     */
    async getCompany(requestParameters: GetCompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTCompanyInfo> {
        const response = await this.getCompanyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of company owned documents by document name. Accessible only by company admins.
     */
    async getDocumentsByNameRaw(requestParameters: GetDocumentsByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BTDocumentSummaryInfo>>> {
        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getDocumentsByName.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling getDocumentsByName.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/companies/{cid}/documentsbyname`.replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BTDocumentSummaryInfoFromJSON));
    }

    /**
     * Retrieve a list of company owned documents by document name. Accessible only by company admins.
     */
    async getDocumentsByName(requestParameters: GetDocumentsByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BTDocumentSummaryInfo>> {
        const response = await this.getDocumentsByNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
