/** The PLAINTEXT signature method. */
export const PLAINTEXT = {
  name: "PLAINTEXT",
  sign: async (message: string, key: string): Promise<string> => key,
};



/** The HMAC-SHA1 signature method. */
export const HMAC_SHA1 = {
  name: "HMAC-SHA1",

  sign: async(message: string, key: string): Promise<string> => {
    const enc = new TextEncoder(/*"utf-8"*/);
    const algorithm = {name: "HMAC", hash: "SHA-1"};

    const cryptoKey = await crypto.subtle.importKey("raw", enc.encode(key), algorithm, false, ["sign", "verify"]);
    const signature = new Uint8Array(await crypto.subtle.sign(algorithm.name, cryptoKey, enc.encode(message)));

    return btoa(uint8ArrayToByteString(signature))

    // const hmac = new sha1.HmacSha1(key);
    // hmac.update(message);
    // return base64.encode(hmac.arrayBuffer());
  },

  hash: async (message: string): Promise<string> => {
    const enc = new TextEncoder(/*"utf-8"*/);
    const algorithm = "SHA-1";
    const hash = new Uint8Array(await crypto.subtle.digest(algorithm,enc.encode(message)));

    return btoa(uint8ArrayToByteString(hash))

    // const hash = new sha1.Sha1();
    // hash.update(message);
    // return base64.encode(hash.arrayBuffer());
  },
};

const uint8ArrayToByteString = function (input: Uint8Array): string {
    return String.fromCharCode.apply(null, input as any)
}

/** The HMAC-SHA256 signature method. */
export const HMAC_SHA256 = {
  name: "HMAC-SHA256",

  sign: async (message: string, key: string): Promise<string> => {
    const enc = new TextEncoder(/*"utf-8"*/);
    const algorithm = {name: "HMAC", hash: "SHA-256"};

    const cryptoKey = await crypto.subtle.importKey("raw", enc.encode(key), algorithm, false, ["sign", "verify"]);
    const signature = new Uint8Array(await crypto.subtle.sign(algorithm.name, cryptoKey, enc.encode(message)));

    return btoa(uint8ArrayToByteString(signature))

    // const hmac = new sha256.HmacSha256(key);
    // hmac.update(message);
    // return base64.encode(hmac.arrayBuffer());
  },

  hash: async (message: string): Promise<string> => {

    const enc = new TextEncoder(/*"utf-8"*/);
    const algorithm = "SHA-256";
    const hash = new Uint8Array(await crypto.subtle.digest(algorithm,enc.encode(message)));

    return btoa(uint8ArrayToByteString(hash))

    // const hash = new sha256.Sha256();
    // hash.update(message);
    // return base64.encode(hash.arrayBuffer());
  },
};
