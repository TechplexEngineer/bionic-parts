import { describe, it, expect } from "vitest";
import { getPartState } from "./partState";
import type { BTPartMetadataInfo } from "$lib/OnshapeAPI";

const v1: BTPartMetadataInfo[] = [
    {
        "appearance": {
            "color": {
                "blue": 237,
                "green": 207,
                "red": 157
            },
            "isGenerated": true,
            "opacity": 255
        },
        "bodyType": "solid",
        "defaultColorHash": "FNJfHcmqKy37VnB_0_0",
        "elementId": "dfc0766722250803423263f8",
        "id": "64675f1d9fedf37c8d9a0473",
        "isFlattenedBody": false,
        "isHidden": false,
        "isMesh": false,
        "meshState": "NO_MESH",
        "microversionId": "e4f4822d26f0d6036d2de24e",
        "name": "Part 1",
        "ordinal": 0,
        "partId": "JHD",
        "partQuery": "query=qCompressed(1.0,\"&1bb$eJx9UEuPgjAQ/jOzxzXy8nHkUZFVQVvirifSQpFGpQglyr9fkGQvm3ic+Wa+14djwaHldbeziKZDJhp6Y+LcUiVk6VFFbW2n/0firuJEMyDCgR+E9jbx0B6FHgrdE1mCrMVZlPTa2KY77Ykp8FIJ1Q1fDgX0NxATkOcjwqAQjZL1uFyAi5EdB1HYA7Li9UsyyBwdgszWiKZNZrBiOb74q7RQ7JlbaTJ9iJpHVa9+H+K8iDIgGxS76wSFcRCfCIfmwlVajAaCjKQ9kTgcHz9+vd/GrWBSKXkbPGMTW3iG53iBKWY4xRn51PSJAUpWb3ATrjxXbw4s6LspFDbdWR/eibzTeOSyMdgSVuFXvk5v901nzI+lk0xlhZ6qbjOOWd8k+Ub7OBkefwGQ5I+j\",id);",
        "propertySourceTypes": {
            "57f3fb8efa3416c06701d60d": 0
        },
        "state": "IN_PROGRESS",
        "thumbnailInfo": {
            "href": "https://cad.onshape.com/api/thumbnails/454dc29333be2ccea095ae72d0000b65e8ed6ed5?t=1684496166409",
            "id": "454dc29333be2ccea095ae72d0000b65e8ed6ed5",
            "secondarySizes": [],
            "sizes": [
                {
                    "href": "https://cad.onshape.com/api/thumbnails/454dc29333be2ccea095ae72d0000b65e8ed6ed5/s/300x170",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x170",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/454dc29333be2ccea095ae72d0000b65e8ed6ed5/s/70x40",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "70x40",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/454dc29333be2ccea095ae72d0000b65e8ed6ed5/s/600x340",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "600x340",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/454dc29333be2ccea095ae72d0000b65e8ed6ed5/s/300x300",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x300",
                    "uniqueId": "",
                    "viewOrientation": ""
                }
            ]
        }
    },
    {
        "appearance": {
            "color": {
                "blue": 165,
                "green": 165,
                "red": 165
            },
            "isGenerated": true,
            "opacity": 255
        },
        "bodyType": "solid",
        "customProperties": {
            "57f3fb8efa3416c06701d611": "0"
        },
        "defaultColorHash": "FNJfHcmqKy37VnB_0_1",
        "elementId": "dfc0766722250803423263f8",
        "id": "64675f1d9fedf37c8d9a0474",
        "isFlattenedBody": false,
        "isHidden": false,
        "isMesh": false,
        "meshState": "NO_MESH",
        "microversionId": "e4f4822d26f0d6036d2de24e",
        "name": "Part 2",
        "ordinal": 1,
        "partId": "JHH",
        "partQuery": "query=qCompressed(1.0,\"&1bb$eJx9UMlugzAQ/ZnpsRFrliOLk9A0kNooESdkYxOsJJiAo5a/LwSpl0o5zryZt735Lnw9RNvvXWJawGVHb0yeH1RLVYdUU8/cW/+RtG8EMW1IcLSJYu8zD9EBxSGKg4ysQLXyLGt67TwnMAZiCqLWUvfjl08B/Q3EARRuEGFQyU6rdlouIcDIS6MkHgDViPYpGXHfgoh7JjHN2RzWrMSXzbqoNPsp3SI3vmUrkmZQv49xnkQcyA6lwTZHcRqlGRHQXYQuqslAxEkxEDE7O6Q74+Qel3emtFa30TN2sIvneIGXmGKGC8zJu2nNbNCqeYE7cBWlfnHgwtBNpbETzIfwfhJm01HApmArWMcf5ba43Xe9vTjWfm6oBv3o9sEFZkOT5IQOaT4+/gIAmo7V\",id);",
        "propertySourceTypes": {
            "57f3fb8efa3416c06701d60d": 0,
            "57f3fb8efa3416c06701d611": 3
        },
        "state": "IN_PROGRESS",
        "thumbnailInfo": {
            "href": "https://cad.onshape.com/api/thumbnails/c06bf16086a1a2173a605f2b89cb8668dcb14ed4?t=1684496166432",
            "id": "c06bf16086a1a2173a605f2b89cb8668dcb14ed4",
            "secondarySizes": [],
            "sizes": [
                {
                    "href": "https://cad.onshape.com/api/thumbnails/c06bf16086a1a2173a605f2b89cb8668dcb14ed4/s/600x340",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "600x340",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/c06bf16086a1a2173a605f2b89cb8668dcb14ed4/s/70x40",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "70x40",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/c06bf16086a1a2173a605f2b89cb8668dcb14ed4/s/300x170",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x170",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/c06bf16086a1a2173a605f2b89cb8668dcb14ed4/s/300x300",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x300",
                    "uniqueId": "",
                    "viewOrientation": ""
                }
            ]
        }
    }
]
;

