import { webcrypto as nodeCrypto } from 'crypto';

const cryptoObj: Crypto = (globalThis as any).crypto || (nodeCrypto as any);

const ALGO = { name: 'AES-GCM', length: 256 };
const IV_LENGTH = 12;

async function importKey(rawKey: ArrayBuffer) {
  return cryptoObj.subtle.importKey('raw', rawKey, ALGO, false, ['encrypt', 'decrypt']);
}

async function getKey(passphrase: string, salt: Uint8Array) {
  // Derive key with PBKDF2
  const enc = new TextEncoder();
  const keyMaterial = await cryptoObj.subtle.importKey('raw', enc.encode(passphrase), { name: 'PBKDF2' }, false, ['deriveBits', 'deriveKey']);
  return cryptoObj.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' }, keyMaterial, ALGO, false, ['encrypt', 'decrypt']);
}

export async function encrypt(plain: string, passphrase: string) {
  const salt = cryptoObj.getRandomValues(new Uint8Array(16));
  const iv = cryptoObj.getRandomValues(new Uint8Array(IV_LENGTH));
  const key = await getKey(passphrase, salt);
  const enc = new TextEncoder();
  const cipherBuf = await cryptoObj.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(plain));
  const payload = `${bufToHex(salt)}:${bufToHex(iv)}:${bufToB64(cipherBuf)}`;
  return payload;
}

export async function decrypt(payload: string, passphrase: string) {
  const [saltHex, ivHex, dataB64] = payload.split(':');
  const salt = hexToBuf(saltHex);
  const iv = hexToBuf(ivHex);
  const key = await getKey(passphrase, salt);
  const data = b64ToBuf(dataB64);
  const plainBuf = await cryptoObj.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
  return new TextDecoder().decode(plainBuf);
}

// Helpers
function bufToHex(buf: ArrayBuffer | Uint8Array) {
  const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}
function hexToBuf(hex: string) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  return bytes;
}
function bufToB64(buf: ArrayBuffer) {
  const bytes = new Uint8Array(buf);
  let bin = '';
  bytes.forEach(b => bin += String.fromCharCode(b));
  return Buffer.from(bin, 'binary').toString('base64');
}
function b64ToBuf(b64: string) {
  const bin = Buffer.from(b64, 'base64').toString('binary');
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}
