/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

export const $ModelWithNestedProperties = {
    properties: {
        first: {
            properties: {
                second: {
                    properties: {
                        third: {
                            type: 'string',
                            isReadOnly: true,
                            isRequired: true,
                            isNullable: true,
                        },
                    },
                    isReadOnly: true,
                    isRequired: true,
                    isNullable: true,
                },
            },
            isReadOnly: true,
            isRequired: true,
            isNullable: true,
        },
    },
};