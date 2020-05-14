/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { $ModelWithString } from './$ModelWithString';
import { $ModelThatExtends } from './$ModelThatExtends';

export const $ModelThatExtendsExtends = {
    properties: {
        ...$ModelWithString.properties,
        ...$ModelThatExtends.properties,
        propExtendsC: {
            type: 'string',
        },
        propExtendsD: {
            type: 'ModelWithString',
        },
    },
};