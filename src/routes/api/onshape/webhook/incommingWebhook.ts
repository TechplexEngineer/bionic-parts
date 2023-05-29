export interface IncomingWebhook {
    "messageId": string; //"34795d2e5f5f44eeb61fb7b1",
    "data": string; //"Some data",
    "timestamp": string; //"2014-12-16T23:45:10.611-0500",
    "event": string; //"webhook.register",

    "workspaceId"?: string; //"000000000000000000000000",
    "elementId"?: string; //"000000000000000000000000",
    "webhookId"?: string; //"544e91f7fb88ed44f5de1508",
    "documentId"?: string; //"000000000000000000000000",
    "versionId"?: string; //"000000000000000000000000"
    "translationId"?: string;
}

//@todo change this to a tagged union
// for translation completion:
// {
//     "timestamp": "2014-12-16T23:46:29.284-0500",
//     "event": "onshape.model.translation.complete",
//     "workspaceId": "f925722bee1c43fc80fb5bb2",
//     "elementId": "0f931a1ceba842299192823f",
//     "webhookId": "544e91f7fb88ed44f5de1508",
//     "messageId": "60f54ac1cbc04179a6642d9a",
//     "data": "Some data",
//     "documentId": "0f9c4392e5934f30b48ab645",
//     "userId": "567953d60a1a5fbb95940333",
//     "translationId": "4f5de10f9c4392e5934f30b4"
// }
