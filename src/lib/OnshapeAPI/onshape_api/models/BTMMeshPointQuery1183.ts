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
import type { BTMIndividualQueryBase139 } from './BTMIndividualQueryBase139';
import {
    BTMIndividualQueryBase139FromJSON,
    BTMIndividualQueryBase139FromJSONTyped,
    BTMIndividualQueryBase139ToJSON,
} from './BTMIndividualQueryBase139';
import type { BTMIndividualQueryWithOccurrenceBase904 } from './BTMIndividualQueryWithOccurrenceBase904';
import {
    BTMIndividualQueryWithOccurrenceBase904FromJSON,
    BTMIndividualQueryWithOccurrenceBase904FromJSONTyped,
    BTMIndividualQueryWithOccurrenceBase904ToJSON,
} from './BTMIndividualQueryWithOccurrenceBase904';
import type { BTOccurrence74 } from './BTOccurrence74';
import {
    BTOccurrence74FromJSON,
    BTOccurrence74FromJSONTyped,
    BTOccurrence74ToJSON,
} from './BTOccurrence74';
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

/**
 * 
 * @export
 * @interface BTMMeshPointQuery1183
 */
export interface BTMMeshPointQuery1183 extends BTMIndividualQueryWithOccurrenceBase904 {
    /**
     * 
     * @type {string}
     * @memberof BTMMeshPointQuery1183
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTMMeshPointQuery1183
     */
    origin?: BTVector3d389;
}

/**
 * Check if a given object implements the BTMMeshPointQuery1183 interface.
 */
export function instanceOfBTMMeshPointQuery1183(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTMMeshPointQuery1183FromJSON(json: any): BTMMeshPointQuery1183 {
    return BTMMeshPointQuery1183FromJSONTyped(json, false);
}

export function BTMMeshPointQuery1183FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTMMeshPointQuery1183 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...BTMIndividualQueryWithOccurrenceBase904FromJSONTyped(json, ignoreDiscriminator),
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'origin': !exists(json, 'origin') ? undefined : BTVector3d389FromJSON(json['origin']),
    };
}

export function BTMMeshPointQuery1183ToJSON(value?: BTMMeshPointQuery1183 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...BTMIndividualQueryWithOccurrenceBase904ToJSON(value),
        'btType': value.btType,
        'origin': BTVector3d389ToJSON(value.origin),
    };
}

