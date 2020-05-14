/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */


/**
 * This is a model with one enum
 */
export interface ModelWithEnumFromDescription {
    /**
     * Success=1,Warning=2,Error=3
     */
    Test?: ModelWithEnumFromDescription.Test;
}

export namespace ModelWithEnumFromDescription {

    /**
     * Success=1,Warning=2,Error=3
     */
    export enum Test {
        SUCCESS = 1,
        WARNING = 2,
        ERROR = 3,
    }


}
