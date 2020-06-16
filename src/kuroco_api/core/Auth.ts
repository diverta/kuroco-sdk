/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

// @ts-ignore-start
import { Result } from './Result';
import { OpenAPI } from './OpenAPI';
import { ApiError } from './ApiError';
import { LocalStorage } from './LocalStorage';
// @ts-ignore-end

import { AuthenticationService } from '../services/AuthenticationService';

export const SpecialOperations = {
    login: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogin,
    logout: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogout,
    token: AuthenticationService.postAuthenticationServiceRcmsApi1AuthToken,
};

export class Auth {
    public static async login(param: Parameters<typeof SpecialOperations.login>[0]) {
        LocalStorage.deleteAccessToken();
        LocalStorage.deleteRefreshToken();

        if (!SpecialOperations.login) {
            return Promise.resolve();
        }

        const res = await SpecialOperations.login(param);
        const { grant_token, errors } = res;

        if (errors && Array.isArray(errors) && errors.length > 0) {
            return Promise.reject(errors);
        }

        await Auth.createToken({ requestBody: { grant_token } });

        return res.member_id as number;
    }

    public static async logout(param: Parameters<typeof SpecialOperations.logout>[0]) {
        return await SpecialOperations.logout(param).finally(() => {
            LocalStorage.deleteAccessToken();
            LocalStorage.deleteRefreshToken();
        });
    }

    public static async createToken(param: Parameters<typeof SpecialOperations.token>[0]) {
        if (OpenAPI.SECURITY['Token-Auth']) {
            const res = await SpecialOperations.token(param);
            const { access_token, refresh_token } = res;
            if (access_token) {
                LocalStorage.setAccessToken(access_token);
            }
            if (refresh_token) {
                LocalStorage.setRefreshToken(refresh_token);
            }
            return res;
        }
        return Promise.resolve();
    }

    public static async retryRequest(requestFn: () => Promise<Result>, result: Result) {
        // throws error when refresh_token is empty
        if (!LocalStorage.getRefreshToken()) {
            LocalStorage.deleteTokens();
            await Auth.onErrorHandler(result);
            throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
        }
        // handle on error to get refreshed token
        await Auth.createToken({ requestBody: { refresh_token: LocalStorage.getRefreshToken() } }).catch(async () => {
            LocalStorage.deleteTokens();
            await Auth.onErrorHandler(result);
            throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
        });
        // retry with refreshed token
        result = await requestFn().catch(async () => {
            LocalStorage.deleteTokens();
            await Auth.onErrorHandler(result);
            throw new ApiError(result, ApiError.Message.UNAUTHORIZED);
        });

        return result;
    }
}

export namespace Auth {
    export let onErrorHandler: (result: Result) => Promise<void> = result => Promise.reject();
}

export interface LoginResponse {
    grant_token: string;
    status: number;
    info: any;
    messages: string[];
    errors: string[];
}

export interface TokenResponse {
    access_token: string;
    refresh_token: string;
}
