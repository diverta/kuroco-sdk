/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class HeaderService {
    /**
     * @result string Successful response
     * @throws ApiError
     */
    public static async callWithResultFromHeader(requestParam: HeaderService.callWithResultFromHeaderRequest): Promise<string> {

        const request = async () =>
        await __request({
            method: 'post',
            path: `/api/v${requestParam.apiVersion}/header`,
            responseHeader: 'operation-location',
        });
        if (!result.ok) {
            switch (result.status) {
                case 400: throw new ApiError(result, `400 server error`);
                case 500: throw new ApiError(result, `500 server error`);
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

export namespace HeaderService {
    export interface callWithResultFromHeaderRequest {
    };
    export type callWithResultFromHeaderResponse = string;
}

