/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class MultipartService {
    /**
     * @result any OK
     * @throws ApiError
     */
    public static async multipartResponse(requestParam: MultipartService.multipartResponseRequest): Promise<{
        file?: string,
        metadata?: {
            foo?: string,
            bar?: string,
        },
    }> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/api/v${requestParam.apiVersion}/multipart`,
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

export namespace MultipartService {
    export interface multipartResponseRequest {
    };
    export type multipartResponseResponse = {
        file?: string,
        metadata?: {
            foo?: string,
            bar?: string,
        },
    };
}

