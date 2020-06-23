import path from 'path';
import * as fs from 'fs-extra';
import { default as SwaggerParser } from 'swagger-parser';
import * as API from './api';
import { KurocoConfig, handleSuccess, handleError } from '../__base';

export interface Options {
    config: KurocoConfig;
    output: string;
    write: boolean;
}

export async function pull(options: Options) {
    try {
        await writeRcmsFilesWithFetch(options);
        await overwriteConfigurationFile(options);
        handleSuccess(`The OpenAPI definition on Kuroco was exported at ${options.output}`);
    } catch (e) {
        handleError(e);
    }
}

export async function writeRcmsFilesWithFetch(options: Options) {
    if (!fs.existsSync(path.dirname(options.output))) {
        throw Error(`Could not find directory : ${options.output}`);
    }

    const res = await API.requestOpenAPI(options);
    if (!res.ok && res.status === 401) {
        throw Error('the server responsed as unautorized, please check your SDK key.');
    }
    const openapi = (await res.json()).openapi_data;
    // hooks validation to openapi.json, this throw an Error whrn occurs invalidations.
    new SwaggerParser().bundle(openapi);

    if (options.write) {
        fs.writeJSONSync(options.output, openapi, {
            spaces: '\t',
            encoding: 'UTF-8',
            flag: 'w',
        });
    }
}

export async function overwriteConfigurationFile(options: Options) {
    const manifest = await API.requestManifest(options);
    const configuration = {
        ...options.config,
        ...manifest,
    };
    const output = path.resolve(process.cwd(), 'kuroco.config.json');
    fs.writeJSONSync(output, configuration, {
        spaces: '\t',
        encoding: 'UTF-8',
        flag: 'w',
    });
}