const v2 = [
    {
        "appearance": {
            "color": {
                "blue": 237,
                "green": 207,
                "red": 157
            },
            "isGenerated": true,
            "opacity": 255
        },
        "bodyType": "solid",
        "customProperties": {
            "57f3fb8efa3416c06701d611": "0"
        },
        "defaultColorHash": "FNJfHcmqKy37VnB_0_0",
        "elementId": "dfc0766722250803423263f8",
        "id": "64675f429fedf37c8d9a04ba",
        "isFlattenedBody": false,
        "isHidden": false,
        "isMesh": false,
        "meshState": "NO_MESH",
        "microversionId": "86777dd24dddeb23554ba31e",
        "name": "Part 1",
        "ordinal": 0,
        "partId": "JHD",
        "partQuery": "query=qCompressed(1.0,\"&1bb$eJx9UEuPgjAQ/jOzxzXy8nHkUZFVQVvirifSQpFGpQglyr9fkGQvm3ic+Wa+14djwaHldbeziKZDJhp6Y+LcUiVk6VFFbW2n/0firuJEMyDCgR+E9jbx0B6FHgrdE1mCrMVZlPTa2KY77Ykp8FIJ1Q1fDgX0NxATkOcjwqAQjZL1uFyAi5EdB1HYA7Li9UsyyBwdgszWiKZNZrBiOb74q7RQ7JlbaTJ9iJpHVa9+H+K8iDIgGxS76wSFcRCfCIfmwlVajAaCjKQ9kTgcHz9+vd/GrWBSKXkbPGMTW3iG53iBKWY4xRn51PSJAUpWb3ATrjxXbw4s6LspFDbdWR/eibzTeOSyMdgSVuFXvk5v901nzI+lk0xlhZ6qbjOOWd8k+Ub7OBkefwGQ5I+j\",id);",
        "propertySourceTypes": {
            "57f3fb8efa3416c06701d60d": 0,
            "57f3fb8efa3416c06701d611": 3
        },
        "state": "IN_PROGRESS",
        "thumbnailInfo": {
            "href": "https://cad.onshape.com/api/thumbnails/f60a57cb56e162081c3937ea6d3c3df0a2516d8d?t=1684496196956",
            "id": "f60a57cb56e162081c3937ea6d3c3df0a2516d8d",
            "secondarySizes": [],
            "sizes": [
                {
                    "href": "https://cad.onshape.com/api/thumbnails/f60a57cb56e162081c3937ea6d3c3df0a2516d8d/s/600x340",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "600x340",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/f60a57cb56e162081c3937ea6d3c3df0a2516d8d/s/300x170",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x170",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/f60a57cb56e162081c3937ea6d3c3df0a2516d8d/s/300x300",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x300",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/f60a57cb56e162081c3937ea6d3c3df0a2516d8d/s/70x40",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "70x40",
                    "uniqueId": "",
                    "viewOrientation": ""
                }
            ]
        }
    },
    {
        "appearance": {
            "color": {
                "blue": 165,
                "green": 165,
                "red": 165
            },
            "isGenerated": true,
            "opacity": 255
        },
        "bodyType": "solid",
        "defaultColorHash": "FNJfHcmqKy37VnB_0_1",
        "elementId": "dfc0766722250803423263f8",
        "id": "64675f429fedf37c8d9a04bb",
        "isFlattenedBody": false,
        "isHidden": false,
        "isMesh": false,
        "meshState": "NO_MESH",
        "microversionId": "86777dd24dddeb23554ba31e",
        "name": "Part 2",
        "ordinal": 1,
        "partId": "JHH",
        "partQuery": "query=qCompressed(1.0,\"&1bb$eJx9UMlugzAQ/ZnpsRFrliOLk9A0kNooESdkYxOsJJiAo5a/LwSpl0o5zryZt735Lnw9RNvvXWJawGVHb0yeH1RLVYdUU8/cW/+RtG8EMW1IcLSJYu8zD9EBxSGKg4ysQLXyLGt67TwnMAZiCqLWUvfjl08B/Q3EARRuEGFQyU6rdlouIcDIS6MkHgDViPYpGXHfgoh7JjHN2RzWrMSXzbqoNPsp3SI3vmUrkmZQv49xnkQcyA6lwTZHcRqlGRHQXYQuqslAxEkxEDE7O6Q74+Qel3emtFa30TN2sIvneIGXmGKGC8zJu2nNbNCqeYE7cBWlfnHgwtBNpbETzIfwfhJm01HApmArWMcf5ba43Xe9vTjWfm6oBv3o9sEFZkOT5IQOaT4+/gIAmo7V\",id);",
        "propertySourceTypes": {
            "57f3fb8efa3416c06701d60d": 0
        },
        "state": "IN_PROGRESS",
        "thumbnailInfo": {
            "href": "https://cad.onshape.com/api/thumbnails/aee924d684b15d13548ee099895cdd7443532c4d?t=1684496196970",
            "id": "aee924d684b15d13548ee099895cdd7443532c4d",
            "secondarySizes": [],
            "sizes": [
                {
                    "href": "https://cad.onshape.com/api/thumbnails/aee924d684b15d13548ee099895cdd7443532c4d/s/300x170",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x170",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/aee924d684b15d13548ee099895cdd7443532c4d/s/300x300",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x300",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/aee924d684b15d13548ee099895cdd7443532c4d/s/70x40",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "70x40",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/aee924d684b15d13548ee099895cdd7443532c4d/s/600x340",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "600x340",
                    "uniqueId": "",
                    "viewOrientation": ""
                }
            ]
        }
    }
];

