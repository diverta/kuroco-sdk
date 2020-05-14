#!/usr/bin/env node

'use strict';

const fs = require('fs-extra');
const path = require('path');
const childProcess = require('child_process');
const program = require('commander');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const pkg = require('../package.json');

const OpenAPI = require(path.resolve(__dirname, '../dist/index.js')).default;

const commandName = Object.keys(pkg.bin)[0];

program.version(pkg.version);

// TODO: should export 'finished message' in each functions done, like 'the process xxx was succeeded!'

function applyGenerate() {
    const defaultInputPath = path.resolve(process.cwd(), 'openapi.json');
    const defaultOutputPath = path.resolve(process.cwd(), 'generated');
    program
        .command('generate [options]')
        .option('-i, --input <value>', 'Path to swagger specification', defaultInputPath)
        .option('-o, --output <value>', 'Output directory', defaultOutputPath)
        .option('-l, --language <value>', 'Language either TypeScript or JavaScript', 'TypeScript')
        .option('--exportApiInformations', 'Generate API informatinos', false)
        .option('--write', 'Export files (for developper option)', true)
        .description('generates javascript/typescript sourcecodes.')
        .action((cmd, options) => {
            if (OpenAPI) {
                OpenAPI.generate({
                    ...options,
                });

                // executes tsc to generate JS from TS, then remake output dir.
                if (getSpecifedLanguage(options.language) === 'js') {
                    generateJsFiles(options.output);
                }
            }
        })
        .on('--help', () => {
            console.log('');
            console.log('Examples:');
            console.log('');
            console.log(`  $ ${commandName} generate --input openapi.json`);
            console.log(`  $ ${commandName} generate -I openapi.json --exportApiInformations`);
        });

    // TODO: should mv to external file to reduce complexibilities.
    function getSpecifedLanguage(languageArg = '') {
        let possiblyLanguagePattern = [
            { lang: 'ts', token: 'typescript' },
            { lang: 'ts', token: 'ts' },
            { lang: 'js', token: 'javascript' },
            { lang: 'js', token: 'js' },
        ];
        const matched = possiblyLanguagePattern.find(({ lang, token }) => languageArg.toUpperCase() === token.toUpperCase());
        return matched ? matched.lang : 'ts';
    }

    // TODO: should mv to external file to reduce complexibilities.
    function generateJsFiles(output) {
        const paths = {
            output: path.resolve(output),
            tmpDir: path.resolve(require('os').tmpdir(), `${new Date().getTime()}`),
            tsconfigJs: path.resolve(__dirname, '..', 'ext', 'tsconfig.forjs.json'),
            tsconfigJsWithIncludes: path.resolve(__dirname, '..', 'ext', 'tsconfig.forjs.includes.json'),
        };

        function writeTsconfigJsWithInjectIncludes(paths) {
            fs.writeFileSync(
                paths.tsconfigJsWithIncludes,
                JSON.stringify({
                    include: [`${paths.output}/**/*.ts`],
                }),
                { overwrite: true }
            );
        }

        function write(paths, buildCmd) {
            mkdirp.sync(paths.tmpDir);
            childProcess.spawnSync(buildCmd, { cwd: process.cwd(), shell: true, stdio: 'inherit' });
            rimraf.sync(paths.output);
            mkdirp.sync(paths.output);
            fs.moveSync(paths.tmpDir, output, { overwrite: true });
        }

        writeTsconfigJsWithInjectIncludes(paths);
        const buildCmd = `npx tsc -p ${paths.tsconfigJs} --outDir ${paths.tmpDir}`;
        write(paths, buildCmd);
    }
}

function applyPull() {
    const defaultInputPath = path.resolve(process.cwd(), 'kuroco.config.json');
    const defaultOutputPath = path.resolve(process.cwd(), 'openapi.json');
    program
        .command('pull [options]')
        .description('pulls openapi.json from the server.')
        .option('-i, --input <value>', 'Input configuration file path', defaultInputPath)
        .option('-o, --output <value>', 'Output path', defaultOutputPath)
        .option('--write <value>', 'Export files (for developper option)', true)
        .action((cmd, options) => {
            let config;
            try {
                const file = fs.readFileSync(options.input, { encoding: 'utf8' });
                config = JSON.parse(file);
            } catch (e) {
                console.error(`a configuration file '${options.input}' you specified is not found or broken.`);
                console.error(`please run '${commandName} init' first, or define the file by yourself instead.`);
                process.exit(1);
            }
            if (OpenAPI) {
                OpenAPI.pull({
                    sdkKey: config.sdk_key,
                    host: config.api_url,
                    ...options,
                });
            }
        })
        .on('--help', () => {
            console.log('');
            console.log('Examples:');
            console.log('');
            console.log(`  $ ${commandName} pull`);
        });
}

function applyInit() {
    program
        .command('init [options]')
        .option('--write <value>', 'Export files (for developper option)', true)
        .description('initializes meta informations.')
        .action((cmd, options) => {
            if (OpenAPI) {
                OpenAPI.init({
                    sdkKey: 'ef57d2cb6636fa4701fc8b62a2efde54',
                    host: 'https://kuroco-dev.r-cms.jp',
                    ...options,
                });
            }
        })
        .on('--help', () => {
            console.log('');
            console.log('Examples:');
            console.log('');
            console.log(`  $ ${commandName} init`);
        });
}

applyGenerate();
applyPull();
applyInit();

program.parse(process.argv);
