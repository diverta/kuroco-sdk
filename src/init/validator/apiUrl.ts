import { ValidatorBase, ValidatorType, ValidatorKey } from '.';

export class ApiUrl extends ValidatorBase {
    public name = ValidatorKey.ApiUrl;
    public message = `Enter your RCMS server's URL`;
    public validate(host: any): boolean | string {
        this.validatorTypes = [ValidatorType.exists, ValidatorType.stringType, ValidatorType.URL];
        return super.validate(host);
    }
}
