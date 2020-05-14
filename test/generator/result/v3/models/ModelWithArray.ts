/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelWithString } from './ModelWithString';

/**
 * This is a model with one property containing an array
 */
export interface ModelWithArray {
    prop?: Array<ModelWithString>;
    propWithFile?: Array<File>;
    propWithNumber?: Array<number>;
}
