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
import type { BTBillOfMaterialsItemSourceInfo } from './BTBillOfMaterialsItemSourceInfo';
import {
    BTBillOfMaterialsItemSourceInfoFromJSON,
    BTBillOfMaterialsItemSourceInfoFromJSONTyped,
    BTBillOfMaterialsItemSourceInfoToJSON,
} from './BTBillOfMaterialsItemSourceInfo';

/**
 * 
 * @export
 * @interface BTBillOfMaterialsRowInfo
 */
export interface BTBillOfMaterialsRowInfo {
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BTBillOfMaterialsRowInfo
     */
    headerIdToValue?: { [key: string]: object; };
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTBillOfMaterialsRowInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTBillOfMaterialsRowInfo
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof BTBillOfMaterialsRowInfo
     */
    indentLevel?: number;
    /**
     * 
     * @type {BTBillOfMaterialsItemSourceInfo}
     * @memberof BTBillOfMaterialsRowInfo
     */
    itemSource?: BTBillOfMaterialsItemSourceInfo;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTBillOfMaterialsRowInfo
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTBillOfMaterialsRowInfo
     */
    relatedOccurrences?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTBillOfMaterialsRowInfo
     */
    rowId?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTBillOfMaterialsRowInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTBillOfMaterialsRowInfo interface.
 */
export function instanceOfBTBillOfMaterialsRowInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBillOfMaterialsRowInfoFromJSON(json: any): BTBillOfMaterialsRowInfo {
    return BTBillOfMaterialsRowInfoFromJSONTyped(json, false);
}

export function BTBillOfMaterialsRowInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBillOfMaterialsRowInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'headerIdToValue': !exists(json, 'headerIdToValue') ? undefined : json['headerIdToValue'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'indentLevel': !exists(json, 'indentLevel') ? undefined : json['indentLevel'],
        'itemSource': !exists(json, 'itemSource') ? undefined : BTBillOfMaterialsItemSourceInfoFromJSON(json['itemSource']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'relatedOccurrences': !exists(json, 'relatedOccurrences') ? undefined : json['relatedOccurrences'],
        'rowId': !exists(json, 'rowId') ? undefined : json['rowId'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTBillOfMaterialsRowInfoToJSON(value?: BTBillOfMaterialsRowInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'headerIdToValue': value.headerIdToValue,
        'href': value.href,
        'id': value.id,
        'indentLevel': value.indentLevel,
        'itemSource': BTBillOfMaterialsItemSourceInfoToJSON(value.itemSource),
        'name': value.name,
        'relatedOccurrences': value.relatedOccurrences,
        'rowId': value.rowId,
        'viewRef': value.viewRef,
    };
}

