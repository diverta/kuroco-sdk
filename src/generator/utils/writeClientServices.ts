import * as fs from 'fs';
import * as path from 'path';

import { Service } from '../client/interfaces/Service';
import { format } from './format';
import { Templates } from './readHandlebarsTemplates';

/**
 * Generate Services using the Handlebar template and write to disk.
 * @param services Array of Services to write.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 * @param exportApiInformations Generate API informations.
 */
export function writeClientServices(services: Service[], templates: Templates, outputPath: string, exportApiInformations = false): void {
    services.forEach(service => {
        const file = path.resolve(outputPath, `${service.name}.ts`);
        const templateResult = templates.service({
            exportApiInformations,
            ...service,
        });
        fs.writeFileSync(file, format(templateResult));
    });
}
