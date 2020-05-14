import * as fs from 'fs';

import { Client } from '../client/interfaces/Client';
import { Templates } from './readHandlebarsTemplates';
import { writeClientIndex } from './writeClientIndex';

jest.mock('fs');

const fsWriteFileSync = fs.writeFileSync as jest.MockedFunction<typeof fs.writeFileSync>;

describe('writeClientIndex', () => {
    it('should write to filesystem', () => {
        const client: Client = {
            server: 'http://localhost:8080',
            version: '1.0',
            models: [],
            services: [],
            security: {},
        };

        const templates: Templates = {
            index: () => 'dummy',
            model: () => 'dummy',
            schema: () => 'dummy',
            service: () => 'dummy',
            settings: () => 'dummy',
            apiInfo: () => 'dummy',
        };

        writeClientIndex(client, templates, '/');

        expect(fsWriteFileSync).toBeCalledWith('/index.ts', 'dummy');
    });
});
