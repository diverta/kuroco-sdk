import fetch from 'node-fetch';

export function requestOpenAPI(host: string, sdkKey: string) {
    const param = { api_id: 1, _lang: 'en', sdk_key: sdkKey };
    const uri = `${host}/direct/rcms_api/openapi/?${getQuery(param)}`;
    return fetch(uri);
}

function getQuery(params: object): string {
    return Object.entries(params)
        .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
        .join('&');
}
