/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

interface Config {
    SAML_URL: string;
    BASE: string;
    VERSION: string;
    TOKEN: string;
    SECURITY: { [definedName: string]: object };
}

export const OpenAPI: Config = {
    SAML_URL: 'https://kuroco-dev.r-cms.jp/direct/login/saml_login/?spid=1',
    BASE: 'https://kuroco-dev.r-cms.jp',
    VERSION: '1',
    TOKEN: '',
    SECURITY: {
        'Token-Auth': {
            type: 'apiKey',
            in: 'header',
            name: 'X-RCMS-API-ACCESS-TOKEN',
        },
    },
};
