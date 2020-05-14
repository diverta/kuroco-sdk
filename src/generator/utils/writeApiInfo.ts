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
 * @param exportApiInformations Generate API informations.
 */
export function writeApiInfo(services: Service[], templates: Templates, outputPath: string, exportApiInformations = false): void {
    const file = path.resolve(outputPath, `ApiInfo.ts`);

    function pickSpecialOperation(type: string): any | null {
        const service = services.find(s => s.operations.some(o => o.type === type));
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

    const templateResult = templates.apiInfo({
        exportApiInformations,
        services,
        specialOperation: {
            login: pickSpecialOperation('LOGIN'),
            logout: pickSpecialOperation('LOGOUT'),
            token: pickSpecialOperation('TOKEN'),
        },
    });
    fs.writeFileSync(file, format(templateResult));
}
