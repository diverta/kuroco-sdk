import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as path from 'path';
import * as rimraf from 'rimraf';
import { Client } from '../client/interfaces/Client';
import { Templates } from './readHandlebarsTemplates';
import { writeClientIndex } from './writeClientIndex';
import { writeClientModels } from './writeClientModels';
import { writeClientSchemas } from './writeClientSchemas';
import { writeClientServices } from './writeClientServices';
import { writeClientSettings } from './writeClientSettings';
import { writeApiInfo } from './writeApiInfo';
import { writeAuth } from './writeAuth';

function copySupportFile(filePath: string, outputPath: string): void {
    // TODO: add-hock fixing. to prevent runtime error on running actual index.js & test,
    // because those have different base path.
    const fromJS = path.resolve(__dirname, `../../../src/generator/templates/${filePath}`);
    const fromTS = path.resolve(__dirname, `../templates/${filePath}`);
    const p = fs.existsSync(fromJS) ? fromJS : fromTS;
    fs.copyFileSync(path.resolve(__dirname, p), path.resolve(outputPath, filePath));
}

/**
 * Write our OpenAPI client, using the given templates at the given output path.
 * @param client Client object with all the models, services, etc.
 * @param templates Templates wrapper with all loaded Handlebars templates.
 * @param output Directory to write the generated files to.
 */
export function writeClient(client: Client, templates: Templates, output: string, exportApiInformations: boolean = false): void {
    const outputPath = path.resolve(process.cwd(), output);
    const outputPathCore = path.resolve(outputPath, 'core');
    const outputPathModels = path.resolve(outputPath, 'models');
    const outputPathSchemas = path.resolve(outputPath, 'schemas');
    const outputPathServices = path.resolve(outputPath, 'services');

    // Clean output directory
    rimraf.sync(outputPath);
    mkdirp.sync(outputPath);

    mkdirp.sync(outputPathCore);
    copySupportFile('core/ApiError.ts', outputPath);
    copySupportFile('core/getFormData.ts', outputPath);
    copySupportFile('core/getQueryString.ts', outputPath);
    copySupportFile('core/isSuccess.ts', outputPath);
    copySupportFile('core/OpenAPI.hbs', outputPath);
    copySupportFile('core/request.ts', outputPath);
    copySupportFile('core/RequestOptions.ts', outputPath);
    copySupportFile('core/requestUsingFetch.ts', outputPath);
    copySupportFile('core/Result.ts', outputPath);
    copySupportFile('core/UploadHelper.ts', outputPath);
    copySupportFile('core/flow.js', outputPath);
    copySupportFile('core/firebase.ts', outputPath);

    mkdirp.sync(outputPathServices);
    writeApiInfo(client.services, templates, outputPathCore, exportApiInformations);
    writeAuth(client.services, templates, outputPathCore);
    writeClientSettings(client, templates, outputPathCore);
    writeClientServices(client.services, templates, outputPathServices, exportApiInformations);

    mkdirp.sync(outputPathSchemas);
    writeClientSchemas(client.models, templates, outputPathSchemas);

    mkdirp.sync(outputPathModels);
    copySupportFile('models/Dictionary.ts', outputPath);
    writeClientModels(client.models, templates, outputPathModels);

    writeClientIndex(client, templates, outputPath);
}
