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
import type { BTDiffInfo } from './BTDiffInfo';
import {
    BTDiffInfoFromJSON,
    BTDiffInfoFromJSONTyped,
    BTDiffInfoToJSON,
} from './BTDiffInfo';
import type { BTDiffInfoCollectionType } from './BTDiffInfoCollectionType';
import {
    BTDiffInfoCollectionTypeFromJSON,
    BTDiffInfoCollectionTypeFromJSONTyped,
    BTDiffInfoCollectionTypeToJSON,
} from './BTDiffInfoCollectionType';
import type { GBTNodeChange } from './GBTNodeChange';
import {
    GBTNodeChangeFromJSON,
    GBTNodeChangeFromJSONTyped,
    GBTNodeChangeToJSON,
} from './GBTNodeChange';

/**
 * 
 * @export
 * @interface BTRootDiffInfo
 */
export interface BTRootDiffInfo {
    /**
     * 
     * @type {{ [key: string]: BTDiffInfo; }}
     * @memberof BTRootDiffInfo
     */
    changes?: { [key: string]: BTDiffInfo; };
    /**
     * 
     * @type {{ [key: string]: Array<BTDiffInfo>; }}
     * @memberof BTRootDiffInfo
     */
    collectionChanges?: { [key: string]: Array<BTDiffInfo>; };
    /**
     * 
     * @type {BTDiffInfoCollectionType}
     * @memberof BTRootDiffInfo
     */
    entityType?: BTDiffInfoCollectionType;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTRootDiffInfo
     */
    geometryChangeMessages?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    sourceConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    sourceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    sourceMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    sourceValue?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    sourceVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    sourceWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    targetConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    targetId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    targetMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    targetValue?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    targetVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTRootDiffInfo
     */
    targetWorkspaceId?: string;
    /**
     * 
     * @type {GBTNodeChange}
     * @memberof BTRootDiffInfo
     */
    type?: GBTNodeChange;
}

/**
 * Check if a given object implements the BTRootDiffInfo interface.
 */
export function instanceOfBTRootDiffInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTRootDiffInfoFromJSON(json: any): BTRootDiffInfo {
    return BTRootDiffInfoFromJSONTyped(json, false);
}

export function BTRootDiffInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTRootDiffInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changes': !exists(json, 'changes') ? undefined : (mapValues(json['changes'], BTDiffInfoFromJSON)),
        'collectionChanges': !exists(json, 'collectionChanges') ? undefined : json['collectionChanges'],
        'entityType': !exists(json, 'entityType') ? undefined : BTDiffInfoCollectionTypeFromJSON(json['entityType']),
        'geometryChangeMessages': !exists(json, 'geometryChangeMessages') ? undefined : json['geometryChangeMessages'],
        'sourceConfiguration': !exists(json, 'sourceConfiguration') ? undefined : json['sourceConfiguration'],
        'sourceId': !exists(json, 'sourceId') ? undefined : json['sourceId'],
        'sourceMicroversionId': !exists(json, 'sourceMicroversionId') ? undefined : json['sourceMicroversionId'],
        'sourceValue': !exists(json, 'sourceValue') ? undefined : json['sourceValue'],
        'sourceVersionId': !exists(json, 'sourceVersionId') ? undefined : json['sourceVersionId'],
        'sourceWorkspaceId': !exists(json, 'sourceWorkspaceId') ? undefined : json['sourceWorkspaceId'],
        'targetConfiguration': !exists(json, 'targetConfiguration') ? undefined : json['targetConfiguration'],
        'targetId': !exists(json, 'targetId') ? undefined : json['targetId'],
        'targetMicroversionId': !exists(json, 'targetMicroversionId') ? undefined : json['targetMicroversionId'],
        'targetValue': !exists(json, 'targetValue') ? undefined : json['targetValue'],
        'targetVersionId': !exists(json, 'targetVersionId') ? undefined : json['targetVersionId'],
        'targetWorkspaceId': !exists(json, 'targetWorkspaceId') ? undefined : json['targetWorkspaceId'],
        'type': !exists(json, 'type') ? undefined : GBTNodeChangeFromJSON(json['type']),
    };
}

export function BTRootDiffInfoToJSON(value?: BTRootDiffInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changes': value.changes === undefined ? undefined : (mapValues(value.changes, BTDiffInfoToJSON)),
        'collectionChanges': value.collectionChanges,
        'entityType': BTDiffInfoCollectionTypeToJSON(value.entityType),
        'geometryChangeMessages': value.geometryChangeMessages,
        'sourceConfiguration': value.sourceConfiguration,
        'sourceId': value.sourceId,
        'sourceMicroversionId': value.sourceMicroversionId,
        'sourceValue': value.sourceValue,
        'sourceVersionId': value.sourceVersionId,
        'sourceWorkspaceId': value.sourceWorkspaceId,
        'targetConfiguration': value.targetConfiguration,
        'targetId': value.targetId,
        'targetMicroversionId': value.targetMicroversionId,
        'targetValue': value.targetValue,
        'targetVersionId': value.targetVersionId,
        'targetWorkspaceId': value.targetWorkspaceId,
        'type': GBTNodeChangeToJSON(value.type),
    };
}

