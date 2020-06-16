import fetch from 'node-fetch';

export function requestOpenAPI(host: string, sdkKey: string) {
    const param = { api_id: 1, _lang: 'en', sdk_key: sdkKey };
    const uri = `${trimLastSlash(host)}/direct/rcms_api/openapi/?${getQuery(param)}`;
    return fetch(uri);
}

export function requestManifest(host: string) {
    const uri = `${trimLastSlash(host)}/direct/rcms_api/manifest/`;
    return fetch(uri).then(res => res.json() as Promise<Manifest>);
}

function trimLastSlash(url: string) {
    const h = url.trim();
    return h[h.length - 1] === '/' ? h.substr(0, h.length - 1) : h;
}

function getQuery(params: object): string {
    return Object.entries(params)
        .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
        .join('&');
}

export interface Manifest {
    gcp: {
        firebaseConfig: {
            apiKey: string;
            authDomain: string;
            databaseURL: string;
            projectId: string;
            storageBucket: string;
            messagingSenderId: string;
            appId: string;
            measurementId: string;
        };
    };
}
