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
import type { BTTableColumnInfo1222 } from './BTTableColumnInfo1222';
import {
    BTTableColumnInfo1222FromJSON,
    BTTableColumnInfo1222FromJSONTyped,
    BTTableColumnInfo1222ToJSON,
} from './BTTableColumnInfo1222';
import type { BTTableColumnSpec1967 } from './BTTableColumnSpec1967';
import {
    BTTableColumnSpec1967FromJSON,
    BTTableColumnSpec1967FromJSONTyped,
    BTTableColumnSpec1967ToJSON,
} from './BTTableColumnSpec1967';

/**
 * 
 * @export
 * @interface BTPropertyTableColumnInfo2161
 */
export interface BTPropertyTableColumnInfo2161 extends BTTableColumnInfo1222 {
    /**
     * 
     * @type {string}
     * @memberof BTPropertyTableColumnInfo2161
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPropertyTableColumnInfo2161
     */
    isComputedAssemblyProperty?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPropertyTableColumnInfo2161
     */
    isComputedProperty?: boolean;
}

/**
 * Check if a given object implements the BTPropertyTableColumnInfo2161 interface.
 */
export function instanceOfBTPropertyTableColumnInfo2161(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPropertyTableColumnInfo2161FromJSON(json: any): BTPropertyTableColumnInfo2161 {
    return BTPropertyTableColumnInfo2161FromJSONTyped(json, false);
}

export function BTPropertyTableColumnInfo2161FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPropertyTableColumnInfo2161 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTTableColumnInfo1222FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'isComputedAssemblyProperty': !exists(json, 'isComputedAssemblyProperty') ? undefined : json['isComputedAssemblyProperty'],
        'isComputedProperty': !exists(json, 'isComputedProperty') ? undefined : json['isComputedProperty'],
    };
}

export function BTPropertyTableColumnInfo2161ToJSON(value?: BTPropertyTableColumnInfo2161 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTTableColumnInfo1222ToJSON(value),
        'btType': value.btType,
        'isComputedAssemblyProperty': value.isComputedAssemblyProperty,
        'isComputedProperty': value.isComputedProperty,
    };
}
