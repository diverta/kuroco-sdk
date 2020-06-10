/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

export class LocalStorage {
    /** get */
    public static getAccessToken() {
        const token = localStorage.getItem(LocalStorage.TokenKeys.accessToken);
        return !!token ? token : '';
    }
    public static getRefreshToken() {
        const token = localStorage.getItem(LocalStorage.TokenKeys.refreshToken);
        return !!token ? token : '';
    }

    /** set */
    public static setAccessToken(token: string) {
        localStorage.setItem(LocalStorage.TokenKeys.accessToken, token);
    }
    public static setRefreshToken(token: string) {
        localStorage.setItem(LocalStorage.TokenKeys.refreshToken, token);
    }

    /** delete */
    public static deleteAccessToken() {
        localStorage.removeItem(LocalStorage.TokenKeys.accessToken);
    }
    public static deleteRefreshToken() {
        localStorage.removeItem(LocalStorage.TokenKeys.refreshToken);
    }
    public static deleteTokens() {
        localStorage.removeItem(LocalStorage.TokenKeys.accessToken);
        localStorage.removeItem(LocalStorage.TokenKeys.refreshToken);
    }
}

export namespace LocalStorage {
    export enum TokenKeys {
        accessToken = 'accessToken',
        refreshToken = 'refreshToken',
    }
}