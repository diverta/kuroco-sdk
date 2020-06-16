/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { LocalStorage } from '../core/LocalStorage';

export class FavoritesService {
    /**
     *
     * ### **Favorite::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **module_type** `topics`
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param moduleId
     * @param memberId Member ID
     * @param rcmsid rcmsid
     * @param groupBy Grouping List by (module_id)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    public static async getFavoritesServiceRcmsApi1Favorites(requestParam: FavoritesService.getFavoritesServiceRcmsApi1FavoritesRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/favorites`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                    cnt: requestParam.cnt,
                    pageID: requestParam.pageId,
                    'module_id[]': requestParam.moduleId,
                    'member_id[]': requestParam.memberId,
                    'rcmsid[]': requestParam.rcmsid,
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
     * ### **Favorite::insert (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postFavoritesServiceRcmsApi1FavoritesInsert(requestParam: FavoritesService.postFavoritesServiceRcmsApi1FavoritesInsertRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/favorites/insert`,
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
     * ### **Favorite::delete (v1)**
     *
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postFavoritesServiceRcmsApi1FavoritesDelete(requestParam: FavoritesService.postFavoritesServiceRcmsApi1FavoritesDeleteRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/favorites/delete`,
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
}

export namespace FavoritesService {
    export interface getFavoritesServiceRcmsApi1FavoritesRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        cnt?: number;
        pageId?: number;
        moduleId?: Array<number>;
        memberId?: Array<number>;
        rcmsid?: Array<string>;
        groupBy?: string;
        groupAs?: string;
    }
    export type getFavoritesServiceRcmsApi1FavoritesResponse = any;
    export interface postFavoritesServiceRcmsApi1FavoritesInsertRequest {
        requestBody: {
            /**
             * Module type
             */
            module_type: string;
            /**
             * module_id
             */
            module_id: number;
            /**
             * ページシステム名
             */
            page_sysnm?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postFavoritesServiceRcmsApi1FavoritesInsertResponse = any;
    export interface postFavoritesServiceRcmsApi1FavoritesDeleteRequest {
        requestBody: {
            /**
             * Module type
             */
            module_type: string;
            /**
             * module_id
             */
            module_id: number;
            /**
             * ページシステム名
             */
            page_sysnm?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postFavoritesServiceRcmsApi1FavoritesDeleteResponse = any;
}
