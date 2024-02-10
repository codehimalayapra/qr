import * as CryptoJS from "crypto-js";
const passphrase = "kadsfey"; // Shorter passphrase

// Function to encode a string to base64url encoding
const base64UrlEncode = (input: string): string =>
  btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");

// Function to decode a base64url encoded string
const base64UrlDecode = (input: string): string =>
  atob(input.replace(/-/g, "+").replace(/_/g, "/"));

// Function to encrypt plaintext using RC4 encryption
export const encrypt = (plaintext: string): string =>
  base64UrlEncode(CryptoJS.RC4.encrypt(plaintext, passphrase).toString());

// Function to decrypt ciphertext using RC4 decryption
export const decrypt = (ciphertext: string): string => {
  try {
    return CryptoJS.RC4.decrypt(
      base64UrlDecode(ciphertext),
      passphrase
    ).toString(CryptoJS.enc.Utf8);
  } catch (error) {
    return "Error";
  }
};

// Example usage
const plaintext = "crypto-js";

// Encrypting
const encrypted = encrypt(plaintext);
console.log("Encrypted:", encrypted);

// Decrypting
const decrypted = decrypt(encrypted);
console.log("Decrypted:", decrypted);
