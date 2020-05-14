import { ValidatorBase, ValidatorType, ValidatorKey } from '.';

export class SdkKey extends ValidatorBase {
    public name = ValidatorKey.SdkKey;
    public message = "Enter your RCMS server's auth token";
    public validate(token: any): boolean | string {
        this.validatorTypes = [ValidatorType.exists, ValidatorType.stringType, ValidatorType.alphanumeric];
        return super.validate(token);
    }
}
