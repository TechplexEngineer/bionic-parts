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
import type { BTDrawingHiddenLineOption } from './BTDrawingHiddenLineOption';
import {
    BTDrawingHiddenLineOptionFromJSON,
    BTDrawingHiddenLineOptionFromJSONTyped,
    BTDrawingHiddenLineOptionToJSON,
} from './BTDrawingHiddenLineOption';
import type { BTElementLocationParams } from './BTElementLocationParams';
import {
    BTElementLocationParamsFromJSON,
    BTElementLocationParamsFromJSONTyped,
    BTElementLocationParamsToJSON,
} from './BTElementLocationParams';
import type { GBTAppElementReferenceType } from './GBTAppElementReferenceType';
import {
    GBTAppElementReferenceTypeFromJSON,
    GBTAppElementReferenceTypeFromJSONTyped,
    GBTAppElementReferenceTypeToJSON,
} from './GBTAppElementReferenceType';

/**
 * 
 * @export
 * @interface BTDrawingParams
 */
export interface BTDrawingParams {
    /**
     * 
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    border?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    computeIntersection?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    decimalSeparator?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    displayStateId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    documentMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    drawingName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    elementConfiguration?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    elementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    elementMicroversionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    explosionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    externalDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    externalDocumentVersionId?: string;
    /**
     * 
     * @type {BTDrawingHiddenLineOption}
     * @memberof BTDrawingParams
     */
    hiddenLines?: BTDrawingHiddenLineOption;
    /**
     * 
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    includeSurfaces?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    includeWires?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    isFlattenedPart?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    isSketchOnly?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    isSurface?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    language?: string;
    /**
     * 
     * @type {BTElementLocationParams}
     * @memberof BTDrawingParams
     */
    location?: BTElementLocationParams;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    modelType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    namedPositionId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTDrawingParams
     */
    numberHorizontalZones?: number;
    /**
     * 
     * @type {number}
     * @memberof BTDrawingParams
     */
    numberVerticalZones?: number;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    partId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    partNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    partQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    projection?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    pureSketch?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    qualityOption?: string;
    /**
     * 
     * @type {number}
     * @memberof BTDrawingParams
     */
    referenceType?: number;
    /**
     * 
     * @type {GBTAppElementReferenceType}
     * @memberof BTDrawingParams
     */
    referenceTypeEnum?: GBTAppElementReferenceType;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    revision?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    showCutGeomOnly?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    simplificationOption?: string;
    /**
     * 
     * @type {number}
     * @memberof BTDrawingParams
     */
    simplificationThreshold?: number;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    size?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTDrawingParams
     */
    sketchIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    standard?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    startZones?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTDrawingParams
     */
    templateArgs?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    templateDocumentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    templateElementId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    templateName?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    templateVersionId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    templateWorkspaceId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BTDrawingParams
     */
    titleblock?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    units?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    views?: string;
    /**
     * 
     * @type {string}
     * @memberof BTDrawingParams
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTDrawingParams interface.
 */
export function instanceOfBTDrawingParams(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTDrawingParamsFromJSON(json: any): BTDrawingParams {
    return BTDrawingParamsFromJSONTyped(json, false);
}

export function BTDrawingParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTDrawingParams {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'border': !exists(json, 'border') ? undefined : json['border'],
        'computeIntersection': !exists(json, 'computeIntersection') ? undefined : json['computeIntersection'],
        'decimalSeparator': !exists(json, 'decimalSeparator') ? undefined : json['decimalSeparator'],
        'displayStateId': !exists(json, 'displayStateId') ? undefined : json['displayStateId'],
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'documentMicroversionId': !exists(json, 'documentMicroversionId') ? undefined : json['documentMicroversionId'],
        'drawingName': !exists(json, 'drawingName') ? undefined : json['drawingName'],
        'elementConfiguration': !exists(json, 'elementConfiguration') ? undefined : json['elementConfiguration'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'elementMicroversionId': !exists(json, 'elementMicroversionId') ? undefined : json['elementMicroversionId'],
        'explosionId': !exists(json, 'explosionId') ? undefined : json['explosionId'],
        'externalDocumentId': !exists(json, 'externalDocumentId') ? undefined : json['externalDocumentId'],
        'externalDocumentVersionId': !exists(json, 'externalDocumentVersionId') ? undefined : json['externalDocumentVersionId'],
        'hiddenLines': !exists(json, 'hiddenLines') ? undefined : BTDrawingHiddenLineOptionFromJSON(json['hiddenLines']),
        'includeSurfaces': !exists(json, 'includeSurfaces') ? undefined : json['includeSurfaces'],
        'includeWires': !exists(json, 'includeWires') ? undefined : json['includeWires'],
        'isFlattenedPart': !exists(json, 'isFlattenedPart') ? undefined : json['isFlattenedPart'],
        'isSketchOnly': !exists(json, 'isSketchOnly') ? undefined : json['isSketchOnly'],
        'isSurface': !exists(json, 'isSurface') ? undefined : json['isSurface'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'location': !exists(json, 'location') ? undefined : BTElementLocationParamsFromJSON(json['location']),
        'modelType': !exists(json, 'modelType') ? undefined : json['modelType'],
        'namedPositionId': !exists(json, 'namedPositionId') ? undefined : json['namedPositionId'],
        'numberHorizontalZones': !exists(json, 'numberHorizontalZones') ? undefined : json['numberHorizontalZones'],
        'numberVerticalZones': !exists(json, 'numberVerticalZones') ? undefined : json['numberVerticalZones'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
        'partNumber': !exists(json, 'partNumber') ? undefined : json['partNumber'],
        'partQuery': !exists(json, 'partQuery') ? undefined : json['partQuery'],
        'projection': !exists(json, 'projection') ? undefined : json['projection'],
        'pureSketch': !exists(json, 'pureSketch') ? undefined : json['pureSketch'],
        'qualityOption': !exists(json, 'qualityOption') ? undefined : json['qualityOption'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceTypeEnum': !exists(json, 'referenceTypeEnum') ? undefined : GBTAppElementReferenceTypeFromJSON(json['referenceTypeEnum']),
        'revision': !exists(json, 'revision') ? undefined : json['revision'],
        'showCutGeomOnly': !exists(json, 'showCutGeomOnly') ? undefined : json['showCutGeomOnly'],
        'simplificationOption': !exists(json, 'simplificationOption') ? undefined : json['simplificationOption'],
        'simplificationThreshold': !exists(json, 'simplificationThreshold') ? undefined : json['simplificationThreshold'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'sketchIds': !exists(json, 'sketchIds') ? undefined : json['sketchIds'],
        'standard': !exists(json, 'standard') ? undefined : json['standard'],
        'startZones': !exists(json, 'startZones') ? undefined : json['startZones'],
        'templateArgs': !exists(json, 'templateArgs') ? undefined : json['templateArgs'],
        'templateDocumentId': !exists(json, 'templateDocumentId') ? undefined : json['templateDocumentId'],
        'templateElementId': !exists(json, 'templateElementId') ? undefined : json['templateElementId'],
        'templateName': !exists(json, 'templateName') ? undefined : json['templateName'],
        'templateVersionId': !exists(json, 'templateVersionId') ? undefined : json['templateVersionId'],
        'templateWorkspaceId': !exists(json, 'templateWorkspaceId') ? undefined : json['templateWorkspaceId'],
        'titleblock': !exists(json, 'titleblock') ? undefined : json['titleblock'],
        'units': !exists(json, 'units') ? undefined : json['units'],
        'views': !exists(json, 'views') ? undefined : json['views'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTDrawingParamsToJSON(value?: BTDrawingParams | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'border': value.border,
        'computeIntersection': value.computeIntersection,
        'decimalSeparator': value.decimalSeparator,
        'displayStateId': value.displayStateId,
        'documentId': value.documentId,
        'documentMicroversionId': value.documentMicroversionId,
        'drawingName': value.drawingName,
        'elementConfiguration': value.elementConfiguration,
        'elementId': value.elementId,
        'elementMicroversionId': value.elementMicroversionId,
        'explosionId': value.explosionId,
        'externalDocumentId': value.externalDocumentId,
        'externalDocumentVersionId': value.externalDocumentVersionId,
        'hiddenLines': BTDrawingHiddenLineOptionToJSON(value.hiddenLines),
        'includeSurfaces': value.includeSurfaces,
        'includeWires': value.includeWires,
        'isFlattenedPart': value.isFlattenedPart,
        'isSketchOnly': value.isSketchOnly,
        'isSurface': value.isSurface,
        'language': value.language,
        'location': BTElementLocationParamsToJSON(value.location),
        'modelType': value.modelType,
        'namedPositionId': value.namedPositionId,
        'numberHorizontalZones': value.numberHorizontalZones,
        'numberVerticalZones': value.numberVerticalZones,
        'partId': value.partId,
        'partNumber': value.partNumber,
        'partQuery': value.partQuery,
        'projection': value.projection,
        'pureSketch': value.pureSketch,
        'qualityOption': value.qualityOption,
        'referenceType': value.referenceType,
        'referenceTypeEnum': GBTAppElementReferenceTypeToJSON(value.referenceTypeEnum),
        'revision': value.revision,
        'showCutGeomOnly': value.showCutGeomOnly,
        'simplificationOption': value.simplificationOption,
        'simplificationThreshold': value.simplificationThreshold,
        'size': value.size,
        'sketchIds': value.sketchIds,
        'standard': value.standard,
        'startZones': value.startZones,
        'templateArgs': value.templateArgs,
        'templateDocumentId': value.templateDocumentId,
        'templateElementId': value.templateElementId,
        'templateName': value.templateName,
        'templateVersionId': value.templateVersionId,
        'templateWorkspaceId': value.templateWorkspaceId,
        'titleblock': value.titleblock,
        'units': value.units,
        'views': value.views,
        'workspaceId': value.workspaceId,
    };
}
