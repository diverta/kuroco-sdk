import { parse as parseV3 } from './openApi/v3';
import { getOpenApiSpec } from './utils/getOpenApiSpec';
import { isString } from './utils/isString';
import { postProcessClient } from './utils/postProcessClient';
import { readHandlebarsTemplates } from './utils/readHandlebarsTemplates';
import { writeClient } from './utils/writeClient';
import { KurocoConfig, handleSuccess, handleError } from '../__base';

export interface Options {
    input: string | Record<string, any>;
    output: string;
    write?: boolean;
    exportApiInformations?: boolean;
    config: KurocoConfig;
}

/**
 * Generate the OpenAPI client. This method will read the OpenAPI specification and based on the
 * given language it will generate the client, including the typed models, validation schemas,
 * service layer, etc.
 * @param input The relative location of the OpenAPI spec.
 * @param output The relative location of the output directory.
 * @param write Write the files to disk (true or false).
 */
export function generate({ input, output, write = true, exportApiInformations = false, config }: Options): void {
    try {
        // Load the specification, load the handlebar templates for the given language
        const openApi = isString(input) ? getOpenApiSpec(input) : input;
        const templates = readHandlebarsTemplates();

        const parsed = parseV3(openApi);
        const client = postProcessClient(parsed, config, exportApiInformations);
        if (write) {
            writeClient(client, templates, output);
        }
        handleSuccess(`generated at: ${output}`);
    } catch (e) {
        handleError(e);
    }
}
