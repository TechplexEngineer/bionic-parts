
export interface BTMetadataObjectInfo {
    href: string
    jsonType: string,
    properties: BTMetadataPropertyInfo[],
    // thumbnail: BTThumbnailInfo
}

export interface BTThumbnailInfo {
    href: string
    id: string
}

export interface BTMetadataPropertyInfo {
    name:                     string;
    value:                    null;
    defaultValue:             null;
    computedPropertyError:    null;
    propertySource:           number;
    validator:                null[];
    required:                 boolean;
    editable:                 boolean;
    valueType:                string;
    propertyId:               string;
    editableInUi:             boolean;
    enumValues:               null;
    schemaId:                 string;
    uiHints:                  null[];
    computedAssemblyProperty: boolean;
    computedProperty:         boolean;
    multivalued:              boolean;
}

// {
//   jsonType: 'metadata-element',
//   elementType: 0,
//   mimeType: 'onshape/partstudio',
//   elementId: 'dfc0766722250803423263f8',
//   properties: [
//     {
//       name: 'Title 2',
//       value: null,
//       defaultValue: null,
//       computedPropertyError: null,
//       propertySource: 0,
//       validator: [Object],
//       required: false,
//       editable: true,
//       valueType: 'STRING',
//       propertyId: '57f3fb8efa3416c06701d617',
//       editableInUi: true,
//       enumValues: null,
//       schemaId: '5877a03ebe4c21163b49dce5',
//       uiHints: [Object],
//       computedAssemblyProperty: false,
//       computedProperty: false,
//       multivalued: false
//     },
//     {
//       name: 'Title 3',
//       value: null,
//       defaultValue: null,
//       computedPropertyError: null,
//       propertySource: 0,
//       validator: [Object],
//       required: false,
//       editable: true,
//       valueType: 'STRING',
//       propertyId: '57f3fb8efa3416c06701d618',
//       editableInUi: true,
//       enumValues: null,
//       schemaId: '5877a03ebe4c21163b49dce5',
//       uiHints: [Object],
//       computedAssemblyProperty: false,
//       computedProperty: false,
//       multivalued: false
//     },
//     {
//       name: 'Name',
//       value: 'Part Studio 1',
//       defaultValue: null,
//       computedPropertyError: null,
//       propertySource: 0,
//       validator: [Object],
//       required: true,
//       editable: false,
//       valueType: 'STRING',
//       propertyId: '57f3fb8efa3416c06701d60d',
//       editableInUi: false,
//       enumValues: null,
//       schemaId: '5877a03ebe4c21163b49dce0',
//       uiHints: [Object],
//       computedAssemblyProperty: false,
//       computedProperty: false,
//       multivalued: false
//     },
//     {
//       name: 'Title 1',
//       value: 'test',
//       defaultValue: null,
//       computedPropertyError: null,
//       propertySource: 0,
//       validator: [Object],
//       required: false,
//       editable: true,
//       valueType: 'STRING',
//       propertyId: '57f3fb8efa3416c06701d616',
//       editableInUi: true,
//       enumValues: null,
//       schemaId: '5877a03ebe4c21163b49dce5',
//       uiHints: [Object],
//       computedAssemblyProperty: false,
//       computedProperty: false,
//       multivalued: false
//     },
//     {
//       name: 'Description',
//       value: null,
//       defaultValue: null,
//       computedPropertyError: null,
//       propertySource: 0,
//       validator: [Object],
//       required: false,
//       editable: true,
//       valueType: 'STRING',
//       propertyId: '57f3fb8efa3416c06701d60e',
//       editableInUi: true,
//       enumValues: null,
//       schemaId: '5877a03ebe4c21163b49dce0',
//       uiHints: [Object],
//       computedAssemblyProperty: false,
//       computedProperty: false,
//       multivalued: false
//     },
//     {
//       name: 'Not revision managed',
//       value: false,
//       defaultValue: false,
//       computedPropertyError: null,
//       propertySource: 6,
//       validator: null,
//       required: false,
//       editable: false,
//       valueType: 'BOOL',
//       propertyId: '57f3fb8efa3416c06701d61d',
//       editableInUi: false,
//       enumValues: null,
//       schemaId: '5877a03ebe4c21163b49dce5',
//       uiHints: null,
//       computedAssemblyProperty: false,
//       computedProperty: false,
//       multivalued: false
//     },
//     {
//       name: 'Category',
//       value: [Array],
//       defaultValue: [Array],
//       computedPropertyError: null,
//       propertySource: 0,
//       validator: null,
//       required: false,
//       editable: false,
//       valueType: 'CATEGORY',
//       propertyId: '57f3fb8efa3416c06701d625',
//       editableInUi: false,
//       enumValues: null,
//       schemaId: '5877a03ebe4c21163b49dce0',
//       uiHints: null,
//       computedAssemblyProperty: false,
//       computedProperty: false,
//       multivalued: false
//     }
//   ],
//   href: 'https://cad.onshape.com/api/metadata/d/da2bc7f409791a8720b27217/v/4e0c481c9919d98863bf1349/e/dfc0766722250803423263f8?configuration=default'
// }