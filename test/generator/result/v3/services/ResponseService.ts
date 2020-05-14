/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelWithString } from '../models/ModelWithString';
import { ModelWithString } from '../models/ModelWithString';
import { ModelWithString } from '../models/ModelWithString';
import { ModelThatExtends } from '../models/ModelThatExtends';
import { ModelThatExtendsExtends } from '../models/ModelThatExtendsExtends';
import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class ResponseService {
    /**
     * @result ModelWithString
     * @throws ApiError
     */
    public static async callWithResponse(requestParam: ResponseService.callWithResponseRequest): Promise<ModelWithString> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/api/v${requestParam.apiVersion}/response`,
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
     * @result ModelWithString Message for default response
     * @throws ApiError
     */
    public static async callWithDuplicateResponses(requestParam: ResponseService.callWithDuplicateResponsesRequest): Promise<ModelWithString> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/api/v${requestParam.apiVersion}/response`,
        });
        if (!result.ok) {
            switch (result.status) {
                case 500: throw new ApiError(result, `Message for 500 error`);
                case 501: throw new ApiError(result, `Message for 501 error`);
                case 502: throw new ApiError(result, `Message for 502 error`);
            }
        }

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
     * @result ModelWithString Message for default response
     * @result ModelThatExtends Message for 201 response
     * @result ModelThatExtendsExtends Message for 202 response
     * @throws ApiError
     */
    public static async callWithResponses(requestParam: ResponseService.callWithResponsesRequest): Promise<ModelWithString | ModelThatExtends | ModelThatExtendsExtends> {

        const request = async () =>
        await __request({
            method: 'put',
            path: `/api/v${requestParam.apiVersion}/response`,
        });
        if (!result.ok) {
            switch (result.status) {
                case 500: throw new ApiError(result, `Message for 500 error`);
                case 501: throw new ApiError(result, `Message for 501 error`);
                case 502: throw new ApiError(result, `Message for 502 error`);
            }
        }

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

export namespace ResponseService {
    export interface callWithResponseRequest {
    };
    export type callWithResponseResponse = ModelWithString;
    export interface callWithDuplicateResponsesRequest {
    };
    export type callWithDuplicateResponsesResponse = ModelWithString;
    export interface callWithResponsesRequest {
    };
    export type callWithResponsesResponse = ModelWithString | ModelThatExtends | ModelThatExtendsExtends;
}

