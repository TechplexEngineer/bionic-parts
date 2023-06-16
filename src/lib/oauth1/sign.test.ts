import { HMAC_SHA1, HMAC_SHA256, PLAINTEXT } from "./sign";
import { test, expect } from "vitest";

const assertEquals = (actual: any, expected: any) => {
  expect(expected).to.eq(actual);
}

// PLAINTEXT -----------------------------------------------------------------

test("PLAINTEXT.name - is correct", () => {
  assertEquals(PLAINTEXT.name,"PLAINTEXT");
});

test("PLAINTEXT.sign - just returns key", async () => {
  assertEquals(await PLAINTEXT.sign("message", ""), "");
  assertEquals(await PLAINTEXT.sign("message", "key"), "key");
});

// HMAC_SHA1 -----------------------------------------------------------------

test("HMAC_SHA1.name - is correct", () => {
  assertEquals(HMAC_SHA1.name, "HMAC-SHA1");
});

test("HMAC_SHA1.sign - returns correct signature", async () => {
  // echo -n message | openssl dgst -binary -sha1 -hmac key | base64
  const examples = [
    // {
    //   message: "",
    //   key: "",
    //   signature: "+9sdGxiqbAgyS31ktx+3Y3BpDh0=",
    // },
    {
      message: "",
      key: "key",
      signature: "9Cuw7rAY671Fl65yE3EexgdghD8=",
    },
    {
      message: "message",
      key: "key",
      signature: "IIjfdNXyFGtIFGyvSWU3fp0L46Q=",
    },
  ];

  for (const { message, key, signature } of examples) {
    assertEquals(await HMAC_SHA1.sign(message, key), signature);
  }
});

test("HMAC_SHA1.hash - returns correct hash", async () => {
  // echo -n message | openssl dgst -binary -sha1 | base64
  const examples = [
    {
      message: "",
      hash: "2jmj7l5rSw0yVb/vlWAYkK/YBwk=",
    },
    {
      message: "message",
      hash: "b5ua881ui4pzws3O03/p9ZIm4n0=",
    },
  ];

  for (const { message, hash } of examples) {
    assertEquals(await HMAC_SHA1.hash(message), hash);
  }
});

// HMAC_SHA256 ---------------------------------------------------------------

test("HMAC_SHA256.name - is correct", () => {
  assertEquals(HMAC_SHA256.name, "HMAC-SHA256");
});

test("HMAC_SHA256.sign - returns correct signature", async () => {
  // echo -n message | openssl dgst -binary -sha256 -hmac key | base64
  const examples = [
    // {
    //   message: "",
    //   key: "",
    //   signature: "thNnmggU2ex3L5XXeMNfxf8Wl8STcVZTxscSFEKSxa0=",
    // },
    {
      message: "",
      key: "key",
      signature: "XV0TlWPJW1lnub2ajJsjOp3ttFByeUzSMtwbdIMmB9A=",
    },
    {
      message: "message",
      key: "key",
      signature: "bp7ym3X//Ft6uuUn1Y/a2y/kLnIZARl2kXNDBl9Y7Uo=",
    },
  ];

  for (const { message, key, signature } of examples) {
    assertEquals(await HMAC_SHA256.sign(message, key), signature);
  }
});

test("HMAC_SHA256.hash - returns correct hash", async () => {
  // echo -n message | openssl dgst -binary -sha256 | base64
  const examples = [
    {
      message: "",
      hash: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
    },
    {
      message: "message",
      hash: "q1MKE+RZFJgrefm34/uplM/R8/si9xzqGvvwK0YMbR0=",
    },
  ];

  for (const { message, hash } of examples) {
    assertEquals(await HMAC_SHA256.hash(message), hash);
  }
});
