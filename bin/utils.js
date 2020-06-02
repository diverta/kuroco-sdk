const fs = require('fs-extra');
const path = require('path');

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
        const paths = {
            output: path.resolve(output),
            tsconfigJs: path.resolve(__dirname, '..', 'ext', 'tsconfig.forjs.json'),
            tsconfigJsWithIncludes: path.resolve(__dirname, '..', 'ext', 'tsconfig.forjs.includes.json'),
        };

        function writeTsconfigJsWithInjectIncludes(paths) {
            fs.writeFileSync(
                paths.tsconfigJsWithIncludes,
                JSON.stringify({
                    include: [`${tsDir}/**/*.ts`],
                }),
                { overwrite: true }
            );
        }

        function write(paths, buildCmd) {
            rimraf.sync(paths.output);
            mkdirp.sync(paths.output);
            childProcess.spawnSync(buildCmd, { cwd: process.cwd(), shell: true, stdio: 'inherit' });
        }

        writeTsconfigJsWithInjectIncludes(paths);
        const buildCmd = `npx tsc -p ${paths.tsconfigJs} --outDir ${paths.output}`;
        write(paths, buildCmd);
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
