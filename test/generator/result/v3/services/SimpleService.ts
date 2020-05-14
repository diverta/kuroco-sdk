/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class SimpleService {
    /**
     * @throws ApiError
     */
    public static async getCallWithoutParametersAndResponse(requestParam: SimpleService.getCallWithoutParametersAndResponseRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/api/v${requestParam.apiVersion}/simple`,
        });

        const security = {
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     * @throws ApiError
     */
    public static async putCallWithoutParametersAndResponse(requestParam: SimpleService.putCallWithoutParametersAndResponseRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'put',
            path: `/api/v${requestParam.apiVersion}/simple`,
        });

        const security = {
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     * @throws ApiError
     */
    public static async postCallWithoutParametersAndResponse(requestParam: SimpleService.postCallWithoutParametersAndResponseRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/api/v${requestParam.apiVersion}/simple`,
        });

        const security = {
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     * @throws ApiError
     */
    public static async deleteCallWithoutParametersAndResponse(requestParam: SimpleService.deleteCallWithoutParametersAndResponseRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'delete',
            path: `/api/v${requestParam.apiVersion}/simple`,
        });

        const security = {
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     * @throws ApiError
     */
    public static async optionsCallWithoutParametersAndResponse(requestParam: SimpleService.optionsCallWithoutParametersAndResponseRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'options',
            path: `/api/v${requestParam.apiVersion}/simple`,
        });

        const security = {
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     * @throws ApiError
     */
    public static async headCallWithoutParametersAndResponse(requestParam: SimpleService.headCallWithoutParametersAndResponseRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'head',
            path: `/api/v${requestParam.apiVersion}/simple`,
        });

        const security = {
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
    /**
     * @throws ApiError
     */
    public static async patchCallWithoutParametersAndResponse(requestParam: SimpleService.patchCallWithoutParametersAndResponseRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'patch',
            path: `/api/v${requestParam.apiVersion}/simple`,
        });

        const security = {
        };
        const shouldHookToken = Object.values(security).find((v: any) => v.type === 'apiKey');

        const result = await request().then(result => {
            if (shouldHookToken && result.status === 401) {
                return Auth.loginWithStoredToken({ requestBody: {} }).then(async () => await request());
            }
            return result;
        });

        catchGenericError(result);
        return result.body;
    }
}

export namespace SimpleService {
    export interface getCallWithoutParametersAndResponseRequest {
    };
    export type getCallWithoutParametersAndResponseResponse = void;
    export interface putCallWithoutParametersAndResponseRequest {
    };
    export type putCallWithoutParametersAndResponseResponse = void;
    export interface postCallWithoutParametersAndResponseRequest {
    };
    export type postCallWithoutParametersAndResponseResponse = void;
    export interface deleteCallWithoutParametersAndResponseRequest {
    };
    export type deleteCallWithoutParametersAndResponseResponse = void;
    export interface optionsCallWithoutParametersAndResponseRequest {
    };
    export type optionsCallWithoutParametersAndResponseResponse = void;
    export interface headCallWithoutParametersAndResponseRequest {
    };
    export type headCallWithoutParametersAndResponseResponse = void;
    export interface patchCallWithoutParametersAndResponseRequest {
    };
    export type patchCallWithoutParametersAndResponseResponse = void;
}

