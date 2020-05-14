/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class DuplicateService {
    /**
     * @throws ApiError
     */
    public static async duplicateName(requestParam: DuplicateService.duplicateNameRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/api/v${requestParam.apiVersion}/duplicate`,
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
    public static async duplicateName(requestParam: DuplicateService.duplicateNameRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/api/v${requestParam.apiVersion}/duplicate`,
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
    public static async duplicateName(requestParam: DuplicateService.duplicateNameRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'put',
            path: `/api/v${requestParam.apiVersion}/duplicate`,
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
    public static async duplicateName(requestParam: DuplicateService.duplicateNameRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'delete',
            path: `/api/v${requestParam.apiVersion}/duplicate`,
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

export namespace DuplicateService {
    export interface duplicateNameRequest {
    };
    export type duplicateNameResponse = void;
    export interface duplicateNameRequest {
    };
    export type duplicateNameResponse = void;
    export interface duplicateNameRequest {
    };
    export type duplicateNameResponse = void;
    export interface duplicateNameRequest {
    };
    export type duplicateNameResponse = void;
}

