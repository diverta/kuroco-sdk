/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { LocalStorage } from '../core/LocalStorage';

export class FilesService {
    /**
     *
     * ### **Files::upload (v1)**
     *
     *
     * @param outputFormat Format (json|xml|csv)
     * @param lang Language
     * @param charset Charset
     * @param requestBody
     * @result any
     * @throws ApiError
     */
    public static async postFilesServiceRcmsApi1FilesUpload(requestParam: FilesService.postFilesServiceRcmsApi1FilesUploadRequest): Promise<any> {
        const shouldHookToken =
            Object.keys({
                'Token-Auth': OpenAPI.SECURITY['Token-Auth'],
            }).length > 0;

        const request = async () =>
            await __request({
                headers: shouldHookToken ? { [(OpenAPI.SECURITY['Token-Auth'] as any).name]: `${LocalStorage.getAccessToken()}` } : {},
                method: 'post',
                path: `/rcms-api/1/files/upload`,
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

export namespace FilesService {
    export interface postFilesServiceRcmsApi1FilesUploadRequest {
        outputFormat?: string;
        lang?: string;
        charset?: string;
        requestBody?: any;
    }
    export type postFilesServiceRcmsApi1FilesUploadResponse = any;
}
