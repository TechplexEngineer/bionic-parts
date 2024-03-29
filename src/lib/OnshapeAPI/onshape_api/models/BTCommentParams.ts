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

import { exists, mapValues } from '../runtime';
import type { BTViewDataParams } from './BTViewDataParams';
import {
    BTViewDataParamsFromJSON,
    BTViewDataParamsFromJSONTyped,
    BTViewDataParamsToJSON,
} from './BTViewDataParams';

/**
 * 
 * @export
 * @interface BTCommentParams
 */
export interface BTCommentParams {
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    assemblyFeature?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    assignee?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    elementFeature?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    elementOccurrence?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    elementQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    objectId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCommentParams
     */
    objectType?: number;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    parentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    versionId?: string;
    /**
     * 
     * @type {BTViewDataParams}
     * @memberof BTCommentParams
     */
    viewData?: BTViewDataParams;
    /**
     * 
     * @type {string}
     * @memberof BTCommentParams
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTCommentParams interface.
 */
export function instanceOfBTCommentParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCommentParamsFromJSON(json: any): BTCommentParams {
    return BTCommentParamsFromJSONTyped(json, false);
}

export function BTCommentParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCommentParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assemblyFeature': !exists(json, 'assemblyFeature') ? undefined : json['assemblyFeature'],
        'assignee': !exists(json, 'assignee') ? undefined : json['assignee'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'elementFeature': !exists(json, 'elementFeature') ? undefined : json['elementFeature'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementOccurrence': !exists(json, 'elementOccurrence') ? undefined : json['elementOccurrence'],
        'elementQuery': !exists(json, 'elementQuery') ? undefined : json['elementQuery'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'objectId': !exists(json, 'objectId') ? undefined : json['objectId'],
        'objectType': !exists(json, 'objectType') ? undefined : json['objectType'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'viewData': !exists(json, 'viewData') ? undefined : BTViewDataParamsFromJSON(json['viewData']),
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTCommentParamsToJSON(value?: BTCommentParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assemblyFeature': value.assemblyFeature,
        'assignee': value.assignee,
        'documentId': value.documentId,
        'elementFeature': value.elementFeature,
        'elementId': value.elementId,
        'elementOccurrence': value.elementOccurrence,
        'elementQuery': value.elementQuery,
        'id': value.id,
        'message': value.message,
        'objectId': value.objectId,
        'objectType': value.objectType,
        'parentId': value.parentId,
        'versionId': value.versionId,
        'viewData': BTViewDataParamsToJSON(value.viewData),
        'workspaceId': value.workspaceId,
    };
}

