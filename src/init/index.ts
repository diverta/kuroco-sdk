import inquirer from 'inquirer';
import { prompts } from './prompts';
import fs from 'fs-extra';
import path from 'path';

export interface Options {
    write: boolean;
}

export async function init(options: Options) {
    try {
        await inquiry(options);
    } catch (e) {
        console.error(e);
        process.exit(1);
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

    console.log('');
    console.log(`exported the file to: ${outputPath},`);
    console.log('the values in exported files is:');
    console.log(JSON.stringify(answers, null, '\t'));
    console.log('');
}
