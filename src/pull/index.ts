import path from 'path';
import * as fs from 'fs-extra';
import { default as SwaggerParser } from 'swagger-parser';
import * as API from './api';

export interface Config {
    sdk_key: string;
    api_url: string;
}

export interface Options {
    config: Config;
    output: string;
    write: boolean;
}

export async function pull(options: Options) {
    try {
        await writeRcmsFilesWithFetch(options);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

export async function writeRcmsFilesWithFetch({ config, output, write = true }: Options) {
    const parser = new SwaggerParser();

    if (!fs.existsSync(path.dirname(output))) {
        throw Error(`Could not find directory : ${output}`);
    }

    const res = await API.requestOpenAPI(config.api_url, config.sdk_key);
    if (!res.ok && res.status === 401) {
        throw Error('the server responsed as unautorized, please check your SDK key.')
    }

    // console.log(await API.requestManifest(config.api_url));

    const openapi = (await res.json()).openapi_data;

    // hooks validation to openapi.json, this throw an Error whrn occurs invalidations.
    parser.bundle(openapi);

    if (write) {
        fs.writeJSONSync(output, openapi, {
            spaces: '\t',
            encoding: 'UTF-8',
            flag: 'w',
        });
    }
}