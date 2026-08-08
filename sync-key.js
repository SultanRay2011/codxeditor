(function initializeCodxSyncKey(global) {
  "use strict";

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const KEY_ALPHABET = "abcdefghjkmnpqrstuvwxyz23456789";
  const KEY_PATTERN = /^codx-[a-hj-km-np-z2-9]{4}(?:-[a-hj-km-np-z2-9]{4}){2}$/;
  const PBKDF2_ITERATIONS = 200000;

  function assertWebCrypto() {
    if (!global.crypto?.subtle || typeof global.crypto.getRandomValues !== "function") {
      throw new Error("Sync Key needs a secure browser with Web Crypto support.");
    }
  }

  function normalizeKey(value) {
    return String(value || "").trim().toLowerCase();
  }

  function isValidKey(value) {
    return KEY_PATTERN.test(normalizeKey(value));
  }

  function generateKey() {
    assertWebCrypto();
    let compact = "";
    while (compact.length < 12) {
      const bytes = new Uint8Array(24);
      global.crypto.getRandomValues(bytes);
      for (const byte of bytes) {
        if (byte >= 248) continue;
        compact += KEY_ALPHABET[byte % KEY_ALPHABET.length];
        if (compact.length === 12) break;
      }
    }
    return `codx-${compact.slice(0, 4)}-${compact.slice(4, 8)}-${compact.slice(8, 12)}`;
  }

  function bytesToHex(bytes) {
    return [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  function bytesToBase64(bytes) {
    let binary = "";
    const chunkSize = 0x8000;
    for (let index = 0; index < bytes.length; index += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
    }
    return global.btoa(binary);
  }

  function base64ToBytes(value) {
    const binary = global.atob(String(value || ""));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
  }

  async function getKeyIdentity(rawKey) {
    assertWebCrypto();
    const key = normalizeKey(rawKey);
    if (!isValidKey(key)) throw new Error("Enter a valid key in the format codx-XXXX-XXXX-XXXX.");
    const salt = new Uint8Array(await global.crypto.subtle.digest("SHA-256", encoder.encode(key)));
    return { key, hash: bytesToHex(salt), salt };
  }

  async function deriveEncryptionKey(identity) {
    const material = await global.crypto.subtle.importKey(
      "raw",
      encoder.encode(identity.key),
      "PBKDF2",
      false,
      ["deriveKey"],
    );
    return global.crypto.subtle.deriveKey(
      { name: "PBKDF2", hash: "SHA-256", salt: identity.salt, iterations: PBKDF2_ITERATIONS },
      material,
      { name: "AES-GCM", length: 256 },
      false,
      ["encrypt", "decrypt"],
    );
  }

  async function encryptProject(rawKey, payload) {
    const identity = await getKeyIdentity(rawKey);
    const encryptionKey = await deriveEncryptionKey(identity);
    const iv = new Uint8Array(12);
    global.crypto.getRandomValues(iv);
    const plaintext = encoder.encode(JSON.stringify(payload));
    const ciphertext = new Uint8Array(await global.crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      encryptionKey,
      plaintext,
    ));
    return {
      hash: identity.hash,
      blob: JSON.stringify({ version: 1, iv: bytesToBase64(iv), ciphertext: bytesToBase64(ciphertext) }),
    };
  }

  async function decryptProject(rawKey, blob) {
    const identity = await getKeyIdentity(rawKey);
    let envelope;
    try {
      envelope = typeof blob === "string" ? JSON.parse(blob) : blob;
    } catch (_error) {
      throw new Error("This Sync Key contains unreadable data.");
    }
    if (Number(envelope?.version) !== 1 || !envelope?.iv || !envelope?.ciphertext) {
      throw new Error("This Sync Key contains unreadable data.");
    }
    try {
      const encryptionKey = await deriveEncryptionKey(identity);
      const plaintext = await global.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: base64ToBytes(envelope.iv) },
        encryptionKey,
        base64ToBytes(envelope.ciphertext),
      );
      return { hash: identity.hash, payload: JSON.parse(decoder.decode(plaintext)) };
    } catch (_error) {
      throw new Error("That key could not decrypt this project.");
    }
  }

  async function request(rawKey, options = {}) {
    const identity = await getKeyIdentity(rawKey);
    const response = await global.fetch(`/api/sync/${identity.hash}`, {
      cache: "no-store",
      headers: { Accept: "application/json", ...(options.headers || {}) },
      ...options,
    });
    return { identity, response };
  }

  async function upload(rawKey, blob, metadata) {
    const { response } = await request(rawKey, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        blob,
        savedAt: Number(metadata?.savedAt || Date.now()),
        deviceName: String(metadata?.deviceName || "Unknown device"),
        fileCount: Math.max(0, Number(metadata?.fileCount || 0)),
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data?.ok) {
      const error = new Error(data?.error || "Unable to sync this project.");
      error.status = response.status;
      throw error;
    }
    return data;
  }

  async function get(rawKey) {
    const { response } = await request(rawKey, { method: "GET" });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data?.ok) {
      const error = new Error(data?.error || "Sync data was not found.");
      error.status = response.status;
      throw error;
    }
    return data;
  }

  async function head(rawKey) {
    const { response } = await request(rawKey, { method: "HEAD" });
    if (!response.ok) {
      const error = new Error("Sync data was not found.");
      error.status = response.status;
      throw error;
    }
    return {
      savedAt: Number(response.headers.get("X-Codx-Saved-At") || response.headers.get("Saved-At") || 0),
      deviceName: decodeURIComponent(response.headers.get("X-Codx-Device") || "Unknown device"),
      fileCount: Number(response.headers.get("X-Codx-File-Count") || 0),
    };
  }

  async function remove(rawKey) {
    const { response } = await request(rawKey, { method: "DELETE" });
    if (response.status === 404) return false;
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data?.ok) throw new Error(data?.error || "Unable to remove sync data.");
    return true;
  }

  global.CodxSync = Object.freeze({
    PBKDF2_ITERATIONS,
    normalizeKey,
    isValidKey,
    generateKey,
    getKeyIdentity,
    encryptProject,
    decryptProject,
    upload,
    get,
    head,
    remove,
  });
})(window);
