/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelWithString } from '../models/ModelWithString';
import { ModelWithString } from '../models/ModelWithString';
import { ModelWithString } from '../models/ModelWithString';
import { ModelWithString } from '../models/ModelWithString';
import { ModelWithEnum } from '../models/ModelWithEnum';
import { ModelWithArray } from '../models/ModelWithArray';
import { ModelWithDictionary } from '../models/ModelWithDictionary';
import { ModelWithString } from '../models/ModelWithString';
import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class ComplexService {
    /**
     * @param parameterObject Parameter containing object
     * @param parameterReference Parameter containing reference
     * @result ModelWithString Successful response
     * @throws ApiError
     */
    public static async complexTypes(requestParam: ComplexService.complexTypesRequest): Promise<Array<ModelWithString>> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/api/v${requestParam.apiVersion}/complex`,
            query: {
                'parameterObject': requestParam.parameterObject,
                'parameterReference': requestParam.parameterReference,
            },
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
    /**
     * @param id
     * @param requestBody
     * @result ModelWithString Success
     * @throws ApiError
     */
    public static async complexParams(requestParam: ComplexService.complexParamsRequest): Promise<ModelWithString> {

        const request = async () =>
        await __request({
            method: 'put',
            path: `/api/v${requestParam.apiVersion}/complex/${requestParam.id}`,
            body: requestParam.requestBody,
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

export namespace ComplexService {
    export interface complexTypesRequest {
        parameterObject: {
            first?: {
                second?: {
                    third?: string,
                },
            },
        },
        parameterReference: ModelWithString,
    };
    export type complexTypesResponse = Array<ModelWithString>;
    export interface complexParamsRequest {
        id: number,
        requestBody?: {
            readonly key: string | null,
            name: string | null,
            enabled?: boolean,
            readonly type: ('Monkey' | 'Horse' | 'Bird'),
            listOfModels?: Array<ModelWithString> | null,
            listOfStrings?: Array<string> | null,
            parameters:  |  |  | ,
            readonly user?: {
                readonly id?: number,
                readonly name?: string | null,
            },
        },
    };
    export type complexParamsResponse = ModelWithString;
}

