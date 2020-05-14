/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelWithString } from '../models/ModelWithString';
import { ModelWithString } from '../models/ModelWithString';
import { ModelWithString } from '../models/ModelWithString';
import { ModelWithString } from '../models/ModelWithString';
import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class ParametersService {
    /**
     * @param parameterHeader This is the parameter that goes into the request header
     * @param parameterQuery This is the parameter that goes into the request query params
     * @param parameterForm This is the parameter that goes into the request form data
     * @param parameterCookie This is the parameter that goes into the cookie
     * @param requestBody This is the parameter that goes into the body
     * @throws ApiError
     */
    public static async callWithParameters(requestParam: ParametersService.callWithParametersRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/api/v${requestParam.apiVersion}/parameters`,
            cookies: {
                'parameterCookie': requestParam.parameterCookie,
            },
            headers: {
                'parameterHeader': requestParam.parameterHeader,
            },
            query: {
                'parameterQuery': requestParam.parameterQuery,
            },
            formData: {
                'parameterForm': requestParam.parameterForm,
            },
            body: requestParam.requestBody,
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
     * @param parameterHeader This is the parameter that goes into the request header
     * @param parameterQuery This is the parameter that goes into the request query params
     * @param parameterForm This is the parameter that goes into the request form data
     * @param parameterCookie This is the parameter that goes into the cookie
     * @param requestBody This is the parameter that goes into the body
     * @param parameterPath1 This is the parameter that goes into the path
     * @param parameterPath2 This is the parameter that goes into the path
     * @param parameterPath3 This is the parameter that goes into the path
     * @throws ApiError
     */
    public static async callWithWeirdParameterNames(requestParam: ParametersService.callWithWeirdParameterNamesRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/api/v${requestParam.apiVersion}/parameters/${requestParam.parameterPath1}/${requestParam.parameterPath2}/${requestParam.parameterPath3}`,
            cookies: {
                'PARAMETER-COOKIE': requestParam.parameterCookie,
            },
            headers: {
                'parameter.header': requestParam.parameterHeader,
            },
            query: {
                'parameter-query': requestParam.parameterQuery,
            },
            formData: {
                'parameter_form': requestParam.parameterForm,
            },
            body: requestParam.requestBody,
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
     * @param requestBody This is a required parameter
     * @param parameter This is an optional parameter
     * @throws ApiError
     */
    public static async getCallWithOptionalParam(requestParam: ParametersService.getCallWithOptionalParamRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/api/v${requestParam.apiVersion}/parameters/`,
            query: {
                'parameter': requestParam.parameter,
            },
            body: requestParam.requestBody,
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
     * @param parameter This is a required parameter
     * @param requestBody This is an optional parameter
     * @throws ApiError
     */
    public static async postCallWithOptionalParam(requestParam: ParametersService.postCallWithOptionalParamRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/api/v${requestParam.apiVersion}/parameters/`,
            query: {
                'parameter': requestParam.parameter,
            },
            body: requestParam.requestBody,
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

export namespace ParametersService {
    export interface callWithParametersRequest {
        parameterHeader: string | null,
        parameterQuery: string | null,
        parameterForm: string | null,
        parameterCookie: string | null,
        requestBody: ModelWithString | null,
    };
    export type callWithParametersResponse = void;
    export interface callWithWeirdParameterNamesRequest {
        parameterHeader: string | null,
        parameterQuery: string | null,
        parameterForm: string | null,
        parameterCookie: string | null,
        requestBody: ModelWithString | null,
        parameterPath1?: string,
        parameterPath2?: string,
        parameterPath3?: string,
    };
    export type callWithWeirdParameterNamesResponse = void;
    export interface getCallWithOptionalParamRequest {
        requestBody: ModelWithString,
        parameter?: string,
    };
    export type getCallWithOptionalParamResponse = void;
    export interface postCallWithOptionalParamRequest {
        parameter: string,
        requestBody?: ModelWithString,
    };
    export type postCallWithOptionalParamResponse = void;
}

