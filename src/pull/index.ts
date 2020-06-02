import path from 'path';
import * as fs from 'fs-extra';
import { default as SwaggerParser } from 'swagger-parser';
import * as API from './api';
import { KurocoConfig } from '..';

export interface Options {
    config: KurocoConfig;
    output: string;
    write: boolean;
}

export async function pull(options: Options) {
    try {
        await writeRcmsFilesWithFetch(options);
        await overwriteConfigurationFile(options);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

export async function writeRcmsFilesWithFetch({ config, output, write = true }: Options) {
    if (!fs.existsSync(path.dirname(output))) {
        throw Error(`Could not find directory : ${output}`);
    }

    const res = await API.requestOpenAPI(config.api_url, config.sdk_key);
    if (!res.ok && res.status === 401) {
        throw Error('the server responsed as unautorized, please check your SDK key.')
    }
    const openapi = (await res.json()).openapi_data;
    // hooks validation to openapi.json, this throw an Error whrn occurs invalidations.
    new SwaggerParser().bundle(openapi);

    if (write) {
        fs.writeJSONSync(output, openapi, {
            spaces: '\t',
            encoding: 'UTF-8',
            flag: 'w',
        });
    }
}

export async function overwriteConfigurationFile({ config, write = true }: Options) {
    const manifest = await API.requestManifest(config.api_url);
    const configuration = {
        ...config,
        ...manifest,
    };
    const output = path.resolve(process.cwd(), 'kuroco.config.json');
    fs.writeJSONSync(output, configuration, {
        spaces: '\t',
        encoding: 'UTF-8',
        flag: 'w',
    });
}