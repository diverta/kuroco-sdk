/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

interface Config {
    BASE: string;
    VERSION: string;
    TOKEN: string;
    SECURITY: { [definedName: string]: object };
}

export const OpenAPI: Config = {
    BASE: '/api',
    VERSION: '1',
    TOKEN: '',
    SECURITY: {
    }
};