import * as fs from 'fs';
import * as path from 'path';
import { Client } from '../client/interfaces/Client';
import { format } from './format';
import { Templates } from './readHandlebarsTemplates';

/**
 * Generate Firebase utility/initializer
 * @param client General configuration object.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export function writeFirebaseUtil(client: Client, templates: Templates, outputPath: string): void {
    const file = path.resolve(outputPath, `FirebaseUtil.ts`);
    const templateResult = templates.firebaseUtil({
        firebaseConfig: client.etc.kurocoConfig.gcp.firebaseConfig,
    });
    fs.writeFileSync(file, format(templateResult));
}
