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
import type { BTVector3d389 } from './BTVector3d389';
import {
    BTVector3d389FromJSON,
    BTVector3d389FromJSONTyped,
    BTVector3d389ToJSON,
} from './BTVector3d389';

import {
     BTNonAlignedBoundingBox4180FromJSONTyped
} from './index';

/**
 * An axis-aligned bounding box indicated by two opposite corners.
 * @export
 * @interface BTBoundingBox1052
 */
export interface BTBoundingBox1052 {
    /**
     * 
     * @type {string}
     * @memberof BTBoundingBox1052
     */
    btType?: string;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTBoundingBox1052
     */
    maxCorner?: BTVector3d389;
    /**
     * 
     * @type {BTVector3d389}
     * @memberof BTBoundingBox1052
     */
    minCorner?: BTVector3d389;
    /**
     * 
     * @type {boolean}
     * @memberof BTBoundingBox1052
     */
    valid?: boolean;
}

/**
 * Check if a given object implements the BTBoundingBox1052 interface.
 */
export function instanceOfBTBoundingBox1052(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTBoundingBox1052FromJSON(json: any): BTBoundingBox1052 {
    return BTBoundingBox1052FromJSONTyped(json, false);
}

export function BTBoundingBox1052FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTBoundingBox1052 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!ignoreDiscriminator) {
        if (json['btType'] === 'BTNonAlignedBoundingBox-4180') {
            return BTNonAlignedBoundingBox4180FromJSONTyped(json, true);
        }
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'maxCorner': !exists(json, 'maxCorner') ? undefined : BTVector3d389FromJSON(json['maxCorner']),
        'minCorner': !exists(json, 'minCorner') ? undefined : BTVector3d389FromJSON(json['minCorner']),
        'valid': !exists(json, 'valid') ? undefined : json['valid'],
    };
}

export function BTBoundingBox1052ToJSON(value?: BTBoundingBox1052 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'maxCorner': BTVector3d389ToJSON(value.maxCorner),
        'minCorner': BTVector3d389ToJSON(value.minCorner),
        'valid': value.valid,
    };
}
