import fetch from 'node-fetch';
import { Options } from '.';

export function requestOpenAPI({ config }: Options) {
    const uri = `${trimLastSlash(config.management_url)}/direct/rcms_api/openapi/?${getQuery(config.sdk_key)}`;
    return fetch(uri);
}

export function requestManifest({ config }: Options) {
    const uri = `${trimLastSlash(config.management_url)}/direct/rcms_api/manifest/?${getQuery(config.sdk_key)}`;
    return fetch(uri).then(res => res.json() as Promise<Manifest>);
}

function trimLastSlash(url: string) {
    const h = url.trim();
    return h[h.length - 1] === '/' ? h.substr(0, h.length - 1) : h;
}

function getQuery(sdkKey: string): string {
    const params = { api_id: 1, _lang: 'en', sdk_key: sdkKey };
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
