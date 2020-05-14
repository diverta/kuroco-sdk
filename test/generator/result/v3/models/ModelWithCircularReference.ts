/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */


/**
 * This is a model with one property containing a circular reference
 */
export interface ModelWithCircularReference {
    prop?: ModelWithCircularReference;
}
