/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

export const $ModelWithPattern = {
    properties: {
        key: {
            type: 'string',
            isRequired: true,
            maxLength: 64,
            pattern: '^[a-zA-Z0-9_]*$',
        },
        name: {
            type: 'string',
            isRequired: true,
            maxLength: 255,
        },
        enabled: {
            type: 'boolean',
            isReadOnly: true,
        },
        modified: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
    },
};