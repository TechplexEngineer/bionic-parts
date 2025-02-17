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
import type { BTMetadataStateType } from './BTMetadataStateType';
import {
    BTMetadataStateTypeFromJSON,
    BTMetadataStateTypeFromJSONTyped,
    BTMetadataStateTypeToJSON,
} from './BTMetadataStateType';
import type { BTPartAppearanceInfo } from './BTPartAppearanceInfo';
import {
    BTPartAppearanceInfoFromJSON,
    BTPartAppearanceInfoFromJSONTyped,
    BTPartAppearanceInfoToJSON,
} from './BTPartAppearanceInfo';
import type { BTPartMaterialInfo } from './BTPartMaterialInfo';
import {
    BTPartMaterialInfoFromJSON,
    BTPartMaterialInfoFromJSONTyped,
    BTPartMaterialInfoToJSON,
} from './BTPartMaterialInfo';
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';
import type { GBTMeshState } from './GBTMeshState';
import {
    GBTMeshStateFromJSON,
    GBTMeshStateFromJSONTyped,
    GBTMeshStateToJSON,
} from './GBTMeshState';

/**
 * 
 * @export
 * @interface BTPartMetadataInfo
 */
export interface BTPartMetadataInfo {
    /**
     * 
     * @type {BTPartAppearanceInfo}
     * @memberof BTPartMetadataInfo
     */
    appearance?: BTPartAppearanceInfo;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    bodyType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    configurationId?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof BTPartMetadataInfo
     */
    customProperties?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    defaultColorHash?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartMetadataInfo
     */
    isFlattenedBody?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartMetadataInfo
     */
    isHidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTPartMetadataInfo
     */
    isMesh?: boolean;
    /**
     * 
     * @type {BTPartMaterialInfo}
     * @memberof BTPartMetadataInfo
     */
    material?: BTPartMaterialInfo;
    /**
     * 
     * @type {GBTMeshState}
     * @memberof BTPartMetadataInfo
     */
    meshState?: GBTMeshState;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    microversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof BTPartMetadataInfo
     */
    ordinal?: number;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    partIdentity?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    partQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    productLine?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    project?: string;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof BTPartMetadataInfo
     */
    propertySourceTypes?: { [key: string]: number; };
    /**
     * 
     * @type {Array<string>}
     * @memberof BTPartMetadataInfo
     */
    referencingConfiguredPartNodeIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    revision?: string;
    /**
     * 
     * @type {BTMetadataStateType}
     * @memberof BTPartMetadataInfo
     */
    state?: BTMetadataStateType;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    thumbnailConfigurationId?: string;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTPartMetadataInfo
     */
    thumbnailInfo?: BTThumbnailInfo;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    title1?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    title2?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    title3?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    unflattenedPartId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTPartMetadataInfo
     */
    vendor?: string;
}

/**
 * Check if a given object implements the BTPartMetadataInfo interface.
 */
export function instanceOfBTPartMetadataInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPartMetadataInfoFromJSON(json: any): BTPartMetadataInfo {
    return BTPartMetadataInfoFromJSONTyped(json, false);
}

export function BTPartMetadataInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPartMetadataInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appearance': !exists(json, 'appearance') ? undefined : BTPartAppearanceInfoFromJSON(json['appearance']),
        'bodyType': !exists(json, 'bodyType') ? undefined : json['bodyType'],
        'configurationId': !exists(json, 'configurationId') ? undefined : json['configurationId'],
        'customProperties': !exists(json, 'customProperties') ? undefined : json['customProperties'],
        'defaultColorHash': !exists(json, 'defaultColorHash') ? undefined : json['defaultColorHash'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isFlattenedBody': !exists(json, 'isFlattenedBody') ? undefined : json['isFlattenedBody'],
        'isHidden': !exists(json, 'isHidden') ? undefined : json['isHidden'],
        'isMesh': !exists(json, 'isMesh') ? undefined : json['isMesh'],
        'material': !exists(json, 'material') ? undefined : BTPartMaterialInfoFromJSON(json['material']),
        'meshState': !exists(json, 'meshState') ? undefined : GBTMeshStateFromJSON(json['meshState']),
        'microversionId': !exists(json, 'microversionId') ? undefined : json['microversionId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ordinal': !exists(json, 'ordinal') ? undefined : json['ordinal'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partIdentity': !exists(json, 'partIdentity') ? undefined : json['partIdentity'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'partQuery': !exists(json, 'partQuery') ? undefined : json['partQuery'],
        'productLine': !exists(json, 'productLine') ? undefined : json['productLine'],
        'project': !exists(json, 'project') ? undefined : json['project'],
        'propertySourceTypes': !exists(json, 'propertySourceTypes') ? undefined : json['propertySourceTypes'],
        'referencingConfiguredPartNodeIds': !exists(json, 'referencingConfiguredPartNodeIds') ? undefined : json['referencingConfiguredPartNodeIds'],
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'state': !exists(json, 'state') ? undefined : BTMetadataStateTypeFromJSON(json['state']),
        'thumbnailConfigurationId': !exists(json, 'thumbnailConfigurationId') ? undefined : json['thumbnailConfigurationId'],
        'thumbnailInfo': !exists(json, 'thumbnailInfo') ? undefined : BTThumbnailInfoFromJSON(json['thumbnailInfo']),
        'title1': !exists(json, 'title1') ? undefined : json['title1'],
        'title2': !exists(json, 'title2') ? undefined : json['title2'],
        'title3': !exists(json, 'title3') ? undefined : json['title3'],
        'unflattenedPartId': !exists(json, 'unflattenedPartId') ? undefined : json['unflattenedPartId'],
        'vendor': !exists(json, 'vendor') ? undefined : json['vendor'],
    };
}

export function BTPartMetadataInfoToJSON(value?: BTPartMetadataInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appearance': BTPartAppearanceInfoToJSON(value.appearance),
        'bodyType': value.bodyType,
        'configurationId': value.configurationId,
        'customProperties': value.customProperties,
        'defaultColorHash': value.defaultColorHash,
        'description': value.description,
        'elementId': value.elementId,
        'href': value.href,
        'id': value.id,
        'isFlattenedBody': value.isFlattenedBody,
        'isHidden': value.isHidden,
        'isMesh': value.isMesh,
        'material': BTPartMaterialInfoToJSON(value.material),
        'meshState': GBTMeshStateToJSON(value.meshState),
        'microversionId': value.microversionId,
        'name': value.name,
        'ordinal': value.ordinal,
        'partId': value.partId,
        'partIdentity': value.partIdentity,
        'partNumber': value.partNumber,
        'partQuery': value.partQuery,
        'productLine': value.productLine,
        'project': value.project,
        'propertySourceTypes': value.propertySourceTypes,
        'referencingConfiguredPartNodeIds': value.referencingConfiguredPartNodeIds,
        'revision': value.revision,
        'state': BTMetadataStateTypeToJSON(value.state),
        'thumbnailConfigurationId': value.thumbnailConfigurationId,
        'thumbnailInfo': BTThumbnailInfoToJSON(value.thumbnailInfo),
        'title1': value.title1,
        'title2': value.title2,
        'title3': value.title3,
        'unflattenedPartId': value.unflattenedPartId,
        'vendor': value.vendor,
    };
}

