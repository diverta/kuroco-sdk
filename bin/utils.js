const fs = require('fs-extra');
const path = require('path');
const childProcess = require('child_process');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');

const configurationFilePath = path.resolve(process.cwd(), 'kuroco.config.json');

module.exports = {
    /** load general configuration of KurocoSDK. */
    loadKurocoConfig: (p = configurationFilePath) => {
        try {
            const file = fs.readFileSync(p, { encoding: 'utf8' });
            return JSON.parse(file);
        } catch (e) {
            console.error(`a configuration file '${p}' you specified is not found or broken.`);
            console.error(`please run 'kuroco init' first, or define the file by yourself instead.`);
            process.exit(1);
        }
    },

    /** retrieve which one of JS/TS should be exported. */
    getSpecifedLanguage: (languageArg = '') => {
        let possiblyLanguagePattern = [
            { lang: 'ts', token: 'typescript' },
            { lang: 'ts', token: 'ts' },
            { lang: 'js', token: 'javascript' },
            { lang: 'js', token: 'js' },
        ];
        const matched = possiblyLanguagePattern.find(({ lang, token }) => languageArg.toUpperCase() === token.toUpperCase());
        return matched ? matched.lang : 'ts';
    },

    /** generate JS file. */
    generateJsFiles: (option, tsDir) => {
        function write({ output, standalone }, tsDir) {
            const outputDir = path.resolve(process.cwd(), output);
            const outputFile = path.resolve(outputDir, 'index.js');
            const entry = path.resolve(tsDir, 'index.ts');
            const webpackconfig = path.resolve(__dirname, 'webpack.config.forjs.js');
            const tsconfig = path.resolve(__dirname, 'tsconfig.forjs.json');
            
            rimraf.sync(outputDir);
            mkdirp.sync(outputDir);

            const tscCmd = `npx -p typescript tsc -p ${tsconfig} --outDir ${outputDir}`;
            const webpackCmd = `npx webpack-cli \
                --config ${webpackconfig} \
                --entry ${entry} \
                --output ${outputFile} \
                --silent`;
            const cmd = standalone ? webpackCmd : tscCmd;
            
            childProcess.spawnSync(cmd, { cwd: path.resolve(__dirname), shell: true, stdio: 'inherit' });
        }

        write(option, tsDir);
        rimraf.sync(tsDir);
    },

    /** provide package.json for lib use. */
    providePackageJson: (output) => {
        fs.copyFileSync(path.resolve(__dirname, 'package.lib.json'), path.resolve(output, 'package.json'));
    },

    /** load firebase configuration inside of kuroco config. */
    loadFirebaseConfigurations: () => {
        path.resolve(process.cwd(), 'kuroco.config.json');
        fs.writeFileSync(
            paths.tsconfigJsWithIncludes,
            JSON.stringify({
                include: [`${tsDir}/**/*.ts`],
            }),
            { overwrite: true }
        );
    },
};
