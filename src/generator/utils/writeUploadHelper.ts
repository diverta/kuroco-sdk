import * as fs from 'fs';
import * as path from 'path';
import { Client } from '../client/interfaces/Client';
import { format } from './format';
import { Templates } from './readHandlebarsTemplates';
import { KurocoConfig } from '../..';

/**
 * Generate UploadHelper using the Handlebar template and write to disk.
 * @param kurocoConfig General configuration object for KurocoSDK, containing firebase configurations.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export function writeUploadHelper(client: Client, kurocoConfig: KurocoConfig, templates: Templates, outputPath: string): void {
    const file = path.resolve(outputPath, `UploadHelper.ts`);

    const templateResult = templates.uploadHelper({
        firebaseConfig: (kurocoConfig.gcp || {}).firebaseConfig,
        server: client.server,
        security: client.security,
    });
    fs.writeFileSync(file, format(templateResult));
}
