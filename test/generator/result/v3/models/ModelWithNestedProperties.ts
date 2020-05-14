/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */


/**
 * This is a model with one nested property
 */
export interface ModelWithNestedProperties {
    readonly first: {
        readonly second: {
            readonly third: string | null,
        } | null,
    } | null;
}
