/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { LocalStorage } from '../core/LocalStorage';

export class MembersService {
    /**
     *
     * ### **Member::list (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param id Member ID
     * @param cnt Number of topics per page
     * @param pageId Page ID
     * @param sName Member search
     * @param sEmail Member search
     * @param sTel Member search
     * @param sAddress Member search
     * @param sTdfkCd Member search
     * @param groupId Member search
     * @result any
     * @throws ApiError
     */
    public static async getMembersServiceRcmsApi1Members(requestParam: MembersService.getMembersServiceRcmsApi1MembersRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/members`,
                query: {
                    _output_format: requestParam.outputFormat,
                    _lang: requestParam.lang,
                    _charset: requestParam.charset,
                    'id[]': requestParam.id,
                    cnt: requestParam.cnt,
                    pageID: requestParam.pageId,
                    s_name: requestParam.sName,
                    s_email: requestParam.sEmail,
                    s_tel: requestParam.sTel,
                    s_address: requestParam.sAddress,
                    s_tdfk_cd: requestParam.sTdfkCd,
                    group_id: requestParam.groupId,
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
     * ### **Member::details (v1)**
     *
     *
     * @param memberId
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async getMembersServiceRcmsApi1MembersMemberId(requestParam: MembersService.getMembersServiceRcmsApi1MembersMemberIdRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'get',
                path: `/rcms-api/1/members/${requestParam.memberId}`,
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
     * ### **Member::insert (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **default_group_id** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postMembersServiceRcmsApi1MembersInsert(requestParam: MembersService.postMembersServiceRcmsApi1MembersInsertRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/members/insert`,
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
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postMembersServiceRcmsApi1MembersUpdate(requestParam: MembersService.postMembersServiceRcmsApi1MembersUpdateRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/members/update`,
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
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **allowed_group_ids** `1`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postMembersServiceRcmsApi1MembersDelete(requestParam: MembersService.postMembersServiceRcmsApi1MembersDeleteRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/members/delete`,
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
     * ### **Member::update (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postMembersServiceRcmsApi1MeUpdate(requestParam: MembersService.postMembersServiceRcmsApi1MeUpdateRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/me/update`,
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
     * ### **Member::delete (v1)**
     *
     *
     * ## Controller parameters
     *
     * > **self_only** `true`
     *
     * @param requestBody
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @result any
     * @throws ApiError
     */
    public static async postMembersServiceRcmsApi1MeDelete(requestParam: MembersService.postMembersServiceRcmsApi1MeDeleteRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/me/delete`,
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

export namespace MembersService {
    export interface getMembersServiceRcmsApi1MembersRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        id?: Array<number>;
        cnt?: number;
        pageId?: number;
        sName?: string;
        sEmail?: string;
        sTel?: string;
        sAddress?: string;
        sTdfkCd?: string;
        groupId?: number;
    }
    export type getMembersServiceRcmsApi1MembersResponse = any;
    export interface getMembersServiceRcmsApi1MembersMemberIdRequest {
        memberId: number;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type getMembersServiceRcmsApi1MembersMemberIdResponse = any;
    export interface postMembersServiceRcmsApi1MembersInsertRequest {
        requestBody: {
            /**
             * Email
             */
            email: string;
            /**
             * Login ID
             */
            login_id?: string;
            /**
             * Password
             */
            login_pwd: string;
            /**
             * Nickname
             */
            nickname: string;
            /**
             * Family name
             */
            name1?: string;
            /**
             * Given name
             */
            name2?: string;
            /**
             * Sex
             */
            sex?: 'm' | 'f' | 'e';
            /**
             * Date of birth
             */
            birth?: string;
            /**
             * Image1
             */
            member_photo?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
                extension?: 'jpg' | 'gif' | 'png';
            };
            /**
             * Text
             */
            text: string;
            /**
             * Textarea
             */
            textarea?: string;
            /**
             * Radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: { key: string; label: string } | '' | '1' | '2' | '3';
            /**
             * Selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: { key: string; label: string } | '' | '1' | '2' | '3';
            /**
             * Checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<{ key: string; label: string } | '1' | '2' | '3'>;
            /**
             * Date
             */
            date?: string;
            relation?: number;
            /**
             * File
             */
            file?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
            };
            /**
             * /label/open_flg
             */
            open_flg?: 0 | 1;
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: 0 | 1;
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postMembersServiceRcmsApi1MembersInsertResponse = any;
    export interface postMembersServiceRcmsApi1MembersUpdateRequest {
        requestBody: {
            /**
             * /label/member_id
             */
            member_id: number;
            /**
             * Email
             */
            email?: string;
            /**
             * Login ID
             */
            login_id?: string;
            /**
             * Password
             */
            login_pwd?: string;
            /**
             * Nickname
             */
            nickname?: string;
            /**
             * Family name
             */
            name1?: string;
            /**
             * Given name
             */
            name2?: string;
            /**
             * Sex
             */
            sex?: 'm' | 'f' | 'e';
            /**
             * Date of birth
             */
            birth?: string;
            /**
             * Image1
             */
            member_photo?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
                extension?: 'jpg' | 'gif' | 'png';
            };
            /**
             * Text
             */
            text?: string;
            /**
             * Textarea
             */
            textarea?: string;
            /**
             * Radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: { key: string; label: string } | '' | '1' | '2' | '3';
            /**
             * Selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: { key: string; label: string } | '' | '1' | '2' | '3';
            /**
             * Checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<{ key: string; label: string } | '1' | '2' | '3'>;
            /**
             * Date
             */
            date?: string;
            relation?: number;
            /**
             * File
             */
            file?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
            };
            /**
             * /label/group_id
             */
            group_id?: 1;
            /**
             * /label/open_flg
             */
            open_flg?: 0 | 1;
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: 0 | 1;
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postMembersServiceRcmsApi1MembersUpdateResponse = any;
    export interface postMembersServiceRcmsApi1MembersDeleteRequest {
        requestBody: {
            /**
             * /label/member_id
             */
            member_id: number;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postMembersServiceRcmsApi1MembersDeleteResponse = any;
    export interface postMembersServiceRcmsApi1MeUpdateRequest {
        requestBody: {
            /**
             * Email
             */
            email?: string;
            /**
             * Login ID
             */
            login_id?: string;
            /**
             * Password
             */
            login_pwd?: string;
            /**
             * Nickname
             */
            nickname?: string;
            /**
             * Family name
             */
            name1?: string;
            /**
             * Given name
             */
            name2?: string;
            /**
             * Sex
             */
            sex?: 'm' | 'f' | 'e';
            /**
             * Date of birth
             */
            birth?: string;
            /**
             * Image1
             */
            member_photo?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
                extension?: 'jpg' | 'gif' | 'png';
            };
            /**
             * Text
             */
            text?: string;
            /**
             * Textarea
             */
            textarea?: string;
            /**
             * Radio
             * * 1 => radioOption1
             * * 2 => radioOption2
             * * 3 => radioOption3
             */
            radio?: { key: string; label: string } | '' | '1' | '2' | '3';
            /**
             * Selectbox
             * * 1 => selectBoxOption1
             * * 2 => selectBoxOption2
             * * 3 => selectBoxOption3
             */
            selectbox?: { key: string; label: string } | '' | '1' | '2' | '3';
            /**
             * Checkbox
             * * 1 => checkboxOption1
             * * 2 => checkboxOption2
             * * 3 => checkboxOption3
             */
            checkbox?: Array<{ key: string; label: string } | '1' | '2' | '3'>;
            /**
             * Date
             */
            date?: string;
            relation?: number;
            /**
             * File
             */
            file?: {
                /**
                 * File ID returned by File Upload API
                 */
                file_id?: string;
                /**
                 * File name
                 */
                file_nm?: string;
                /**
                 * Description
                 */
                desc?: string;
            };
            /**
             * /label/group_id
             */
            group_id?: Array<1 | 2>;
            /**
             * /label/open_flg
             */
            open_flg?: 0 | 1;
            /**
             * /label/login_ok_flg
             */
            login_ok_flg?: 0 | 1;
            /**
             * Validate
             */
            validate_only?: boolean;
        };
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postMembersServiceRcmsApi1MeUpdateResponse = any;
    export interface postMembersServiceRcmsApi1MeDeleteRequest {
        requestBody: any;
        outputFormat?: string;
        lang?: string;
        charset?: string;
    }
    export type postMembersServiceRcmsApi1MeDeleteResponse = any;
}
