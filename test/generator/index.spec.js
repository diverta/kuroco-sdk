const OpenAPI = require('../../dist');
const glob = require('glob');
const fs = require('fs');

describe('generation', () => {
    test.skip('', () => {
        OpenAPI.generate({
            input: './test/generator/mock/v3/spec.json',
            output: './test/generator/result/v3/',
        });
    });

    // test.each(glob.sync('./test/generator/result/v3/**/*.ts').map(file => [file]))('file(%s)', file => {
    //     const content = fs.readFileSync(file, 'utf8').toString();
    //     expect(content).toMatchSnapshot(file);
    // });
});
