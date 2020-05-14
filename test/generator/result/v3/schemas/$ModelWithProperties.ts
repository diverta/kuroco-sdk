/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

export const $ModelWithProperties = {
    properties: {
        required: {
            type: 'string',
            isRequired: true,
        },
        requiredAndReadOnly: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        requiredAndNullable: {
            type: 'string',
            isRequired: true,
            isNullable: true,
        },
        string: {
            type: 'string',
        },
        number: {
            type: 'number',
        },
        boolean: {
            type: 'boolean',
        },
        reference: {
            type: 'ModelWithString',
        },
    },
};