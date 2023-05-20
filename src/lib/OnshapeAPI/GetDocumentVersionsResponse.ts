export interface GetDocumentVersionsResponse {
    metadataWorkspaceId: string
    purpose: number
    parent: string
    type: string
    lastModifier: any
    description: string
    creator: {
        state: number
        image: string
        name: string
        id: string
        href: string
    }
    modifiedAt: string
    documentId: string
    createdAt: string
    thumbnail: any
    microversion: string
    parents: any
    overrideDate: any
    name: string
    id: string
    href: any
}