import * as Handlebars from 'handlebars';
import * as path from 'path';
import * as fs from 'fs';

import { readHandlebarsTemplate } from './readHandlebarsTemplate';
import { registerHandlebarHelpers } from './registerHandlebarHelpers';

function resolveTemplate(filePath: string): string {
    // TODO: add-hock fixing. to prevent runtime error on running actual index.js & test,
    // because those have different base path.
    const fromJS = path.resolve(__dirname, `../../../src/generator/templates/${filePath}`);
    const fromTS = path.resolve(__dirname, `../templates/${filePath}`);
    const p = fs.existsSync(fromJS) ? fromJS : fromTS;
    return path.resolve(__dirname, p);
}

export interface Templates {
    index: Handlebars.TemplateDelegate;
    model: Handlebars.TemplateDelegate;
    schema: Handlebars.TemplateDelegate;
    service: Handlebars.TemplateDelegate;
    settings: Handlebars.TemplateDelegate;
    apiInfo: Handlebars.TemplateDelegate;
}

/**
 * Read all the Handlebar templates that we need and return on wrapper object
 * so we can easily access the templates in out generator / write functions.
 */
export function readHandlebarsTemplates(): Templates {
    registerHandlebarHelpers();

    const templates: Templates = {
        index: readHandlebarsTemplate(resolveTemplate('index.hbs')),
        model: readHandlebarsTemplate(resolveTemplate('model.hbs')),
        schema: readHandlebarsTemplate(resolveTemplate('schema.hbs')),
        service: readHandlebarsTemplate(resolveTemplate('service.hbs')),
        settings: readHandlebarsTemplate(resolveTemplate('core/OpenAPI.hbs')),
        apiInfo: readHandlebarsTemplate(resolveTemplate('core/ApiInfo.hbs')),
    };

    const partials = [
        'exportEnum.hbs',
        'exportInterface.hbs',
        'exportType.hbs',
        'extends.hbs',
        'isNullable.hbs',
        'isReadOnly.hbs',
        'isRequired.hbs',
        'parameters.hbs',
        'result.hbs',
        'schema.hbs',
        'schemaArray.hbs',
        'schemaDictionary.hbs',
        'schemaEnum.hbs',
        'schemaGeneric.hbs',
        'schemaInterface.hbs',
        'type.hbs',
        'typeArray.hbs',
        'typeDictionary.hbs',
        'typeEnum.hbs',
        'typeGeneric.hbs',
        'typeInterface.hbs',
        'typeReference.hbs',
    ];

    partials.forEach(partial => {
        const templatePath = resolveTemplate(`partials/${partial}`);
        const templateName = path.basename(partial, '.hbs');
        const template = readHandlebarsTemplate(templatePath);
        Handlebars.registerPartial(templateName, template);
    });

    return templates;
}
