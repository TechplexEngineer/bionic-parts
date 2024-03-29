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
/**
 * 
 * @export
 * @interface BTSketchSplineDisplayData359AllOf
 */
export interface BTSketchSplineDisplayData359AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTSketchSplineDisplayData359AllOf
     */
    btType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchSplineDisplayData359AllOf
     */
    closed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTSketchSplineDisplayData359AllOf
     */
    controlPointCount?: number;
    /**
     * 
     * @type {number}
     * @memberof BTSketchSplineDisplayData359AllOf
     */
    degree?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchSplineDisplayData359AllOf
     */
    hasHandlesInSketch?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BTSketchSplineDisplayData359AllOf
     */
    maximumParameter?: number;
    /**
     * 
     * @type {number}
     * @memberof BTSketchSplineDisplayData359AllOf
     */
    minimumParameter?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchSplineDisplayData359AllOf
     */
    rational?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTSketchSplineDisplayData359AllOf
     */
    segment?: boolean;
}

/**
 * Check if a given object implements the BTSketchSplineDisplayData359AllOf interface.
 */
export function instanceOfBTSketchSplineDisplayData359AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTSketchSplineDisplayData359AllOfFromJSON(json: any): BTSketchSplineDisplayData359AllOf {
    return BTSketchSplineDisplayData359AllOfFromJSONTyped(json, false);
}

export function BTSketchSplineDisplayData359AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTSketchSplineDisplayData359AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'closed': !exists(json, 'closed') ? undefined : json['closed'],
        'controlPointCount': !exists(json, 'controlPointCount') ? undefined : json['controlPointCount'],
        'degree': !exists(json, 'degree') ? undefined : json['degree'],
        'hasHandlesInSketch': !exists(json, 'hasHandlesInSketch') ? undefined : json['hasHandlesInSketch'],
        'maximumParameter': !exists(json, 'maximumParameter') ? undefined : json['maximumParameter'],
        'minimumParameter': !exists(json, 'minimumParameter') ? undefined : json['minimumParameter'],
        'rational': !exists(json, 'rational') ? undefined : json['rational'],
        'segment': !exists(json, 'segment') ? undefined : json['segment'],
    };
}

export function BTSketchSplineDisplayData359AllOfToJSON(value?: BTSketchSplineDisplayData359AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'closed': value.closed,
        'controlPointCount': value.controlPointCount,
        'degree': value.degree,
        'hasHandlesInSketch': value.hasHandlesInSketch,
        'maximumParameter': value.maximumParameter,
        'minimumParameter': value.minimumParameter,
        'rational': value.rational,
        'segment': value.segment,
    };
}

