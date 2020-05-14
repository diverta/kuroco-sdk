/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelThatExtends } from './ModelThatExtends';
import { ModelWithString } from './ModelWithString';

/**
 * This is a model that extends another model
 */
export interface ModelThatExtendsExtends extends ModelWithString, ModelThatExtends {
    propExtendsC?: string;
    propExtendsD?: ModelWithString;
}
