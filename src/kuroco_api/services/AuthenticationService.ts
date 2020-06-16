/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { LocalStorage } from '../core/LocalStorage';

export class AuthenticationService {
    /**
     *
     * ### **Login::firebaseToken (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async getAuthenticationServiceRcmsApi1FirebaseToken(requestParam: AuthenticationService.getAuthenticationServiceRcmsApi1FirebaseTokenRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/firebase_token`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                },
            });

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
        }

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Login::login_challenge (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postAuthenticationServiceRcmsApi1AuthLogin(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLoginRequest): Promise<any> {
        const shouldHookToken = Object.keys({}).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/auth/login`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                },
                body: requestParam.requestBody,
            });

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
        }

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Login::logout (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postAuthenticationServiceRcmsApi1AuthLogout(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1AuthLogoutRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/auth/logout`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                },
            });

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
        }

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Login::token (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_refresh_token** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postAuthenticationServiceRcmsApi1AuthToken(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1AuthTokenRequest): Promise<any> {
        const shouldHookToken = Object.keys({}).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/auth/token`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                },
                body: requestParam.requestBody,
            });

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
        }

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Login::reminder (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postAuthenticationServiceRcmsApi1MePwReminder(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1MePwReminderRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/me/pw/reminder`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                },
                body: requestParam.requestBody,
            });

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
        }

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Login::reset_password (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postAuthenticationServiceRcmsApi1MePwReset(requestParam: AuthenticationService.postAuthenticationServiceRcmsApi1MePwResetRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/me/pw/reset`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                },
                body: requestParam.requestBody,
            });

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
        }

        catchGenericError(result);
        return result.body;
    }
    /**
     *
     * ### **Login::profile (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async getAuthenticationServiceRcmsApi1MeProfile(requestParam: AuthenticationService.getAuthenticationServiceRcmsApi1MeProfileRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/me/profile`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                },
            });

        let result = await request();

        if (shouldHookToken && !result.ok && result.status === 401) {
            result = await import('../core/Auth').then(({ Auth }) => Auth.retryRequest(request, result));
        }

        catchGenericError(result);
        return result.body;
    }
}

export namespace AuthenticationService {
    export interface getAuthenticationServiceRcmsApi1FirebaseTokenRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type getAuthenticationServiceRcmsApi1FirebaseTokenResponse = any;
    export interface postAuthenticationServiceRcmsApi1AuthLoginRequest {
        requestBody: {
            /**
             * Login ID
             */
            email?: string;
            /**
             * Password
             */
            password?: string;
            /**
             * Log in automatically next time
             */
            login_save?: 0 | 1;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postAuthenticationServiceRcmsApi1AuthLoginResponse = any;
    export interface postAuthenticationServiceRcmsApi1AuthLogoutRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postAuthenticationServiceRcmsApi1AuthLogoutResponse = any;
    export interface postAuthenticationServiceRcmsApi1AuthTokenRequest {
        requestBody: {
            /**
             * Resource grant token
             */
            grant_token?: string;
            /**
             * Refresh token
             */
            refresh_token?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postAuthenticationServiceRcmsApi1AuthTokenResponse = any;
    export interface postAuthenticationServiceRcmsApi1MePwReminderRequest {
        requestBody: { email: string } | { token: string; temp_pwd: string; password: string };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postAuthenticationServiceRcmsApi1MePwReminderResponse = any;
    export interface postAuthenticationServiceRcmsApi1MePwResetRequest {
        requestBody: {
            /**
             * Token
             */
            login_id: string;
            /**
             * Current Login Password
             */
            current_password: string;
            /**
             * New Password
             */
            new_password: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postAuthenticationServiceRcmsApi1MePwResetResponse = any;
    export interface getAuthenticationServiceRcmsApi1MeProfileRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type getAuthenticationServiceRcmsApi1MeProfileResponse = any;
}
