/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { LocalStorage } from '../core/LocalStorage';

export class TagsService {
    /**
     *
     * ### **Tag::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param order Set the sort order. Available param {0}
     * @param pageId Page ID
     * @param id Tag IDs that you would like to display
     * @param categoryId ID of the tag category to be displayed. (Default: All)
     * @param groupBy Grouping List by (module_id / category)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    public static async getTagsServiceRcmsApi1Tags(requestParam: TagsService.getTagsServiceRcmsApi1TagsRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/tags`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                    'order[]': requestParam.order,
                    pageID: requestParam.pageId,
                    'id[]': requestParam.id,
                    'category_id[]': requestParam.categoryId,
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
     * ### **Tag::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postTagsServiceRcmsApi1TagsInsert(requestParam: TagsService.postTagsServiceRcmsApi1TagsInsertRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/tags/insert`,
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
     * ### **Tag::delete (v1)**
     *
     *
     * @param tagId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postTagsServiceRcmsApi1TagsDeleteTagId(requestParam: TagsService.postTagsServiceRcmsApi1TagsDeleteTagIdRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/tags/delete/${requestParam.tagId}`,
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

export namespace TagsService {
    export interface getTagsServiceRcmsApi1TagsRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        order?: Array<string>;
        pageId?: number;
        id?: Array<number>;
        categoryId?: Array<number>;
        groupBy?: string;
        groupAs?: string;
    }
    export type getTagsServiceRcmsApi1TagsResponse = any;
    export interface postTagsServiceRcmsApi1TagsInsertRequest {
        requestBody: {
            /**
             * Title
             */
            tag_nm: string;
            /**
             * Category ID
             */
            tag_category_id?: number;
            /**
             * Published / Not published
             */
            open_type?: 'open' | 'close' | 'default';
            /**
             * Sort
             */
            weight?: number;
            /**
             * ext_col_01
             */
            ext_col_01?: string;
            /**
             * ext_col_02
             */
            ext_col_02?: string;
            /**
             * ext_col_03
             */
            ext_col_03?: string;
            /**
             * ext_col_04
             */
            ext_col_04?: string;
            /**
             * ext_col_05
             */
            ext_col_05?: string;
            /**
             * ext_col_06
             */
            ext_col_06?: string;
            /**
             * ext_col_07
             */
            ext_col_07?: string;
            /**
             * ext_col_08
             */
            ext_col_08?: string;
            /**
             * ext_col_09
             */
            ext_col_09?: string;
            /**
             * ext_col_10
             */
            ext_col_10?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postTagsServiceRcmsApi1TagsInsertResponse = any;
    export interface postTagsServiceRcmsApi1TagsDeleteTagIdRequest {
        tagId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postTagsServiceRcmsApi1TagsDeleteTagIdResponse = any;
}
