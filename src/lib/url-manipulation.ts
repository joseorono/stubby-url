
import { customAlphabet, nanoid } from "nanoid";

export function getNanoId(): string {
    // NanoID is URL-friendly by default so we don't need to use customAlphabet or encode the result
    //const shortCode = nanoid(8);
    return nanoid(8);
};

export function isValidUrl(argUrl: string): boolean {
    try {
      new URL(argUrl);
      return true;
    } catch (err) {
      return false;
    }
}

export function isValidHttpUrl(argUrl: string): boolean {
    try {
        const newUrl = new URL(argUrl);
        return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
        return false;
    }
}