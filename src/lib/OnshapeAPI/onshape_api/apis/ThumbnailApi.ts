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
  BTApplicationElementThumbnailParamsArray,
  BTThumbnailInfo,
} from '../models';
import {
    BTApplicationElementThumbnailParamsArrayFromJSON,
    BTApplicationElementThumbnailParamsArrayToJSON,
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoToJSON,
} from '../models';

export interface DeleteApplicationThumbnailsRequest {
    did: string;
    wv: DeleteApplicationThumbnailsWvEnum;
    wvid: string;
    eid: string;
    linkDocumentId?: string;
}

export interface GetDocumentThumbnailRequest {
    did: string;
    wid: string;
}

export interface GetDocumentThumbnailWithSizeRequest {
    did: string;
    wid: string;
    sz: string;
    t?: string;
    skipDefaultImage?: string;
}

export interface GetElementThumbnailRequest {
    did: string;
    wv: GetElementThumbnailWvEnum;
    wvid: string;
    eid: string;
    linkDocumentId?: string;
}

export interface GetElementThumbnailWithApiConfigurationRequest {
    did: string;
    wid: string;
    eid: string;
    cid: string;
    sz: string;
    t?: string;
    skipDefaultImage?: string;
    rejectEmpty?: boolean;
    requireConfigMatch?: boolean;
}

export interface GetElementThumbnailWithSizeRequest {
    did: string;
    wv: GetElementThumbnailWithSizeWvEnum;
    wvid: string;
    eid: string;
    sz: string;
    linkDocumentId?: string;
    t?: string;
    skipDefaultImage?: string;
    rejectEmpty?: boolean;
}

export interface GetThumbnailForDocumentRequest {
    did: string;
}

export interface GetThumbnailForDocumentAndVersionRequest {
    did: string;
    vid: string;
    linkDocumentId?: string;
}

export interface GetThumbnailForDocumentAndVersionOldRequest {
    did: string;
    vid: string;
}

export interface GetThumbnailForDocumentOldRequest {
    did: string;
}

export interface SetApplicationElementThumbnailRequest {
    did: string;
    wv: SetApplicationElementThumbnailWvEnum;
    wvid: string;
    eid: string;
    bTApplicationElementThumbnailParamsArray: BTApplicationElementThumbnailParamsArray;
    linkDocumentId?: string;
    overwrite?: boolean;
}

/**
 * 
 */
export class ThumbnailApi extends runtime.BaseAPI {

    /**
     * Delete application tab thumbnail by document ID, workspace or version ID, and tab ID.
     */
    async deleteApplicationThumbnailsRaw(requestParameters: DeleteApplicationThumbnailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling deleteApplicationThumbnails.');
        }

        if (requestParameters.wv === null || requestParameters.wv === undefined) {
            throw new runtime.RequiredError('wv','Required parameter requestParameters.wv was null or undefined when calling deleteApplicationThumbnails.');
        }

