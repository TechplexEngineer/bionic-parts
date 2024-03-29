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
import type { BTOwnerInfo } from './BTOwnerInfo';
import {
    BTOwnerInfoFromJSON,
    BTOwnerInfoFromJSONTyped,
    BTOwnerInfoToJSON,
} from './BTOwnerInfo';
import type { BTUserBasicSummaryInfo } from './BTUserBasicSummaryInfo';
import {
    BTUserBasicSummaryInfoFromJSON,
    BTUserBasicSummaryInfoFromJSONTyped,
    BTUserBasicSummaryInfoToJSON,
} from './BTUserBasicSummaryInfo';
import type { Item } from './Item';
import {
    ItemFromJSON,
    ItemFromJSONTyped,
    ItemToJSON,
} from './Item';

/**
 * 
 * @export
 * @interface BTPublicationInfo
 */
export interface BTPublicationInfo {
    /**
     * 
     * @type {boolean}
     * @memberof BTPublicationInfo
     */
    canMove?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof BTPublicationInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTPublicationInfo
     */
    createdBy?: BTUserBasicSummaryInfo;
    /**
     * 
     * @type {string}
     * @memberof BTPublicationInfo
     */
    defaultWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublicationInfo
     */
    description?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTPublicationInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTPublicationInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPublicationInfo
     */
    isContainer?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPublicationInfo
     */
    isEnterpriseOwned?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPublicationInfo
     */
    isMutable?: boolean;
    /**
     * 
     * @type {Array<Item>}
     * @memberof BTPublicationInfo
     */
    items?: Array<Item>;
    /**
     * 
     * @type {Date}
     * @memberof BTPublicationInfo
     */
    modifiedAt?: Date;
    /**
     * 
     * @type {BTUserBasicSummaryInfo}
     * @memberof BTPublicationInfo
     */
    modifiedBy?: BTUserBasicSummaryInfo;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTPublicationInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublicationInfo
     */
    notes?: string;
    /**
     * 
     * @type {BTOwnerInfo}
     * @memberof BTPublicationInfo
     */
    owner?: BTOwnerInfo;
    /**
     * 
     * @type {string}
     * @memberof BTPublicationInfo
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublicationInfo
     */
    resourceType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublicationInfo
     */
    sequence?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublicationInfo
     */
    treeHref?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPublicationInfo
     */
    unparentHref?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTPublicationInfo
     */
    viewRef?: string;
}

/**
 * Check if a given object implements the BTPublicationInfo interface.
 */
export function instanceOfBTPublicationInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPublicationInfoFromJSON(json: any): BTPublicationInfo {
    return BTPublicationInfoFromJSONTyped(json, false);
}

export function BTPublicationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPublicationInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'canMove': !exists(json, 'canMove') ? undefined : json['canMove'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'createdBy': !exists(json, 'createdBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['createdBy']),
        'defaultWorkspaceId': !exists(json, 'defaultWorkspaceId') ? undefined : json['defaultWorkspaceId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isContainer': !exists(json, 'isContainer') ? undefined : json['isContainer'],
        'isEnterpriseOwned': !exists(json, 'isEnterpriseOwned') ? undefined : json['isEnterpriseOwned'],
        'isMutable': !exists(json, 'isMutable') ? undefined : json['isMutable'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(ItemFromJSON)),
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : BTUserBasicSummaryInfoFromJSON(json['modifiedBy']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'owner': !exists(json, 'owner') ? undefined : BTOwnerInfoFromJSON(json['owner']),
        'projectId': !exists(json, 'projectId') ? undefined : json['projectId'],
        'resourceType': !exists(json, 'resourceType') ? undefined : json['resourceType'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'treeHref': !exists(json, 'treeHref') ? undefined : json['treeHref'],
        'unparentHref': !exists(json, 'unparentHref') ? undefined : json['unparentHref'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
    };
}

export function BTPublicationInfoToJSON(value?: BTPublicationInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'canMove': value.canMove,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'createdBy': BTUserBasicSummaryInfoToJSON(value.createdBy),
        'defaultWorkspaceId': value.defaultWorkspaceId,
        'description': value.description,
        'href': value.href,
        'id': value.id,
        'isContainer': value.isContainer,
        'isEnterpriseOwned': value.isEnterpriseOwned,
        'isMutable': value.isMutable,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(ItemToJSON)),
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
        'modifiedBy': BTUserBasicSummaryInfoToJSON(value.modifiedBy),
        'name': value.name,
        'notes': value.notes,
        'owner': BTOwnerInfoToJSON(value.owner),
        'projectId': value.projectId,
        'resourceType': value.resourceType,
        'sequence': value.sequence,
        'treeHref': value.treeHref,
        'unparentHref': value.unparentHref,
        'viewRef': value.viewRef,
    };
}

