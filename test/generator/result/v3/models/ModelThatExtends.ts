/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelWithString } from './ModelWithString';

/**
 * This is a model that extends another model
 */
export interface ModelThatExtends extends ModelWithString {
    propExtendsA?: string;
    propExtendsB?: ModelWithString;
}