        if (requestParameters.wvid === null || requestParameters.wvid === undefined) {
            throw new runtime.RequiredError('wvid','Required parameter requestParameters.wvid was null or undefined when calling deleteApplicationThumbnails.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling deleteApplicationThumbnails.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/thumbnails/d/{did}/{wv}/{wvid}/e/{eid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wv"}}`, encodeURIComponent(String(requestParameters.wv))).replace(`{${"wvid"}}`, encodeURIComponent(String(requestParameters.wvid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Delete application tab thumbnail by document ID, workspace or version ID, and tab ID.
     */
    async deleteApplicationThumbnails(requestParameters: DeleteApplicationThumbnailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.deleteApplicationThumbnailsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getDocumentThumbnailRaw(requestParameters: GetDocumentThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTThumbnailInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getDocumentThumbnail.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling getDocumentThumbnail.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/thumbnails/d/{did}/w/{wid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTThumbnailInfoFromJSON(jsonValue));
    }

    /**
     */
    async getDocumentThumbnail(requestParameters: GetDocumentThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTThumbnailInfo> {
        const response = await this.getDocumentThumbnailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve thumbnail information for a document, with a specified size in pixels by document ID and workspace ID.
     */
    async getDocumentThumbnailWithSizeRaw(requestParameters: GetDocumentThumbnailWithSizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getDocumentThumbnailWithSize.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling getDocumentThumbnailWithSize.');
        }

        if (requestParameters.sz === null || requestParameters.sz === undefined) {
            throw new runtime.RequiredError('sz','Required parameter requestParameters.sz was null or undefined when calling getDocumentThumbnailWithSize.');
        }

        const queryParameters: any = {};

        if (requestParameters.t !== undefined) {
            queryParameters['t'] = requestParameters.t;
        }

        if (requestParameters.skipDefaultImage !== undefined) {
            queryParameters['skipDefaultImage'] = requestParameters.skipDefaultImage;
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
            path: `/thumbnails/d/{did}/w/{wid}/s/{sz}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))).replace(`{${"sz"}}`, encodeURIComponent(String(requestParameters.sz))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve thumbnail information for a document, with a specified size in pixels by document ID and workspace ID.
     */
    async getDocumentThumbnailWithSize(requestParameters: GetDocumentThumbnailWithSizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getDocumentThumbnailWithSizeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve thumbnail information for a tab by document ID, workspace or version ID, and tab ID.
     */
    async getElementThumbnailRaw(requestParameters: GetElementThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTThumbnailInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getElementThumbnail.');
        }

        if (requestParameters.wv === null || requestParameters.wv === undefined) {
            throw new runtime.RequiredError('wv','Required parameter requestParameters.wv was null or undefined when calling getElementThumbnail.');
        }

        if (requestParameters.wvid === null || requestParameters.wvid === undefined) {
            throw new runtime.RequiredError('wvid','Required parameter requestParameters.wvid was null or undefined when calling getElementThumbnail.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getElementThumbnail.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
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
            path: `/thumbnails/d/{did}/{wv}/{wvid}/e/{eid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wv"}}`, encodeURIComponent(String(requestParameters.wv))).replace(`{${"wvid"}}`, encodeURIComponent(String(requestParameters.wvid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTThumbnailInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve thumbnail information for a tab by document ID, workspace or version ID, and tab ID.
     */
    async getElementThumbnail(requestParameters: GetElementThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTThumbnailInfo> {
        const response = await this.getElementThumbnailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve thumbnail information for a tab, with a specified size in pixels by document ID, workspace ID, tab ID, and configuration ID.
     */
    async getElementThumbnailWithApiConfigurationRaw(requestParameters: GetElementThumbnailWithApiConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getElementThumbnailWithApiConfiguration.');
        }

        if (requestParameters.wid === null || requestParameters.wid === undefined) {
            throw new runtime.RequiredError('wid','Required parameter requestParameters.wid was null or undefined when calling getElementThumbnailWithApiConfiguration.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getElementThumbnailWithApiConfiguration.');
        }

        if (requestParameters.cid === null || requestParameters.cid === undefined) {
            throw new runtime.RequiredError('cid','Required parameter requestParameters.cid was null or undefined when calling getElementThumbnailWithApiConfiguration.');
        }

        if (requestParameters.sz === null || requestParameters.sz === undefined) {
            throw new runtime.RequiredError('sz','Required parameter requestParameters.sz was null or undefined when calling getElementThumbnailWithApiConfiguration.');
        }

        const queryParameters: any = {};

        if (requestParameters.t !== undefined) {
            queryParameters['t'] = requestParameters.t;
        }

        if (requestParameters.skipDefaultImage !== undefined) {
            queryParameters['skipDefaultImage'] = requestParameters.skipDefaultImage;
        }

        if (requestParameters.rejectEmpty !== undefined) {
            queryParameters['rejectEmpty'] = requestParameters.rejectEmpty;
        }

        if (requestParameters.requireConfigMatch !== undefined) {
            queryParameters['requireConfigMatch'] = requestParameters.requireConfigMatch;
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
            path: `/thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wid"}}`, encodeURIComponent(String(requestParameters.wid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))).replace(`{${"cid"}}`, encodeURIComponent(String(requestParameters.cid))).replace(`{${"sz"}}`, encodeURIComponent(String(requestParameters.sz))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve thumbnail information for a tab, with a specified size in pixels by document ID, workspace ID, tab ID, and configuration ID.
     */
    async getElementThumbnailWithApiConfiguration(requestParameters: GetElementThumbnailWithApiConfigurationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getElementThumbnailWithApiConfigurationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve thumbnail information for a tab, with a specified size in pixels by document ID, workspace ID, and tab ID.
     */
    async getElementThumbnailWithSizeRaw(requestParameters: GetElementThumbnailWithSizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getElementThumbnailWithSize.');
        }

        if (requestParameters.wv === null || requestParameters.wv === undefined) {
            throw new runtime.RequiredError('wv','Required parameter requestParameters.wv was null or undefined when calling getElementThumbnailWithSize.');
        }

        if (requestParameters.wvid === null || requestParameters.wvid === undefined) {
            throw new runtime.RequiredError('wvid','Required parameter requestParameters.wvid was null or undefined when calling getElementThumbnailWithSize.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling getElementThumbnailWithSize.');
        }

        if (requestParameters.sz === null || requestParameters.sz === undefined) {
            throw new runtime.RequiredError('sz','Required parameter requestParameters.sz was null or undefined when calling getElementThumbnailWithSize.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        if (requestParameters.t !== undefined) {
            queryParameters['t'] = requestParameters.t;
        }

        if (requestParameters.skipDefaultImage !== undefined) {
            queryParameters['skipDefaultImage'] = requestParameters.skipDefaultImage;
        }

        if (requestParameters.rejectEmpty !== undefined) {
            queryParameters['rejectEmpty'] = requestParameters.rejectEmpty;
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
            path: `/thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wv"}}`, encodeURIComponent(String(requestParameters.wv))).replace(`{${"wvid"}}`, encodeURIComponent(String(requestParameters.wvid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))).replace(`{${"sz"}}`, encodeURIComponent(String(requestParameters.sz))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve thumbnail information for a tab, with a specified size in pixels by document ID, workspace ID, and tab ID.
     */
    async getElementThumbnailWithSize(requestParameters: GetElementThumbnailWithSizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.getElementThumbnailWithSizeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve thumbnail information for document in default workspace by document ID.
     */
    async getThumbnailForDocumentRaw(requestParameters: GetThumbnailForDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTThumbnailInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getThumbnailForDocument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/thumbnails/d/{did}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTThumbnailInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve thumbnail information for document in default workspace by document ID.
     */
    async getThumbnailForDocument(requestParameters: GetThumbnailForDocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTThumbnailInfo> {
        const response = await this.getThumbnailForDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getThumbnailForDocumentAndVersionRaw(requestParameters: GetThumbnailForDocumentAndVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTThumbnailInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getThumbnailForDocumentAndVersion.');
        }

        if (requestParameters.vid === null || requestParameters.vid === undefined) {
            throw new runtime.RequiredError('vid','Required parameter requestParameters.vid was null or undefined when calling getThumbnailForDocumentAndVersion.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
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
            path: `/thumbnails/d/{did}/v/{vid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"vid"}}`, encodeURIComponent(String(requestParameters.vid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTThumbnailInfoFromJSON(jsonValue));
    }

    /**
     */
    async getThumbnailForDocumentAndVersion(requestParameters: GetThumbnailForDocumentAndVersionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTThumbnailInfo> {
        const response = await this.getThumbnailForDocumentAndVersionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve thumbnail information for a document at a specified version by document ID and version ID.
     */
    async getThumbnailForDocumentAndVersionOldRaw(requestParameters: GetThumbnailForDocumentAndVersionOldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTThumbnailInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getThumbnailForDocumentAndVersionOld.');
        }

        if (requestParameters.vid === null || requestParameters.vid === undefined) {
            throw new runtime.RequiredError('vid','Required parameter requestParameters.vid was null or undefined when calling getThumbnailForDocumentAndVersionOld.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/thumbnails/document/{did}/version/{vid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"vid"}}`, encodeURIComponent(String(requestParameters.vid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTThumbnailInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve thumbnail information for a document at a specified version by document ID and version ID.
     */
    async getThumbnailForDocumentAndVersionOld(requestParameters: GetThumbnailForDocumentAndVersionOldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTThumbnailInfo> {
        const response = await this.getThumbnailForDocumentAndVersionOldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve thumbnail information for a document in default workspace by document ID.
     */
    async getThumbnailForDocumentOldRaw(requestParameters: GetThumbnailForDocumentOldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BTThumbnailInfo>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling getThumbnailForDocumentOld.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/thumbnails/document/{did}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BTThumbnailInfoFromJSON(jsonValue));
    }

    /**
     * Retrieve thumbnail information for a document in default workspace by document ID.
     */
    async getThumbnailForDocumentOld(requestParameters: GetThumbnailForDocumentOldRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BTThumbnailInfo> {
        const response = await this.getThumbnailForDocumentOldRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update application tab thumbnail by document ID, workspace or version ID, and tab ID.
     */
    async setApplicationElementThumbnailRaw(requestParameters: SetApplicationElementThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.did === null || requestParameters.did === undefined) {
            throw new runtime.RequiredError('did','Required parameter requestParameters.did was null or undefined when calling setApplicationElementThumbnail.');
        }

        if (requestParameters.wv === null || requestParameters.wv === undefined) {
            throw new runtime.RequiredError('wv','Required parameter requestParameters.wv was null or undefined when calling setApplicationElementThumbnail.');
        }

        if (requestParameters.wvid === null || requestParameters.wvid === undefined) {
            throw new runtime.RequiredError('wvid','Required parameter requestParameters.wvid was null or undefined when calling setApplicationElementThumbnail.');
        }

        if (requestParameters.eid === null || requestParameters.eid === undefined) {
            throw new runtime.RequiredError('eid','Required parameter requestParameters.eid was null or undefined when calling setApplicationElementThumbnail.');
        }

        if (requestParameters.bTApplicationElementThumbnailParamsArray === null || requestParameters.bTApplicationElementThumbnailParamsArray === undefined) {
            throw new runtime.RequiredError('bTApplicationElementThumbnailParamsArray','Required parameter requestParameters.bTApplicationElementThumbnailParamsArray was null or undefined when calling setApplicationElementThumbnail.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkDocumentId !== undefined) {
            queryParameters['linkDocumentId'] = requestParameters.linkDocumentId;
        }

        if (requestParameters.overwrite !== undefined) {
            queryParameters['overwrite'] = requestParameters.overwrite;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json;charset=UTF-8; qs=0.09';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Write"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/thumbnails/d/{did}/{wv}/{wvid}/e/{eid}`.replace(`{${"did"}}`, encodeURIComponent(String(requestParameters.did))).replace(`{${"wv"}}`, encodeURIComponent(String(requestParameters.wv))).replace(`{${"wvid"}}`, encodeURIComponent(String(requestParameters.wvid))).replace(`{${"eid"}}`, encodeURIComponent(String(requestParameters.eid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTApplicationElementThumbnailParamsArrayToJSON(requestParameters.bTApplicationElementThumbnailParamsArray),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update application tab thumbnail by document ID, workspace or version ID, and tab ID.
     */
    async setApplicationElementThumbnail(requestParameters: SetApplicationElementThumbnailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.setApplicationElementThumbnailRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const DeleteApplicationThumbnailsWvEnum = {
    W: 'w',
    V: 'v'
} as const;
export type DeleteApplicationThumbnailsWvEnum = typeof DeleteApplicationThumbnailsWvEnum[keyof typeof DeleteApplicationThumbnailsWvEnum];
/**
 * @export
 */
export const GetElementThumbnailWvEnum = {
    W: 'w',
    V: 'v'
} as const;
export type GetElementThumbnailWvEnum = typeof GetElementThumbnailWvEnum[keyof typeof GetElementThumbnailWvEnum];
/**
 * @export
 */
export const GetElementThumbnailWithSizeWvEnum = {
    W: 'w',
    V: 'v'
} as const;
export type GetElementThumbnailWithSizeWvEnum = typeof GetElementThumbnailWithSizeWvEnum[keyof typeof GetElementThumbnailWithSizeWvEnum];
/**
 * @export
 */
export const SetApplicationElementThumbnailWvEnum = {
    W: 'w',
    V: 'v'
} as const;
export type SetApplicationElementThumbnailWvEnum = typeof SetApplicationElementThumbnailWvEnum[keyof typeof SetApplicationElementThumbnailWvEnum];
