import * as fs from 'fs';
import * as path from 'path';

import { Service } from '../client/interfaces/Service';
import { format } from './format';
import { Templates } from './readHandlebarsTemplates';
import { Operation } from '../client/interfaces/Operation';

/**
 * Generate Service meta informations using the Handlebar template and write to disk.
 * @param services Array of Services to write.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export function writeApiInfo(services: Service[], templates: Templates, outputPath: string): void {
    const file = path.resolve(outputPath, `ApiInfo.ts`);
    const templateResult = templates.apiInfo({
        services,
    });
    fs.writeFileSync(file, format(templateResult));
}
