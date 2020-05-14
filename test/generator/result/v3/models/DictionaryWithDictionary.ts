/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { Dictionary } from './Dictionary';

/**
 * This is a string dictionary
 */
export type DictionaryWithDictionary = Dictionary<Dictionary<string>>;