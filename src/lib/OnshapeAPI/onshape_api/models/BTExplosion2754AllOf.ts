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
import type { BTExplosionStepFeature3008 } from './BTExplosionStepFeature3008';
import {
    BTExplosionStepFeature3008FromJSON,
    BTExplosionStepFeature3008FromJSONTyped,
    BTExplosionStepFeature3008ToJSON,
} from './BTExplosionStepFeature3008';
import type { BTMicroversionIdAndConfiguration2338 } from './BTMicroversionIdAndConfiguration2338';
import {
    BTMicroversionIdAndConfiguration2338FromJSON,
    BTMicroversionIdAndConfiguration2338FromJSONTyped,
    BTMicroversionIdAndConfiguration2338ToJSON,
} from './BTMicroversionIdAndConfiguration2338';

/**
 * 
 * @export
 * @interface BTExplosion2754AllOf
 */
export interface BTExplosion2754AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTExplosion2754AllOf
     */
    btType?: string;
    /**
     * 
     * @type {Array<BTExplosionStepFeature3008>}
     * @memberof BTExplosion2754AllOf
     */
    explodeSteps?: Array<BTExplosionStepFeature3008>;
    /**
     * 
     * @type {BTMicroversionIdAndConfiguration2338}
     * @memberof BTExplosion2754AllOf
     */
    startingPositionId?: BTMicroversionIdAndConfiguration2338;
}

/**
 * Check if a given object implements the BTExplosion2754AllOf interface.
 */
export function instanceOfBTExplosion2754AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTExplosion2754AllOfFromJSON(json: any): BTExplosion2754AllOf {
    return BTExplosion2754AllOfFromJSONTyped(json, false);
}

export function BTExplosion2754AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTExplosion2754AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'explodeSteps': !exists(json, 'explodeSteps') ? undefined : ((json['explodeSteps'] as Array<any>).map(BTExplosionStepFeature3008FromJSON)),
        'startingPositionId': !exists(json, 'startingPositionId') ? undefined : BTMicroversionIdAndConfiguration2338FromJSON(json['startingPositionId']),
    };
}

export function BTExplosion2754AllOfToJSON(value?: BTExplosion2754AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'explodeSteps': value.explodeSteps === undefined ? undefined : ((value.explodeSteps as Array<any>).map(BTExplosionStepFeature3008ToJSON)),
        'startingPositionId': BTMicroversionIdAndConfiguration2338ToJSON(value.startingPositionId),
    };
}

