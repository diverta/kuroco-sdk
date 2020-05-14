/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */


/**
 * This is a model with one enum
 */
export interface ModelWithEnum {
    /**
     * This is a simple enum with strings
     */
    Test?: ModelWithEnum.Test;
}

export namespace ModelWithEnum {

    /**
     * This is a simple enum with strings
     */
    export enum Test {
        SUCCESS = 'Success',
        WARNING = 'Warning',
        ERROR = 'Error',
    }


}
