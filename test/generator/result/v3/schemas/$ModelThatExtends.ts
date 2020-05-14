/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { $ModelWithString } from './$ModelWithString';

export const $ModelThatExtends = {
    properties: {
        ...$ModelWithString.properties,
        propExtendsA: {
            type: 'string',
        },
        propExtendsB: {
            type: 'ModelWithString',
        },
    },
};