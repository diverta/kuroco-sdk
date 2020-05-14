/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class UploadService {
    /**
     * @param file Supply a file reference for upload
     * @result boolean
     * @throws ApiError
     */
    public static async uploadFile(requestParam: UploadService.uploadFileRequest): Promise<boolean> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/api/v${requestParam.apiVersion}/upload`,
            formData: {
                'file': requestParam.file,
            },
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

export namespace UploadService {
    export interface uploadFileRequest {
        file: File,
    };
    export type uploadFileResponse = boolean;
}

