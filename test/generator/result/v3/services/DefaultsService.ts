/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelWithString } from '../models/ModelWithString';
import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class DefaultsService {
    /**
     * @param parameterString This is a simple string
     * @param parameterNumber This is a simple number
     * @param parameterBoolean This is a simple boolean
     * @param parameterEnum This is a simple enum
     * @param parameterModel This is a simple model
     * @throws ApiError
     */
    public static async callWithDefaultParameters(requestParam: DefaultsService.callWithDefaultParametersRequest): Promise<void> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/api/v${requestParam.apiVersion}/defaults`,
            query: {
                'parameterString': requestParam.parameterString,
                'parameterNumber': requestParam.parameterNumber,
                'parameterBoolean': requestParam.parameterBoolean,
                'parameterEnum': requestParam.parameterEnum,
                'parameterModel': requestParam.parameterModel,
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

export namespace DefaultsService {
    export interface callWithDefaultParametersRequest {
        parameterString: string | null = 'Hello World!',
        parameterNumber: number | null = 123,
        parameterBoolean: boolean | null = true,
        parameterEnum: ('Success' | 'Warning' | 'Error') = 'Success',
        parameterModel: ModelWithString | null = {
            "prop": "Hello World"
        },
    };
    export type callWithDefaultParametersResponse = void;
}

