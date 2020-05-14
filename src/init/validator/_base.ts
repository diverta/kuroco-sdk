import isValidPath from 'is-valid-path';
import validator from 'validator';

export abstract class ValidatorBase {
    public type = 'input';
    public name = 'BASE';
    public message = 'OOPS! set correct message on child class.';

    private _validatorTypes: ValidatorType[] = [];
    protected get validatorTypes() {
        return this._validatorTypes;
    }
    protected set validatorTypes(validatorTypes: ValidatorType[]) {
        this._validatorTypes = validatorTypes;
    }

    protected validate(testee: any): boolean | string {
        return validatorsFor(this.validatorTypes).every(validator => validator(testee)) ? true : 'invalid value: please confirm inputs.';
    }
}

function validatorsFor(validatorTypes: ValidatorType[] = []) {
    return validatorTypes.reduce((validators, validatorType) => [...validators, validatorFor(validatorType)], [] as ((arg: any) => boolean)[]);

    function validatorFor(validatorType: ValidatorType) {
        switch (validatorType) {
            case ValidatorType.exists:
                return (arg: any) => arg !== null && arg !== undefined && arg !== '';
            case ValidatorType.stringType:
                return (arg: any) => typeof arg === 'string';
            case ValidatorType.numberType:
                return (arg: any) => arg && !isNaN(Number(arg));
            case ValidatorType.alphanumeric:
                return (arg: any) => arg && /^[a-zA-Z0-9]+$/.test(arg);
            case ValidatorType.alphanumericSymbol:
                return (arg: any) => arg && /^[a-zA-Z0-9_-]+$/.test(arg);
            case ValidatorType.path:
                return (arg: any) => arg && isValidPath(`${arg}`);
            case ValidatorType.port:
                return (arg: any) => validator.isPort(`${arg}`);
            case ValidatorType.URL:
                return (arg: any) => arg && (validator.isURL(arg) || /^http(|s):\/\/localhost*/.test(arg));

            default:
                throw Error(`unexpected validator type: ${validatorTypes}`);
        }
    }
}

export enum ValidatorType {
    exists = 'exists',
    stringType = 'stringType',
    numberType = 'numberType',
    alphanumeric = 'alphanumeric',
    alphanumericSymbol = 'alphanumericSymbol',
    port = 'isPort',
    path = 'path',
    URL = 'URL',
}

export enum ValidatorKey {
    SdkKey = 'sdk_key',
    ApiUrl = 'api_url',
}

export type Validator = ValidatorBase & {
    validate: Function;
    default?: string;
};
