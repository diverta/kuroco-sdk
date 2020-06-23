import { ValidatorBase, ValidatorType, ValidatorKey } from '.';

export class ManagementUrl extends ValidatorBase {
    public name = ValidatorKey.ManagementUrl;
    public message = `Enter your Kuroco management site URL`;
    public validate(host: any): boolean | string {
        this.validatorTypes = [ValidatorType.exists, ValidatorType.stringType, ValidatorType.URL];
        return super.validate(host);
    }
}
