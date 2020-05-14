/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelWithString } from './ModelWithString';

/**
 * This is a model with duplicated imports
 */
export interface ModelWithDuplicateImports {
    propA?: ModelWithString;
    propB?: ModelWithString;
    propC?: ModelWithString;
}
