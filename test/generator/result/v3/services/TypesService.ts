/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ApiError, catchGenericError } from '../core/ApiError';
import { request as __request } from '../core/request';
import { OpenAPI } from '../core/OpenAPI';
import { Auth } from '../core/Auth';

export class TypesService {
    /**
     * @param parameterNumber This is a number parameter
     * @param parameterString This is a string parameter
     * @param parameterBoolean This is a boolean parameter
     * @param parameterObject This is an object parameter
     * @param parameterArray This is an array parameter
     * @param parameterDictionary This is a dictionary parameter
     * @param parameterEnum This is an enum parameter
     * @param id This is a number parameter
     * @result number Response is a simple number
     * @result string Response is a simple string
     * @result boolean Response is a simple boolean
     * @result any Response is a simple object
     * @throws ApiError
     */
    public static async types(requestParam: TypesService.typesRequest): Promise<number | string | boolean | any> {

        const request = async () =>
        await __request({
            method: 'get',
            path: `/api/v${requestParam.apiVersion}/types`,
            query: {
                'parameterNumber': requestParam.parameterNumber,
                'parameterString': requestParam.parameterString,
                'parameterBoolean': requestParam.parameterBoolean,
                'parameterObject': requestParam.parameterObject,
                'parameterArray': requestParam.parameterArray,
                'parameterDictionary': requestParam.parameterDictionary,
                'parameterEnum': requestParam.parameterEnum,
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

export namespace TypesService {
    export interface typesRequest {
        parameterNumber: number = 123,
        parameterString: string | null = 'default',
        parameterBoolean: boolean | null = true,
        parameterObject: any = null,
        parameterArray: Array<string> | null,
        parameterDictionary: any,
        parameterEnum: ('Success' | 'Warning' | 'Error') | null,
        id?: number,
    };
    export type typesResponse = number | string | boolean | any;
}

