/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { LocalStorage } from '../core/LocalStorage';

export class CommentsService {
    /**
     *
     * ### **Comment::list (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **module_type** `topics`
     *
     * @param moduleId モジュールID
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param newOrderFlg To the display the newest use 1. Default: 0
     * @param cnt Display number per page
     * @param pageId Page ID
     * @param fromDate Posted Date
     * @param toDate Posted Date
     * @param groupBy Grouping List by (module_id)
     * @param groupAs Grouping List as (array or object)
     * @result any
     * @throws ApiError
     */
    public static async getCommentsServiceRcmsApi1TopicsComments(requestParam: CommentsService.getCommentsServiceRcmsApi1TopicsCommentsRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/topics/comments`,
                query: {
                    'module_id[]': requestParam.moduleId,
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                    new_order_flg: requestParam.newOrderFlg,
                    cnt: requestParam.cnt,
                    pageID: requestParam.pageId,
                    from_date: requestParam.fromDate,
                    to_date: requestParam.toDate,
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
     * ### **Comment::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postCommentsServiceRcmsApi1TopicsCommentsInsert(requestParam: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsInsertRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/topics/comments/insert`,
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
     * ### **Comment::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postCommentsServiceRcmsApi1TopicsCommentsUpdate(requestParam: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsUpdateRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/topics/comments/update`,
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
     * ### **Comment::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **use_module_type** `topics`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postCommentsServiceRcmsApi1TopicsCommentsDelete(requestParam: CommentsService.postCommentsServiceRcmsApi1TopicsCommentsDeleteRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/topics/comments/delete`,
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

export namespace CommentsService {
    export interface getCommentsServiceRcmsApi1TopicsCommentsRequest {
        moduleId: Array<number>;
        outputFormat?: string;
        lang?: string;
        charset?: string;
        newOrderFlg?: number;
        cnt?: number;
        pageId?: number;
        fromDate?: string;
        toDate?: string;
        groupBy?: string;
        groupAs?: string;
    }
    export type getCommentsServiceRcmsApi1TopicsCommentsResponse = any;
    export interface postCommentsServiceRcmsApi1TopicsCommentsInsertRequest {
        requestBody: {
            /**
             * モジュールID
             */
            module_id: number;
            /**
             * Name
             */
            name: string;
            /**
             * Mail
             */
            mail?: string;
            /**
             * URL
             */
            url?: string;
            /**
             * Comments
             */
            note: string;
            /**
             * Rating
             */
            rating?: number;
            /**
             * 削除キー
             */
            delkey?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postCommentsServiceRcmsApi1TopicsCommentsInsertResponse = any;
    export interface postCommentsServiceRcmsApi1TopicsCommentsUpdateRequest {
        requestBody: {
            /**
             * コメントID
             */
            comment_id: number;
            /**
             * モジュールID
             */
            module_id: number;
            /**
             * Name
             */
            name: string;
            /**
             * Mail
             */
            mail?: string;
            /**
             * URL
             */
            url?: string;
            /**
             * Comments
             */
            note: string;
            /**
             * Rating
             */
            rating?: number;
            /**
             * 削除キー
             */
            delkey?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postCommentsServiceRcmsApi1TopicsCommentsUpdateResponse = any;
    export interface postCommentsServiceRcmsApi1TopicsCommentsDeleteRequest {
        requestBody: {
            /**
             * コメントID
             */
            comment_id: number;
            /**
             * 削除キー
             */
            delkey?: string;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postCommentsServiceRcmsApi1TopicsCommentsDeleteResponse = any;
}
