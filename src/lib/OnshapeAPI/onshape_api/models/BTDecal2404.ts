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
import type { BTImageMapping3821 } from './BTImageMapping3821';
import {
    BTImageMapping3821FromJSON,
    BTImageMapping3821FromJSONTyped,
    BTImageMapping3821ToJSON,
} from './BTImageMapping3821';

/**
 * 
 * @export
 * @interface BTDecal2404
 */
export interface BTDecal2404 {
    /**
     * 
     * @type {string}
     * @memberof BTDecal2404
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDecal2404
     */
    imageSourceId?: string;
    /**
     * 
     * @type {Array<BTImageMapping3821>}
     * @memberof BTDecal2404
     */
    mappings?: Array<BTImageMapping3821>;
}

/**
 * Check if a given object implements the BTDecal2404 interface.
 */
export function instanceOfBTDecal2404(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDecal2404FromJSON(json: any): BTDecal2404 {
    return BTDecal2404FromJSONTyped(json, false);
}

export function BTDecal2404FromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDecal2404 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'imageSourceId': !exists(json, 'imageSourceId') ? undefined : json['imageSourceId'],
        'mappings': !exists(json, 'mappings') ? undefined : ((json['mappings'] as Array<any>).map(BTImageMapping3821FromJSON)),
    };
}

export function BTDecal2404ToJSON(value?: BTDecal2404 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'imageSourceId': value.imageSourceId,
        'mappings': value.mappings === undefined ? undefined : ((value.mappings as Array<any>).map(BTImageMapping3821ToJSON)),
    };
}

