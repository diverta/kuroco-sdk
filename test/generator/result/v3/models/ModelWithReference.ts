/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelWithProperties } from './ModelWithProperties';

/**
 * This is a model with one property containing a reference
 */
export interface ModelWithReference {
    prop?: ModelWithProperties;
}
