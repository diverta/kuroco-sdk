#!/usr/bin/env node

'use strict';

const path = require('path');
const program = require('commander');
const mkdirp = require('mkdirp');
const pkg = require('../package.json');
const { handleError } = require('../dist/__base');

const OpenAPI = require(path.resolve(__dirname, '../dist/index.js')).default;
const commandName = Object.keys(pkg.bin)[0];

const {
    loadKurocoConfig,
    getSpecifedLanguage,
    generateJsFiles,
    providePackageJson,
    extructApiTitle,
} = require('./utils');
const {
    installDependencies,
} = require('./deps.js');

program.version(pkg.version);

function applyGenerate() {
    const defaultConfigurationFilePath = path.resolve(process.cwd(), 'kuroco.config.json');
    const defaultInputPath = path.resolve(process.cwd(), 'openapi.json');
    const defaultOutputPath = path.resolve(process.cwd(), 'generated');
    program
        .command('generate [options]')
        .option('-c, --config <value>', 'Path to kuroco configuration', defaultConfigurationFilePath)
        .option('-i, --input <value>', 'Path to swagger specification', defaultInputPath)
        .option('-o, --output <value>', 'Output directory', defaultOutputPath)
        .option('-l, --language <value>', 'Language either TypeScript or JavaScript', 'TypeScript')
        .option('--lib', 'Output as library (exporting package.json)', false)
        .option('--standalone', 'Output as executable file on browser (JavaScript only)', false)
        .option('--exportApiInformations', 'Generate API informatinos', false)
        .option('--write', 'Export files (for developper option)', true)
        .description('generates javascript/typescript sourcecodes.')
        .action((cmd, options) => {
            try {
                if (OpenAPI) {

                    installDependencies(process.cwd(), [
                        'firebase',
                        '@vimeo/player',
                    ]);

                    switch (getSpecifedLanguage(options.language)) {
                        case 'ts':
                            OpenAPI.generate({
                                ...options,
                                config: loadKurocoConfig(options.config),
                            });
                            break;
                        case 'js':
                            const tmpDir = path.resolve(__dirname, '..', '.tmp');
                            mkdirp.sync(tmpDir);

                            const config = loadKurocoConfig(options.config);

                            // executes toward tmpDir tentatively.
                            OpenAPI.generate({
                                ...options,
                                config,
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
            } catch(e) { handleError(e); }
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
    const defaultConfigurationFilePath = path.resolve(process.cwd(), 'kuroco.config.json');
    const defaultOutputPath = path.resolve(process.cwd(), 'openapi.json');
    program
        .command('pull [options]')
        .description('pulls openapi.json from the server.')
        .option('-c, --config <value>', 'Path to kuroco configuration', defaultConfigurationFilePath)
        .option('-i, --apiId <value>', 'Specific id of target API', 1)
        .option('-o, --output <value>', 'Output path', defaultOutputPath)
        .option('--write <value>', 'Export files (for developper option)', true)
        .action((cmd, options) => {
            try {
                if (OpenAPI) {
                    OpenAPI.pull({
                        ...options,
                        config: loadKurocoConfig(options.config),
                    });
                }
            } catch(e) { handleError(e); }
        })
        .on('--help', () => {
            console.log('');
            console.log('Examples:');
            console.log('');
            console.log(`  $ ${commandName} pull`);
            console.log('');
            console.log(`# If you want to pull a difinition from a specific API which is not default one,`);
            console.log(`  $ ${commandName} pull -c secondapi.kuroco.config.json -i 2`);
        });
}

applyGenerate();
applyPull();

program.parse(process.argv);
