import * as fs from 'fs';
import * as path from 'path';

import { Client } from '../client/interfaces/Client';
import { getModelNames } from './getModelNames';
import { getServiceNames } from './getServiceNames';
import { Templates } from './readHandlebarsTemplates';
import { KurocoConfig } from '../..';

// TODO: fix to being consistency of arguments order compare to the others
/**
 * Generate the OpenAPI client index file using the Handlebar template and write it to disk.
 * The index file just contains all the exports you need to use the client as a standalone
 * library. But yuo can also import individual models and services directly.
 * @param client Client object, containing, models, schemas and services.
 * @param kurocoConfig General configuration object for KurocoSDK, containing firebase configurations.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export function writeClientIndex(client: Client, kurocoConfig: KurocoConfig, templates: Templates, outputPath: string): void {

    // TODO: duplicated
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

    fs.writeFileSync(
        path.resolve(outputPath, 'index.ts'),
        templates.index({
            server: client.server,
            version: client.version,
            models: getModelNames(client.models),
            services: getServiceNames(client.services),
            hasUploader: hasConfiguration && firebaseTokenApi,
        })
    );
}
