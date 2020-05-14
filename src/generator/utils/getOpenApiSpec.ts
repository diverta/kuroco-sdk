import * as fs from 'fs';
import * as path from 'path';

/**
 * Check if given file exists and try to read the content as string.
 * @param filePath
 */
function read(filePath: string): string {
    if (fs.existsSync(filePath)) {
        try {
            return fs.readFileSync(filePath, 'utf8').toString();
        } catch (e) {
            throw new Error(`Could not read OpenApi spec: "${filePath}"`);
        }
    }
    throw new Error(`Could not find OpenApi spec: "${filePath}"`);
}

/**
 * Load and parse to open api spec (JSON format only supported).
 * @param input
 */
export function getOpenApiSpec(input: string): any {
    const file = path.resolve(process.cwd(), input);
    const content = read(file);

    try {
        return JSON.parse(content);
    } catch (e) {
        throw new Error(`Could not parse OpenApi JSON: "${file}"`);
    }
}
