/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */

import { ModelWithString } from './ModelWithString';

/**
 * This is a model with one nested property
 */
export interface ModelWithProperties {
    required: string;
    readonly requiredAndReadOnly: string;
    requiredAndNullable: string | null;
    string?: string;
    number?: number;
    boolean?: boolean;
    reference?: ModelWithString;
}
