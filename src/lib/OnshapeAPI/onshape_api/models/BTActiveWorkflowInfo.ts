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
import type { BTPublishedWorkflowInfo } from './BTPublishedWorkflowInfo';
import {
    BTPublishedWorkflowInfoFromJSON,
    BTPublishedWorkflowInfoFromJSONTyped,
    BTPublishedWorkflowInfoToJSON,
} from './BTPublishedWorkflowInfo';

/**
 * 
 * @export
 * @interface BTActiveWorkflowInfo
 */
export interface BTActiveWorkflowInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    allowReleaseItemsFromOtherDocuments?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    canCurrentUserCreateReleases?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    canCurrentUserManageWorkflows?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    canCurrentUserSeeArenaItemLink?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    canCurrentUserSyncBomToArena?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    canCurrentUserSyncToArena?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    canCurrentUserSyncVersionsToArena?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTActiveWorkflowInfo
     */
    companyId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTActiveWorkflowInfo
     */
    documentId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    drawingCanDuplicatePartNumber?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    enabledActiveMultipleWorkflows?: boolean;
    /**
     * 
     * @type {BTPublishedWorkflowInfo}
     * @memberof BTActiveWorkflowInfo
     */
    obsoletionWorkflow?: BTPublishedWorkflowInfo;
    /**
     * 
     * @type {string}
     * @memberof BTActiveWorkflowInfo
     */
    obsoletionWorkflowId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTActiveWorkflowInfo
     */
    partNumberingSchemeId?: string;
    /**
     * 
     * @type {Array<BTPublishedWorkflowInfo>}
     * @memberof BTActiveWorkflowInfo
     */
    pickableWorkflows?: Array<BTPublishedWorkflowInfo>;
    /**
     * 
     * @type {BTPublishedWorkflowInfo}
     * @memberof BTActiveWorkflowInfo
     */
    releaseWorkflow?: BTPublishedWorkflowInfo;
    /**
     * 
     * @type {string}
     * @memberof BTActiveWorkflowInfo
     */
    releaseWorkflowId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTActiveWorkflowInfo
     */
    releaseableApplications?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    usingAutoPartNumbering?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    usingManagedWorkflow?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTActiveWorkflowInfo
     */
    usingThirdPartyPartNumbering?: boolean;
}

/**
 * Check if a given object implements the BTActiveWorkflowInfo interface.
 */
export function instanceOfBTActiveWorkflowInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTActiveWorkflowInfoFromJSON(json: any): BTActiveWorkflowInfo {
    return BTActiveWorkflowInfoFromJSONTyped(json, false);
}

export function BTActiveWorkflowInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTActiveWorkflowInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowReleaseItemsFromOtherDocuments': !exists(json, 'allowReleaseItemsFromOtherDocuments') ? undefined : json['allowReleaseItemsFromOtherDocuments'],
        'canCurrentUserCreateReleases': !exists(json, 'canCurrentUserCreateReleases') ? undefined : json['canCurrentUserCreateReleases'],
        'canCurrentUserManageWorkflows': !exists(json, 'canCurrentUserManageWorkflows') ? undefined : json['canCurrentUserManageWorkflows'],
        'canCurrentUserSeeArenaItemLink': !exists(json, 'canCurrentUserSeeArenaItemLink') ? undefined : json['canCurrentUserSeeArenaItemLink'],
        'canCurrentUserSyncBomToArena': !exists(json, 'canCurrentUserSyncBomToArena') ? undefined : json['canCurrentUserSyncBomToArena'],
        'canCurrentUserSyncToArena': !exists(json, 'canCurrentUserSyncToArena') ? undefined : json['canCurrentUserSyncToArena'],
        'canCurrentUserSyncVersionsToArena': !exists(json, 'canCurrentUserSyncVersionsToArena') ? undefined : json['canCurrentUserSyncVersionsToArena'],
        'companyId': !exists(json, 'companyId') ? undefined : json['companyId'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'drawingCanDuplicatePartNumber': !exists(json, 'drawingCanDuplicatePartNumber') ? undefined : json['drawingCanDuplicatePartNumber'],
        'enabledActiveMultipleWorkflows': !exists(json, 'enabledActiveMultipleWorkflows') ? undefined : json['enabledActiveMultipleWorkflows'],
        'obsoletionWorkflow': !exists(json, 'obsoletionWorkflow') ? undefined : BTPublishedWorkflowInfoFromJSON(json['obsoletionWorkflow']),
        'obsoletionWorkflowId': !exists(json, 'obsoletionWorkflowId') ? undefined : json['obsoletionWorkflowId'],
        'partNumberingSchemeId': !exists(json, 'partNumberingSchemeId') ? undefined : json['partNumberingSchemeId'],
        'pickableWorkflows': !exists(json, 'pickableWorkflows') ? undefined : ((json['pickableWorkflows'] as Array<any>).map(BTPublishedWorkflowInfoFromJSON)),
        'releaseWorkflow': !exists(json, 'releaseWorkflow') ? undefined : BTPublishedWorkflowInfoFromJSON(json['releaseWorkflow']),
        'releaseWorkflowId': !exists(json, 'releaseWorkflowId') ? undefined : json['releaseWorkflowId'],
        'releaseableApplications': !exists(json, 'releaseableApplications') ? undefined : json['releaseableApplications'],
        'usingAutoPartNumbering': !exists(json, 'usingAutoPartNumbering') ? undefined : json['usingAutoPartNumbering'],
        'usingManagedWorkflow': !exists(json, 'usingManagedWorkflow') ? undefined : json['usingManagedWorkflow'],
        'usingThirdPartyPartNumbering': !exists(json, 'usingThirdPartyPartNumbering') ? undefined : json['usingThirdPartyPartNumbering'],
    };
}

export function BTActiveWorkflowInfoToJSON(value?: BTActiveWorkflowInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowReleaseItemsFromOtherDocuments': value.allowReleaseItemsFromOtherDocuments,
        'canCurrentUserCreateReleases': value.canCurrentUserCreateReleases,
        'canCurrentUserManageWorkflows': value.canCurrentUserManageWorkflows,
        'canCurrentUserSeeArenaItemLink': value.canCurrentUserSeeArenaItemLink,
        'canCurrentUserSyncBomToArena': value.canCurrentUserSyncBomToArena,
        'canCurrentUserSyncToArena': value.canCurrentUserSyncToArena,
        'canCurrentUserSyncVersionsToArena': value.canCurrentUserSyncVersionsToArena,
        'companyId': value.companyId,
        'documentId': value.documentId,
        'drawingCanDuplicatePartNumber': value.drawingCanDuplicatePartNumber,
        'enabledActiveMultipleWorkflows': value.enabledActiveMultipleWorkflows,
        'obsoletionWorkflow': BTPublishedWorkflowInfoToJSON(value.obsoletionWorkflow),
        'obsoletionWorkflowId': value.obsoletionWorkflowId,
        'partNumberingSchemeId': value.partNumberingSchemeId,
        'pickableWorkflows': value.pickableWorkflows === undefined ? undefined : ((value.pickableWorkflows as Array<any>).map(BTPublishedWorkflowInfoToJSON)),
        'releaseWorkflow': BTPublishedWorkflowInfoToJSON(value.releaseWorkflow),
        'releaseWorkflowId': value.releaseWorkflowId,
        'releaseableApplications': value.releaseableApplications,
        'usingAutoPartNumbering': value.usingAutoPartNumbering,
        'usingManagedWorkflow': value.usingManagedWorkflow,
        'usingThirdPartyPartNumbering': value.usingThirdPartyPartNumbering,
    };
}

