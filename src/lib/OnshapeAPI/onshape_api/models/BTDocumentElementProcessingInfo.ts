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
import type { BTApplicationTargetInfo } from './BTApplicationTargetInfo';
import {
    BTApplicationTargetInfoFromJSON,
    BTApplicationTargetInfoFromJSONTyped,
    BTApplicationTargetInfoToJSON,
} from './BTApplicationTargetInfo';
import type { BTThumbnailInfo } from './BTThumbnailInfo';
import {
    BTThumbnailInfoFromJSON,
    BTThumbnailInfoFromJSONTyped,
    BTThumbnailInfoToJSON,
} from './BTThumbnailInfo';
import type { BTZipFileInfo } from './BTZipFileInfo';
import {
    BTZipFileInfoFromJSON,
    BTZipFileInfoFromJSONTyped,
    BTZipFileInfoToJSON,
} from './BTZipFileInfo';
import type { GBTElementType } from './GBTElementType';
import {
    GBTElementTypeFromJSON,
    GBTElementTypeFromJSONTyped,
    GBTElementTypeToJSON,
} from './GBTElementType';

/**
 * 
 * @export
 * @interface BTDocumentElementProcessingInfo
 */
export interface BTDocumentElementProcessingInfo {
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    accelerationUnits?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    angleUnits?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    angularVelocityUnits?: string;
    /**
     * 
     * @type {BTApplicationTargetInfo}
     * @memberof BTDocumentElementProcessingInfo
     */
    applicationTarget?: BTApplicationTargetInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    areaUnits?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    dataType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentElementProcessingInfo
     */
    deleted?: boolean;
    /**
     * 
     * @type {GBTElementType}
     * @memberof BTDocumentElementProcessingInfo
     */
    elementType?: GBTElementType;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    energyUnits?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    filename?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    forceUnits?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    foreignDataId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    lengthUnits?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    massUnits?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    microversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    momentUnits?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    pressureUnits?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    prettyType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentElementProcessingInfo
     */
    safeToShow?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    specifiedUnit?: string;
    /**
     * 
     * @type {BTThumbnailInfo}
     * @memberof BTDocumentElementProcessingInfo
     */
    thumbnailInfo?: BTThumbnailInfo;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    thumbnails?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    timeUnits?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    translationEventKey?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    translationId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    type?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDocumentElementProcessingInfo
     */
    unupdatable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDocumentElementProcessingInfo
     */
    volumeUnits?: string;
    /**
     * 
     * @type {BTZipFileInfo}
     * @memberof BTDocumentElementProcessingInfo
     */
    zip?: BTZipFileInfo;
}

/**
 * Check if a given object implements the BTDocumentElementProcessingInfo interface.
 */
export function instanceOfBTDocumentElementProcessingInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDocumentElementProcessingInfoFromJSON(json: any): BTDocumentElementProcessingInfo {
    return BTDocumentElementProcessingInfoFromJSONTyped(json, false);
}

export function BTDocumentElementProcessingInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDocumentElementProcessingInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accelerationUnits': !exists(json, 'accelerationUnits') ? undefined : json['accelerationUnits'],
        'angleUnits': !exists(json, 'angleUnits') ? undefined : json['angleUnits'],
        'angularVelocityUnits': !exists(json, 'angularVelocityUnits') ? undefined : json['angularVelocityUnits'],
        'applicationTarget': !exists(json, 'applicationTarget') ? undefined : BTApplicationTargetInfoFromJSON(json['applicationTarget']),
        'areaUnits': !exists(json, 'areaUnits') ? undefined : json['areaUnits'],
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'elementType': !exists(json, 'elementType') ? undefined : GBTElementTypeFromJSON(json['elementType']),
        'energyUnits': !exists(json, 'energyUnits') ? undefined : json['energyUnits'],
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'forceUnits': !exists(json, 'forceUnits') ? undefined : json['forceUnits'],
        'foreignDataId': !exists(json, 'foreignDataId') ? undefined : json['foreignDataId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lengthUnits': !exists(json, 'lengthUnits') ? undefined : json['lengthUnits'],
        'massUnits': !exists(json, 'massUnits') ? undefined : json['massUnits'],
        'microversionId': !exists(json, 'microversionId') ? undefined : json['microversionId'],
        'momentUnits': !exists(json, 'momentUnits') ? undefined : json['momentUnits'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pressureUnits': !exists(json, 'pressureUnits') ? undefined : json['pressureUnits'],
        'prettyType': !exists(json, 'prettyType') ? undefined : json['prettyType'],
        'safeToShow': !exists(json, 'safeToShow') ? undefined : json['safeToShow'],
        'specifiedUnit': !exists(json, 'specifiedUnit') ? undefined : json['specifiedUnit'],
        'thumbnailInfo': !exists(json, 'thumbnailInfo') ? undefined : BTThumbnailInfoFromJSON(json['thumbnailInfo']),
        'thumbnails': !exists(json, 'thumbnails') ? undefined : json['thumbnails'],
        'timeUnits': !exists(json, 'timeUnits') ? undefined : json['timeUnits'],
        'translationEventKey': !exists(json, 'translationEventKey') ? undefined : json['translationEventKey'],
        'translationId': !exists(json, 'translationId') ? undefined : json['translationId'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'unupdatable': !exists(json, 'unupdatable') ? undefined : json['unupdatable'],
        'volumeUnits': !exists(json, 'volumeUnits') ? undefined : json['volumeUnits'],
        'zip': !exists(json, 'zip') ? undefined : BTZipFileInfoFromJSON(json['zip']),
    };
}

export function BTDocumentElementProcessingInfoToJSON(value?: BTDocumentElementProcessingInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accelerationUnits': value.accelerationUnits,
        'angleUnits': value.angleUnits,
        'angularVelocityUnits': value.angularVelocityUnits,
        'applicationTarget': BTApplicationTargetInfoToJSON(value.applicationTarget),
        'areaUnits': value.areaUnits,
        'dataType': value.dataType,
        'deleted': value.deleted,
        'elementType': GBTElementTypeToJSON(value.elementType),
        'energyUnits': value.energyUnits,
        'filename': value.filename,
        'forceUnits': value.forceUnits,
        'foreignDataId': value.foreignDataId,
        'id': value.id,
        'lengthUnits': value.lengthUnits,
        'massUnits': value.massUnits,
        'microversionId': value.microversionId,
        'momentUnits': value.momentUnits,
        'name': value.name,
        'pressureUnits': value.pressureUnits,
        'prettyType': value.prettyType,
        'safeToShow': value.safeToShow,
        'specifiedUnit': value.specifiedUnit,
        'thumbnailInfo': BTThumbnailInfoToJSON(value.thumbnailInfo),
        'thumbnails': value.thumbnails,
        'timeUnits': value.timeUnits,
        'translationEventKey': value.translationEventKey,
        'translationId': value.translationId,
        'type': value.type,
        'unupdatable': value.unupdatable,
        'volumeUnits': value.volumeUnits,
        'zip': BTZipFileInfoToJSON(value.zip),
    };
}
