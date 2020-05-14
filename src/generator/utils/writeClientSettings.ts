import * as fs from 'fs';
import * as path from 'path';

import { Client } from '../client/interfaces/Client';
import { Templates } from './readHandlebarsTemplates';

/**
 * Generate OpenAPI configuration file "OpenAPI.ts"
 * @param client Client object, containing, models, schemas and services.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export function writeClientSettings(client: Client, templates: Templates, outputPath: string): void {
    fs.writeFileSync(
        path.resolve(outputPath, 'OpenAPI.ts'),
        templates.settings({
            server: client.server,
            version: client.version,
            security: client.security,
        })
    );
}
