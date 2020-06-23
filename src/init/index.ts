import inquirer from 'inquirer';
import { prompts } from './prompts';
import fs from 'fs-extra';
import path from 'path';
import { handleSuccess, handleError } from '../__base';

export interface Options {
    write: boolean;
}

export async function init(options: Options) {
    try {
        const { answers, outputPath } = await inquiry(options);
        handleSuccess(`The configuration file was exported at: ${outputPath}`, JSON.stringify(answers, null, '\t'));
    } catch (e) {
        handleError(e);
    }
}

export async function inquiry({ write = true }: Options) {
    const answers = await inquirer.prompt(prompts);
    const outputPath = path.resolve(process.cwd(), 'kuroco.config.json');

    if (write) {
        fs.writeJSONSync(outputPath, answers, {
            spaces: '\t',
        });
    }
    return {
        answers,
        outputPath,
    };
}
