const fs = require('fs-extra');
const path = require('path');
const childProcess = require('child_process');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

const configurationFilePath = path.resolve(process.cwd(), 'kuroco.config.json');

module.exports = {
    /** load general configuration of KurocoSDK. */
    loadKurocoConfig: (p = configurationFilePath) => {
        const file = fs.readFileSync(p, { encoding: 'utf8' });
        const json = JSON.parse(file);
        if (json === undefined) {
            throw Error(`a configuration file '${p}' is broken.`);
        }
        return json;
    },

    /** retrieve which one of JS/TS should be exported. */
    getSpecifedLanguage: (languageArg = '') => {
        let possiblyLanguagePattern = [
            { lang: 'ts', token: 'typescript' },
            { lang: 'ts', token: 'ts' },
            { lang: 'js', token: 'javascript' },
            { lang: 'js', token: 'js' },
        ];
        const matched = possiblyLanguagePattern.find(({ token }) => languageArg.toUpperCase() === token.toUpperCase());
        return matched ? matched.lang : 'ts';
    },

    /** generate JS file. */
    generateJsFiles: (option, tsDir) => {

        function extructApiTitle(input) {
            function replaceInvalidChar(str) {
                return str.replace(/[^\x00-\x7F]/g, '').replace(/\s+|\(|\)/g, '');
            }

            const p = path.resolve(input);
            const def = fs.readJSONSync(p);
            return replaceInvalidChar(def.info.title);
        }

        function write({ input, output, standalone }, tsDir) {
            const { webpack, tsconfig } = require('./etc');
            
            const outputDir = path.resolve(process.cwd(), output);
            rimraf.sync(outputDir);
            mkdirp.sync(outputDir);

            const tscCmd = `npx -p typescript tsc \
                -p ${tsconfig} \
                --outDir ${path.resolve(process.cwd(), output)}`;
            const webpackCmd = `npx webpack-cli \
                --config ${webpack} \
                --entry ${path.resolve(tsDir, 'index.ts')} \
                --output ${path.resolve(outputDir, 'index.js')} \
                --env.API_NAME ${extructApiTitle(input)}
                --silent`;
            const cmd = standalone ? webpackCmd : tscCmd;

            childProcess.spawnSync(cmd, { cwd: path.resolve(__dirname), shell: true, stdio: 'inherit' });
        }

        write(option, tsDir);
        rimraf.sync(tsDir);
    },

    /** provide package.json for lib use. */
    providePackageJson: (output) => {
        const { packageJSON } = require('./etc');
        fs.copyFileSync(packageJSON, path.resolve(output, 'package.json'));
    },
};
