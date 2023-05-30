import {
    AccountApi,
    AliasApi,
    APIApplicationApi,
    AppAssociativeDataApi,
    AppElementApi,
    AssemblyApi,
    BillingApi,
    BlobElementApi,
    CommentApi,
    CompanyApi,
    DocumentApi,
    DrawingApi,
    ElementApi, ExportPartStudioStlRequest,
    ExportRuleApi,
    FeatureStudioApi,
    FolderApi,
    InsertableApi,
    MetadataApi,
    MetadataCategoryApi,
    OpenApiApi,
    PartApi,
    PartNumberApi,
    PartStudioApi,
    PropertiesTableTemplateApi,
    PublicationApi,
    ReleasePackageApi,
    RevisionApi,
    SketchApi,
    TeamApi,
    ThumbnailApi,
    TranslationApi,
    UserApi,
    VariablesApi,
    VersionApi,
    WebhookApi,
    WorkflowApi
} from "./onshape_api";
import type {HTTPMethod} from "$lib/OnshapeAPI";
import {BaseClient} from "$lib/OnshapeAPI/baseClient";
import * as runtime from "$lib/OnshapeAPI/onshape_api/runtime";
import {cookieName, getOauthTokenFromCookie, Oauth2Token} from "$lib/onshape";

// Note this is a convenient accessor, but does not allow for tree shaking
export class OnshapeClient extends BaseClient {

    AccountApi = new AccountApi(this.configuration);
    AliasApi = new AliasApi(this.configuration);
    APIApplicationApi = new APIApplicationApi(this.configuration);
    AppAssociativeDataApi = new AppAssociativeDataApi(this.configuration);
    AppElementApi = new AppElementApi(this.configuration);
    AssemblyApi = new AssemblyApi(this.configuration);
    BillingApi = new BillingApi(this.configuration);
    BlobElementApi = new BlobElementApi(this.configuration);
    CommentApi = new CommentApi(this.configuration);
    CompanyApi = new CompanyApi(this.configuration);
    DocumentApi = new DocumentApi(this.configuration);
    DrawingApi = new DrawingApi(this.configuration);
    ElementApi = new ElementApi(this.configuration);
    ExportRuleApi = new ExportRuleApi(this.configuration);
    FeatureStudioApi = new FeatureStudioApi(this.configuration);
    FolderApi = new FolderApi(this.configuration);
    InsertableApi = new InsertableApi(this.configuration);
    MetadataApi = new MetadataApi(this.configuration);
    MetadataCategoryApi = new MetadataCategoryApi(this.configuration);
    OpenApiApi = new OpenApiApi(this.configuration);
    PartApi = new PartApi(this.configuration);
    PartNumberApi = new PartNumberApi(this.configuration);
    PartStudioApi = new PartStudioApi(this.configuration);
    PropertiesTableTemplateApi = new PropertiesTableTemplateApi(this.configuration);
    PublicationApi = new PublicationApi(this.configuration);
    ReleasePackageApi = new ReleasePackageApi(this.configuration);
    RevisionApi = new RevisionApi(this.configuration);
    SketchApi = new SketchApi(this.configuration);
    TeamApi = new TeamApi(this.configuration);
    ThumbnailApi = new ThumbnailApi(this.configuration);
    TranslationApi = new TranslationApi(this.configuration);
    UserApi = new UserApi(this.configuration);
    VariablesApi = new VariablesApi(this.configuration);
    VersionApi = new VersionApi(this.configuration);
    WebhookApi = new WebhookApi(this.configuration);
    WorkflowApi = new WorkflowApi(this.configuration);
    request = new Raw(this.configuration);
    Oauth = Oauth;

}

class Raw extends runtime.BaseAPI {
    public async raw(params: {
        method: HTTPMethod,
        path: string,
        queryParameters?: { [key: string]: any },
        body?: any,
        initOverrides?: RequestInit | runtime.InitOverrideFunction,
    }) {

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", ["OAuth2Read"]);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        return await this.request({
            path: params.path,
            method: params.method,
            headers: headerParameters,
            query: params.queryParameters,
            body: params.body,
        }, params.initOverrides);

    }

    public async exportPartStudioStl(requestParameters: ExportPartStudioStlRequest, token: Oauth2Token): Promise<Response> {
        const psapi = new PartStudioApi(this.configuration)

        try {
            //we expect this to always generate a redirect
            await psapi.exportPartStudioStlRaw(requestParameters, {
                credentials: "include",
                redirect: "manual",
                headers: {
                    "Accept": "application/vnd.onshape.v1+octet-stream"
                }
            });
        } catch (e: any) {
            const redirRes: Response = e.response;
            const redirLocation = redirRes.headers.get("location");
            if (redirRes.status !== 307 || !redirLocation) {
                //sorry can't help you
                throw e;
            }

            return await fetch(redirLocation, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token.access_token, //@todo use this.configuration.accessToken() instead
                }
            });
        }
        return Promise.reject("Should never get here");
    }
}


export interface OauthTokenParams {
    grantType: 'authorization_code' | 'refresh_token',
    code?: string, // if grantType is authorization_code
    refreshToken?: string, // if grantType is refresh_token
    clientId: string,
    clientSecret: string,
    redirectUrl: string,
}

export const Oauth = {
    async token(args: OauthTokenParams) {
        const rawParams: Record<string, string> = {
            'grant_type': args.grantType,
            'client_id': args.clientId,
            "client_secret": args.clientSecret,
            "redirect_uri": args.redirectUrl,
        }
        if (args.grantType === 'authorization_code') {
            if (!args.code) throw Error("Missing code");
            rawParams['code'] = args.code;
        }
        if (args.grantType === 'refresh_token') {
            if (!args.refreshToken) throw Error("Missing refreshToken");
            rawParams['refresh_token'] = args.refreshToken;
        }
        const params = new URLSearchParams(rawParams);

        return await fetch("https://oauth.onshape.com/oauth/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        });
    },

    buildAuthorizeUrl(args: {
        clientId: string,
        redirectUrl: string,
        state: string,
        companyId?: string,
        scope?: string
    }) {
        // Your application must first must direct the user to
        // https://oauth.onshape.com/oauth/authorize?response_type=code&client_id=<your client id>.
        // You may optionally add the redirect_uri, scope, state and company_id query parameters.
        const authUrl = new URL("https://oauth.onshape.com/oauth/authorize");
        authUrl.searchParams.append("response_type", "code"); //required
        authUrl.searchParams.append("client_id", args.clientId); //required
        authUrl.searchParams.append("redirect_uri", args.redirectUrl); // optional
        if (args.scope) authUrl.searchParams.append("scope", args.scope); // optional
        authUrl.searchParams.append("state", args.state); // optional, but required for us as we need this to tell the app what doc we are in after all the redirects
        if (args.companyId) authUrl.searchParams.append("company_id", args.companyId); // optional
        return authUrl;
    }
}
