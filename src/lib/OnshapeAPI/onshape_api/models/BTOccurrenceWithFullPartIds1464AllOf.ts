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
import type { BTBSMatrix386 } from './BTBSMatrix386';
import {
    BTBSMatrix386FromJSON,
    BTBSMatrix386FromJSONTyped,
    BTBSMatrix386ToJSON,
} from './BTBSMatrix386';
import type { BTFullElementIdWithDocument1729 } from './BTFullElementIdWithDocument1729';
import {
    BTFullElementIdWithDocument1729FromJSON,
    BTFullElementIdWithDocument1729FromJSONTyped,
    BTFullElementIdWithDocument1729ToJSON,
} from './BTFullElementIdWithDocument1729';

/**
 * 
 * @export
 * @interface BTOccurrenceWithFullPartIds1464AllOf
 */
export interface BTOccurrenceWithFullPartIds1464AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTOccurrenceWithFullPartIds1464AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTFullElementIdWithDocument1729}
     * @memberof BTOccurrenceWithFullPartIds1464AllOf
     */
    fullElementId?: BTFullElementIdWithDocument1729;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTOccurrenceWithFullPartIds1464AllOf
     */
    partIds?: Array<string>;
    /**
     * 
     * @type {BTBSMatrix386}
     * @memberof BTOccurrenceWithFullPartIds1464AllOf
     */
    transform?: BTBSMatrix386;
}

/**
 * Check if a given object implements the BTOccurrenceWithFullPartIds1464AllOf interface.
 */
export function instanceOfBTOccurrenceWithFullPartIds1464AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTOccurrenceWithFullPartIds1464AllOfFromJSON(json: any): BTOccurrenceWithFullPartIds1464AllOf {
    return BTOccurrenceWithFullPartIds1464AllOfFromJSONTyped(json, false);
}

export function BTOccurrenceWithFullPartIds1464AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTOccurrenceWithFullPartIds1464AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'fullElementId': !exists(json, 'fullElementId') ? undefined : BTFullElementIdWithDocument1729FromJSON(json['fullElementId']),
        'partIds': !exists(json, 'partIds') ? undefined : json['partIds'],
        'transform': !exists(json, 'transform') ? undefined : BTBSMatrix386FromJSON(json['transform']),
    };
}

export function BTOccurrenceWithFullPartIds1464AllOfToJSON(value?: BTOccurrenceWithFullPartIds1464AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'fullElementId': BTFullElementIdWithDocument1729ToJSON(value.fullElementId),
        'partIds': value.partIds,
        'transform': BTBSMatrix386ToJSON(value.transform),
    };
}

