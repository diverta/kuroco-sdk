import * as OpenAPI from '.';

describe('index', () => {
    it('parses v3 without issues', () => {
        OpenAPI.generate({
            input: './test/generator/mock/v3/spec.json',
            output: './test/generator/result/v3/',
            write: false,
            exportApiInformations: false,
            config: {} as any,
        });
    });
});
