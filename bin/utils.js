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
            console.error(`please run '${commandName} init' first, or define the file by yourself instead.`);
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
    generateJsFiles: (output, tsDir) => {
        const tsconfigForJs = path.resolve(__dirname, '..', 'tsconfig.forjs.json');

        function writeTsconfigForJs(tsconfigForJs, tsDir) {
            rimraf.sync(tsconfigForJs);
            fs.writeFileSync(
                tsconfigForJs,
                JSON.stringify({
                    extends: './tsconfig.json',
                    include: [`${tsDir}/**/*.ts`],
                }),
            );
        }
        function write(tsconfigForJs, output) {
            rimraf.sync(output);
            mkdirp.sync(output);
            const buildCmd = `npx tsc -p ${tsconfigForJs} --outDir ${output}`;
            childProcess.spawnSync(buildCmd, { cwd: process.cwd(), shell: true, stdio: 'inherit' });
        }
        function removeTsdDir(tsDir) {
            rimraf.sync(tsDir);
        }

        writeTsconfigForJs(tsconfigForJs, tsDir);
        write(tsconfigForJs, output);
        removeTsdDir(tsDir);
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
