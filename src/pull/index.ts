import path from 'path';
import * as fs from 'fs-extra';
import { default as SwaggerParser } from 'swagger-parser';
import * as API from './api';

export interface Options {
    host: string;
    sdkKey: string;
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

export async function writeRcmsFilesWithFetch({ host, sdkKey, output, write = true }: Options) {
    const parser = new SwaggerParser();

    if (!fs.existsSync(path.dirname(output))) {
        throw Error(`Could not find directory : ${output}`);
    }

    const h = (() => {
        const h = host.trim();
        return h[h.length - 1] === '/' ? h.substr(0, h.length - 1) : h;
    })();
    const res = await API.requestOpenAPI(h, sdkKey);
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
