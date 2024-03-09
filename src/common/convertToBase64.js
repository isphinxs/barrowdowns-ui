export function convertToBase64(object) {
    const json = btoa(JSON.stringify(object));
    return json;
}