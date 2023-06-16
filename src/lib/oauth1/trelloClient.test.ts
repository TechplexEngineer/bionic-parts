import {test, expect} from "vitest";
import {buildRequestGetOAuthAccessToken, buildRequestGetOAuthRequestToken} from "$lib/oauth1/trelloClient";

// need some additional handling b/c of oauth_nonce and oauth_timestamp
test.skip("getOAuthRequestToken", async () => {
    const req = await buildRequestGetOAuthRequestToken("http://localhost:3000/callback");

    expect(req).toEqual(new Request("https://trello.com/1/OAuthGetRequestToken", {
        method: "POST",
        headers: {
            Authorization: `OAuth oauth_callback="http%3A%2F%2Flocalhost%3A3000%2Fcallback",oauth_consumer_key="883216151ca08f077c6fb691eb107672",oauth_nonce="8vLyarJztcqiKROY9MWhr4a9Hf5sck3O",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1686861262",oauth_version="1.0A",oauth_signature="cwD%2BQ2El%2F5P6XPT2X9o%2BN5Qvgng%3D"`
        }
    }))
})

// need some additional handling b/c of oauth_nonce and oauth_timestamp
test.skip("getOAuthAccessToken", async () => {
    const req = await buildRequestGetOAuthAccessToken("2a6d48698758679609987b2378ce99a1", "oauthTokenSecret", "oauthVerifier");

    expect(req).toEqual(new Request("https://trello.com/1/OAuthGetAccessToken", {
        method: "POST",
        headers: {
            Authorization: `OAuth oauth_consumer_key="883216151ca08f077c6fb691eb107672",oauth_nonce="6mHORLmojEtczKlxzmB7N1lK1Cl1kkuS",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1686861272",oauth_token="2a6d48698758679609987b2378ce99a1",oauth_verifier="09651c6d2df93c490d44ab8d7a9cc308",oauth_version="1.0A",oauth_signature="qqOFcfC%2FzlGY9uutPIwIjVayUUQ%3D"`
        }
    }))
})
