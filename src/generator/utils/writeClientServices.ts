import * as fs from 'fs';
import * as path from 'path';

import { format } from './format';
import { Templates } from './readHandlebarsTemplates';
import { Client } from '../client/interfaces/Client';

/**
 * Generate Services using the Handlebar template and write to disk.
 * @param client General configuration object.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 * @param exportApiInformations Generate API informations.
 */
export function writeClientServices(client: Client, templates: Templates, outputPath: string, exportApiInformations = false): void {
    client.services.forEach(service => {
        const file = path.resolve(outputPath, `${service.name}.ts`);
        const templateResult = templates.service({
            exportApiInformations: client.etc.exportApiInformations,
            ...service,
        });
        fs.writeFileSync(file, format(templateResult));
    });
}
