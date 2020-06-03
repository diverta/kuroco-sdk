import * as fs from 'fs';
import * as path from 'path';
import { Client } from '../client/interfaces/Client';
import { format } from './format';
import { Templates } from './readHandlebarsTemplates';
import { KurocoConfig } from '../..';

/**
 * Generate Uploader using the Handlebar template and write to disk.
 * @param kurocoConfig General configuration object for KurocoSDK, containing firebase configurations.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export function writeUploader(client: Client, kurocoConfig: KurocoConfig, templates: Templates, outputPath: string): void {
    const file = path.resolve(outputPath, `Uploader.ts`);

    function pickSpecialOperation(type: string): any | null {
        const service = client.services.find(s => s.operations.some(o => o.type === type));

        if (!service) {
            return null;
        }

        const operation = service.operations.find(o => o.type === type);
        if (!operation) {
            return null;
        }

        return {
            ...operation,
            class: service.name,
            className: service.name,
            method: `${service.name}.${operation.name}`,
            methodName: operation.name,
        };
    }

    const hasConfiguration = Object.keys(kurocoConfig.gcp || {}).length > 0;
    const firebaseTokenApi = pickSpecialOperation('FIREBASE_TOKEN');
    if (hasConfiguration && firebaseTokenApi) {
        const templateResult = templates.uploadHelper({
            firebaseConfig: (kurocoConfig.gcp || {}).firebaseConfig,
            firebaseTokenApi,
        });
        fs.writeFileSync(file, format(templateResult));
    }
}