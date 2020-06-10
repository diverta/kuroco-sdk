import * as fs from 'fs';
import * as path from 'path';
import { Service } from '../client/interfaces/Service';
import { format } from './format';
import { Templates } from './readHandlebarsTemplates';

/**
 * Generate Service meta informations using the Handlebar template and write to disk.
 * @param services Array of Services to write.
 * @param templates The loaded handlebar templates.
 * @param outputPath Directory to write the generated files to.
 */
export function writeAuth(services: Service[], templates: Templates, outputPath: string): void {
    const file = path.resolve(outputPath, `Auth.ts`);

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

    const operations = {
        login: pickSpecialOperation('LOGIN'),
        logout: pickSpecialOperation('LOGOUT'),
        token: pickSpecialOperation('TOKEN'),
    };

    let importer = Object.values(operations)
        .filter(v => v !== null)
        .map(v => v.class);
    const uniq = (array: any[]) => ([...new Set(array)]);
    importer = uniq(importer);

    const templateResult = templates.auth({
        importer,
        operations,
    });
    fs.writeFileSync(file, format(templateResult));
}
