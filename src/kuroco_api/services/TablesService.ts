/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { LocalStorage } from '../core/LocalStorage';

export class TablesService {
    /**
     *
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `1`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1|2|3|4)
     * @param valueIdx Value index (0|1|2|3|4)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (id|parentValue|parentLabel|childValue|childLabel)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    public static async getTablesServiceRcmsApi1TablesSimple(requestParam: TablesService.getTablesServiceRcmsApi1TablesSimpleRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/tables/simple`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                    'key_idx[]': requestParam.keyIdx,
                    'value_idx[]': requestParam.valueIdx,
                    multiple: requestParam.multiple,
                    outputAs: requestParam.outputAs,
                    groupBy: requestParam.groupBy,
                    groupAs: requestParam.groupAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1)
     * @param valueIdx Value index (0|1)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    public static async getTablesServiceRcmsApi1TablesMatrix(requestParam: TablesService.getTablesServiceRcmsApi1TablesMatrixRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/tables/matrix`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                    'key_idx[]': requestParam.keyIdx,
                    'value_idx[]': requestParam.valueIdx,
                    multiple: requestParam.multiple,
                    outputAs: requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `3`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1)
     * @param valueIdx Value index (0|1)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    public static async getTablesServiceRcmsApi1TablesDate(requestParam: TablesService.getTablesServiceRcmsApi1TablesDateRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/tables/date`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                    'key_idx[]': requestParam.keyIdx,
                    'value_idx[]': requestParam.valueIdx,
                    multiple: requestParam.multiple,
                    outputAs: requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `4`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index (0|1|2|3|4)
     * @param valueIdx Value index (0|1|2|3|4)
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    public static async getTablesServiceRcmsApi1TablesChecksheet(requestParam: TablesService.getTablesServiceRcmsApi1TablesChecksheetRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/tables/checksheet`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                    'key_idx[]': requestParam.keyIdx,
                    'value_idx[]': requestParam.valueIdx,
                    multiple: requestParam.multiple,
                    outputAs: requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `5`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param keyIdx Key index
     * @param valueIdx Value index
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @result any
     * @throws ApiError
     */
    public static async getTablesServiceRcmsApi1TablesInvalid(requestParam: TablesService.getTablesServiceRcmsApi1TablesInvalidRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/tables/invalid`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                    'key_idx[]': requestParam.keyIdx,
                    'value_idx[]': requestParam.valueIdx,
                    multiple: requestParam.multiple,
                    outputAs: requestParam.outputAs,
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
     * ### **Master::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **csvtable_id** `1`
     *
     * > **key_idx** `1`
     *
     * > **value_idx** `2`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param multiple Multiple(0|1)
     * @param outputAs Output List As (array|object)
     * @param groupBy Grouping List By (id|parentValue|parentLabel|childValue|childLabel)
     * @param groupAs Grouping List As (array|object)
     * @result any
     * @throws ApiError
     */
    public static async getTablesServiceRcmsApi1TablesSimpleKey1Value2(requestParam: TablesService.getTablesServiceRcmsApi1TablesSimpleKey1Value2Request): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/tables/simple/key1-value2`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                    multiple: requestParam.multiple,
                    outputAs: requestParam.outputAs,
                    groupBy: requestParam.groupBy,
                    groupAs: requestParam.groupAs,
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

export namespace TablesService {
    export interface getTablesServiceRcmsApi1TablesSimpleRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
        groupBy?: string;
        groupAs?: string;
    }
    export type getTablesServiceRcmsApi1TablesSimpleResponse = any;
    export interface getTablesServiceRcmsApi1TablesMatrixRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
    }
    export type getTablesServiceRcmsApi1TablesMatrixResponse = any;
    export interface getTablesServiceRcmsApi1TablesDateRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
    }
    export type getTablesServiceRcmsApi1TablesDateResponse = any;
    export interface getTablesServiceRcmsApi1TablesChecksheetRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
    }
    export type getTablesServiceRcmsApi1TablesChecksheetResponse = any;
    export interface getTablesServiceRcmsApi1TablesInvalidRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        keyIdx?: Array<number>;
        valueIdx?: Array<number>;
        multiple?: number;
        outputAs?: string;
    }
    export type getTablesServiceRcmsApi1TablesInvalidResponse = any;
    export interface getTablesServiceRcmsApi1TablesSimpleKey1Value2Request {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        multiple?: number;
        outputAs?: string;
        groupBy?: string;
        groupAs?: string;
    }
    export type getTablesServiceRcmsApi1TablesSimpleKey1Value2Response = any;
}
