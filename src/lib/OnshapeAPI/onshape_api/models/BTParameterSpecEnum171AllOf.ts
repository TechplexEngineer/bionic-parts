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
import type { BTParameterVisibilityCondition177 } from './BTParameterVisibilityCondition177';
import {
    BTParameterVisibilityCondition177FromJSON,
    BTParameterVisibilityCondition177FromJSONTyped,
    BTParameterVisibilityCondition177ToJSON,
} from './BTParameterVisibilityCondition177';

/**
 * 
 * @export
 * @interface BTParameterSpecEnum171AllOf
 */
export interface BTParameterSpecEnum171AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecEnum171AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecEnum171AllOf
     */
    enumName?: string;
    /**
     * 
     * @type {{ [key: string]: BTParameterVisibilityCondition177; }}
     * @memberof BTParameterSpecEnum171AllOf
     */
    enumValueToVisibilityCondition?: { [key: string]: BTParameterVisibilityCondition177; };
    /**
     * 
     * @type {string}
     * @memberof BTParameterSpecEnum171AllOf
     */
    namespace?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpecEnum171AllOf
     */
    optionNames?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTParameterSpecEnum171AllOf
     */
    options?: Array<string>;
}

/**
 * Check if a given object implements the BTParameterSpecEnum171AllOf interface.
 */
export function instanceOfBTParameterSpecEnum171AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTParameterSpecEnum171AllOfFromJSON(json: any): BTParameterSpecEnum171AllOf {
    return BTParameterSpecEnum171AllOfFromJSONTyped(json, false);
}

export function BTParameterSpecEnum171AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTParameterSpecEnum171AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'enumName': !exists(json, 'enumName') ? undefined : json['enumName'],
        'enumValueToVisibilityCondition': !exists(json, 'enumValueToVisibilityCondition') ? undefined : (mapValues(json['enumValueToVisibilityCondition'], BTParameterVisibilityCondition177FromJSON)),
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'optionNames': !exists(json, 'optionNames') ? undefined : json['optionNames'],
        'options': !exists(json, 'options') ? undefined : json['options'],
    };
}

export function BTParameterSpecEnum171AllOfToJSON(value?: BTParameterSpecEnum171AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'enumName': value.enumName,
        'enumValueToVisibilityCondition': value.enumValueToVisibilityCondition === undefined ? undefined : (mapValues(value.enumValueToVisibilityCondition, BTParameterVisibilityCondition177ToJSON)),
        'namespace': value.namespace,
        'optionNames': value.optionNames,
        'options': value.options,
    };
}