const v4 = [
    {
        "appearance": {
            "color": {
                "blue": 237,
                "green": 207,
                "red": 157
            },
            "isGenerated": true,
            "opacity": 255
        },
        "bodyType": "solid",
        "configurationId": "QYJAAAA=",
        "defaultColorHash": "FNJfHcmqKy37VnB_0_0",
        "elementId": "dfc0766722250803423263f8",
        "id": "6468bbf5b8abdb037e7c3fbd",
        "isFlattenedBody": false,
        "isHidden": false,
        "isMesh": false,
        "meshState": "NO_MESH",
        "microversionId": "3055091c5955351b9cc8e9d2",
        "name": "Part 1",
        "ordinal": 0,
        "partId": "JHD",
        "partQuery": "query=qCompressed(1.0,\"&1bb$eJx9UEuPgjAQ/jOzxzXy8nHkUZFVQVvirifSQpFGpQglyr9fkGQvm3ic+Wa+14djwaHldbeziKZDJhp6Y+LcUiVk6VFFbW2n/0firuJEMyDCgR+E9jbx0B6FHgrdE1mCrMVZlPTa2KY77Ykp8FIJ1Q1fDgX0NxATkOcjwqAQjZL1uFyAi5EdB1HYA7Li9UsyyBwdgszWiKZNZrBiOb74q7RQ7JlbaTJ9iJpHVa9+H+K8iDIgGxS76wSFcRCfCIfmwlVajAaCjKQ9kTgcHz9+vd/GrWBSKXkbPGMTW3iG53iBKWY4xRn51PSJAUpWb3ATrjxXbw4s6LspFDbdWR/eibzTeOSyMdgSVuFXvk5v901nzI+lk0xlhZ6qbjOOWd8k+Ub7OBkefwGQ5I+j\",id);",
        "propertySourceTypes": {
            "57f3fb8efa3416c06701d60d": 0
        },
        "state": "IN_PROGRESS",
        "thumbnailConfigurationId": "config_default",
        "thumbnailInfo": {
            "href": "https://cad.onshape.com/api/thumbnails/ef4e94b3b83d429510cfa2bbe1c1b3f6cdb4227a?t=1684585464023",
            "id": "ef4e94b3b83d429510cfa2bbe1c1b3f6cdb4227a",
            "secondarySizes": [],
            "sizes": [
                {
                    "href": "https://cad.onshape.com/api/thumbnails/ef4e94b3b83d429510cfa2bbe1c1b3f6cdb4227a/s/600x340",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "600x340",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/ef4e94b3b83d429510cfa2bbe1c1b3f6cdb4227a/s/300x170",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x170",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/ef4e94b3b83d429510cfa2bbe1c1b3f6cdb4227a/s/300x300",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x300",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/ef4e94b3b83d429510cfa2bbe1c1b3f6cdb4227a/s/70x40",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "70x40",
                    "uniqueId": "",
                    "viewOrientation": ""
                }
            ]
        }
    },
    {
        "appearance": {
            "color": {
                "blue": 165,
                "green": 165,
                "red": 165
            },
            "isGenerated": true,
            "opacity": 255
        },
        "bodyType": "solid",
        "configurationId": "QYJAAAA=",
        "defaultColorHash": "FNJfHcmqKy37VnB_0_1",
        "elementId": "dfc0766722250803423263f8",
        "id": "6468bbf5b8abdb037e7c3fbe",
        "isFlattenedBody": false,
        "isHidden": false,
        "isMesh": false,
        "meshState": "NO_MESH",
        "microversionId": "3055091c5955351b9cc8e9d2",
        "name": "Part 2",
        "ordinal": 1,
        "partId": "JHH",
        "partQuery": "query=qCompressed(1.0,\"&1bb$eJx9UMlugzAQ/ZnpsRFrliOLk9A0kNooESdkYxOsJJiAo5a/LwSpl0o5zryZt735Lnw9RNvvXWJawGVHb0yeH1RLVYdUU8/cW/+RtG8EMW1IcLSJYu8zD9EBxSGKg4ysQLXyLGt67TwnMAZiCqLWUvfjl08B/Q3EARRuEGFQyU6rdlouIcDIS6MkHgDViPYpGXHfgoh7JjHN2RzWrMSXzbqoNPsp3SI3vmUrkmZQv49xnkQcyA6lwTZHcRqlGRHQXYQuqslAxEkxEDE7O6Q74+Qel3emtFa30TN2sIvneIGXmGKGC8zJu2nNbNCqeYE7cBWlfnHgwtBNpbETzIfwfhJm01HApmArWMcf5ba43Xe9vTjWfm6oBv3o9sEFZkOT5IQOaT4+/gIAmo7V\",id);",
        "propertySourceTypes": {
            "57f3fb8efa3416c06701d60d": 0
        },
        "state": "IN_PROGRESS",
        "thumbnailConfigurationId": "config_default",
        "thumbnailInfo": {
            "href": "https://cad.onshape.com/api/thumbnails/36208ceeceac2880479aab2825c8c2b045b87ef7?t=1684585464034",
            "id": "36208ceeceac2880479aab2825c8c2b045b87ef7",
            "secondarySizes": [],
            "sizes": [
                {
                    "href": "https://cad.onshape.com/api/thumbnails/36208ceeceac2880479aab2825c8c2b045b87ef7/s/300x170",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x170",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/36208ceeceac2880479aab2825c8c2b045b87ef7/s/70x40",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "70x40",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/36208ceeceac2880479aab2825c8c2b045b87ef7/s/300x300",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x300",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/36208ceeceac2880479aab2825c8c2b045b87ef7/s/600x340",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "600x340",
                    "uniqueId": "",
                    "viewOrientation": ""
                }
            ]
        }
    }
]
;

