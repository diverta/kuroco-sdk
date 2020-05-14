/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { Dictionary } from './Dictionary';

/**
 * This is a model with nested enums
 */
export interface ModelWithNestedEnums {
    dictionaryWithEnum?: Dictionary<('Success' | 'Warning' | 'Error')>;
    dictionaryWithEnumFromDescription?: Dictionary<(1 | 2 | 3)>;
    arrayWithEnum?: Array<('Success' | 'Warning' | 'Error')>;
    arrayWithDescription?: Array<(1 | 2 | 3)>;
}
