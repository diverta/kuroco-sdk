import { ApiUrl, SdkKey, Validator } from './validator';

const extract2promptOpt = (validator: Validator) => ({
    name: validator.name,
    type: validator.type,
    message: validator.message,
    validate: validator.validate,
    default: validator.default,
});

export const prompts = [SdkKey, ApiUrl].map(ValidatorClazz => extract2promptOpt(new ValidatorClazz()));
