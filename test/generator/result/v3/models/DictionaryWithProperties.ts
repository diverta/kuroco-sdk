/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { Dictionary } from './Dictionary';

/**
 * This is a complex dictionary
 */
export type DictionaryWithProperties = Dictionary<{
    foo?: string,
    bar?: string,
}>;