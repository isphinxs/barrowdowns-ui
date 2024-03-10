export function convertToBase64(object) {
    return btoa(JSON.stringify(object));
}

export function decodeBase64(b64) {
    return JSON.parse(atob(b64));
}