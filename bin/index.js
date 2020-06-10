#!/usr/bin/env node

'use strict';

const path = require('path');
const program = require('commander');
const mkdirp = require('mkdirp');
const pkg = require('../package.json');

const OpenAPI = require(path.resolve(__dirname, '../dist/index.js')).default;
const commandName = Object.keys(pkg.bin)[0];

const {
    loadKurocoConfig,
    getSpecifedLanguage,
    generateJsFiles,
    providePackageJson,
    loadFirebaseConfigurations,
} = require('./utils');
const {
    installDependencies,
} = require('./deps');

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
        .option('--lib', 'Output as library (exporting package.json)', false)
        .option('--standalone', 'Output as executable file on browser (JavaScript only)', false)
        .option('--exportApiInformations', 'Generate API informatinos', false)
        .option('--write', 'Export files (for developper option)', true)
        .description('generates javascript/typescript sourcecodes.')
        .action((cmd, options) => {
            if (OpenAPI) {

                installDependencies(process.cwd(), 'firebase');

                switch (getSpecifedLanguage(options.language)) {
                    case 'ts':
                        OpenAPI.generate({
                            ...options,
                            config: loadKurocoConfig(),
                        });
                        break;
                    case 'js':
                        const tmpDir = path.resolve(__dirname, '..', '.tmp');
                        mkdirp.sync(tmpDir);
                        // executes toward tmpDir tentatively.
                        OpenAPI.generate({
                            ...options,
                            config: loadKurocoConfig(),
                            output: tmpDir,
                        });
                        // executes tsc to generate JS from TS, then remake output dir.
                        generateJsFiles(options, tmpDir);
                        break;
                }
                if (options.lib) {
                    providePackageJson(options.output)
                }
            }
        })
        .on('--help', () => {
            console.log('');
            console.log('Examples:');
            console.log('');
            console.log(`  $ ${commandName} generate --input openapi.json`);
            console.log(`  $ ${commandName} generate -i openapi.json --exportApiInformations`);
        });
}

function applyPull() {
    const defaultOutputPath = path.resolve(process.cwd(), 'openapi.json');
    program
        .command('pull [options]')
        .description('pulls openapi.json from the server.')
        .option('-o, --output <value>', 'Output path', defaultOutputPath)
        .option('--write <value>', 'Export files (for developper option)', true)
        .action((cmd, options) => {
            if (OpenAPI) {
                OpenAPI.pull({
                    ...options,
                    config: loadKurocoConfig(),
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