const v5 = [
    {
        "appearance": {
            "color": {
                "blue": 237,
                "green": 207,
                "red": 157
            },
            "isGenerated": true,
            "opacity": 255
        },
        "bodyType": "solid",
        "configurationId": "QYJAAAA=",
        "defaultColorHash": "FNJfHcmqKy37VnB_0_0",
        "elementId": "dfc0766722250803423263f8",
        "id": "6470ac985299a6253946c180",
        "isFlattenedBody": false,
        "isHidden": false,
        "isMesh": false,
        "material": {
            "displayName": "Aluminum Plate - 3/16\"",
            "id": "7QmnNjfX0Agj9CjD",
            "libraryName": "4909 Material Library",
            "libraryReference": {
                "documentId": "c02fddca533424d3bee9e7b7",
                "elementId": "42498b7a309bec9a4bdd7379",
                "elementMicroversionId": "bf8eea6ebf2d28950b08a826",
                "versionId": "07947104fd9ba8b7850b50b2"
            },
            "properties": [
                {
                    "category": "Physical",
                    "description": "Density",
                    "displayName": "Density",
                    "name": "DENS",
                    "type": "REAL",
                    "units": "kg/m^3",
                    "value": "2700"
                }
            ]
        },
        "meshState": "NO_MESH",
        "microversionId": "94a7837addcc014c17917181",
        "name": "Part 1",
        "ordinal": 0,
        "partId": "JHD",
        "partQuery": "query=qCompressed(1.0,\"&1bb$eJx9UEuPgjAQ/jOzxzXy8nHkUZFVQVvirifSQpFGpQglyr9fkGQvm3ic+Wa+14djwaHldbeziKZDJhp6Y+LcUiVk6VFFbW2n/0firuJEMyDCgR+E9jbx0B6FHgrdE1mCrMVZlPTa2KY77Ykp8FIJ1Q1fDgX0NxATkOcjwqAQjZL1uFyAi5EdB1HYA7Li9UsyyBwdgszWiKZNZrBiOb74q7RQ7JlbaTJ9iJpHVa9+H+K8iDIgGxS76wSFcRCfCIfmwlVajAaCjKQ9kTgcHz9+vd/GrWBSKXkbPGMTW3iG53iBKWY4xRn51PSJAUpWb3ATrjxXbw4s6LspFDbdWR/eibzTeOSyMdgSVuFXvk5v901nzI+lk0xlhZ6qbjOOWd8k+Ub7OBkefwGQ5I+j\",id);",
        "propertySourceTypes": {
            "57f3fb8efa3416c06701d615": 3,
            "57f3fb8efa3416c06701d60d": 0
        },
        "state": "IN_PROGRESS",
        "thumbnailConfigurationId": "config_default",
        "thumbnailInfo": {
            "href": "https://cad.onshape.com/api/thumbnails/b56d568d41601e903c1107b0ac98d8fc40f91d87?t=1685105818907",
            "id": "b56d568d41601e903c1107b0ac98d8fc40f91d87",
            "secondarySizes": [],
            "sizes": [
                {
                    "href": "https://cad.onshape.com/api/thumbnails/b56d568d41601e903c1107b0ac98d8fc40f91d87/s/300x170",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x170",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/b56d568d41601e903c1107b0ac98d8fc40f91d87/s/600x340",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "600x340",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/b56d568d41601e903c1107b0ac98d8fc40f91d87/s/300x300",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x300",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/b56d568d41601e903c1107b0ac98d8fc40f91d87/s/70x40",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "70x40",
                    "uniqueId": "",
                    "viewOrientation": ""
                }
            ]
        }
    },
    {
        "appearance": {
            "color": {
                "blue": 165,
                "green": 165,
                "red": 165
            },
            "isGenerated": true,
            "opacity": 255
        },
        "bodyType": "solid",
        "configurationId": "QYJAAAA=",
        "defaultColorHash": "FNJfHcmqKy37VnB_0_1",
        "elementId": "dfc0766722250803423263f8",
        "id": "6470ac985299a6253946c181",
        "isFlattenedBody": false,
        "isHidden": false,
        "isMesh": false,
        "material": {
            "displayName": "Aluminum Plate - 3/16\"",
            "id": "7QmnNjfX0Agj9CjD",
            "libraryName": "4909 Material Library",
            "libraryReference": {
                "documentId": "c02fddca533424d3bee9e7b7",
                "elementId": "42498b7a309bec9a4bdd7379",
                "elementMicroversionId": "bf8eea6ebf2d28950b08a826",
                "versionId": "07947104fd9ba8b7850b50b2"
            },
            "properties": [
                {
                    "category": "Physical",
                    "description": "Density",
                    "displayName": "Density",
                    "name": "DENS",
                    "type": "REAL",
                    "units": "kg/m^3",
                    "value": "2700"
                }
            ]
        },
        "meshState": "NO_MESH",
        "microversionId": "94a7837addcc014c17917181",
        "name": "Part 2",
        "ordinal": 1,
        "partId": "JHH",
        "partQuery": "query=qCompressed(1.0,\"&1bb$eJx9UMlugzAQ/ZnpsRFrliOLk9A0kNooESdkYxOsJJiAo5a/LwSpl0o5zryZt735Lnw9RNvvXWJawGVHb0yeH1RLVYdUU8/cW/+RtG8EMW1IcLSJYu8zD9EBxSGKg4ysQLXyLGt67TwnMAZiCqLWUvfjl08B/Q3EARRuEGFQyU6rdlouIcDIS6MkHgDViPYpGXHfgoh7JjHN2RzWrMSXzbqoNPsp3SI3vmUrkmZQv49xnkQcyA6lwTZHcRqlGRHQXYQuqslAxEkxEDE7O6Q74+Qel3emtFa30TN2sIvneIGXmGKGC8zJu2nNbNCqeYE7cBWlfnHgwtBNpbETzIfwfhJm01HApmArWMcf5ba43Xe9vTjWfm6oBv3o9sEFZkOT5IQOaT4+/gIAmo7V\",id);",
        "propertySourceTypes": {
            "57f3fb8efa3416c06701d615": 3,
            "57f3fb8efa3416c06701d60d": 0
        },
        "state": "IN_PROGRESS",
        "thumbnailConfigurationId": "config_default",
        "thumbnailInfo": {
            "href": "https://cad.onshape.com/api/thumbnails/bc73261ba89363657e8639caf07817a9e5112a3e?t=1685105818929",
            "id": "bc73261ba89363657e8639caf07817a9e5112a3e",
            "secondarySizes": [],
            "sizes": [
                {
                    "href": "https://cad.onshape.com/api/thumbnails/bc73261ba89363657e8639caf07817a9e5112a3e/s/600x340",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "600x340",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/bc73261ba89363657e8639caf07817a9e5112a3e/s/70x40",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "70x40",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/bc73261ba89363657e8639caf07817a9e5112a3e/s/300x300",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x300",
                    "uniqueId": "",
                    "viewOrientation": ""
                },
                {
                    "href": "https://cad.onshape.com/api/thumbnails/bc73261ba89363657e8639caf07817a9e5112a3e/s/300x170",
                    "mediaType": "image/png",
                    "renderMode": "",
                    "sheetName": "",
                    "size": "300x170",
                    "uniqueId": "",
                    "viewOrientation": ""
                }
            ]
        }
    }
];

const releasedParts = [];

describe('getPartState', () => {
    it('no parts released should be ', () => {
        getPartState(v1[0]);
    });
});