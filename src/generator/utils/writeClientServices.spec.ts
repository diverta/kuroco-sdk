import * as fs from 'fs';

import { Service } from '../client/interfaces/Service';
import { Templates } from './readHandlebarsTemplates';
import { writeClientServices } from './writeClientServices';
import { Client } from '../client/interfaces/Client';

jest.mock('fs');

const fsWriteFileSync = fs.writeFileSync as jest.MockedFunction<typeof fs.writeFileSync>;

describe('writeClientServices', () => {
    it('should write to filesystem', () => {
        const client: Client = {
            server: 'http://localhost:8080',
            version: 'v1',
            models: [],
            services: [
                {
                    name: 'Item',
                    operations: [],
                    imports: [],
                },
            ],
            security: {},
            etc: {} as any,
        };

        const templates: Templates = {
            index: () => 'dummy',
            model: () => 'dummy',
            schema: () => 'dummy',
            service: () => 'dummy',
            settings: () => 'dummy',
            apiInfo: () => 'dummy',
            auth: () => 'dummy',
            uploadHelper: () => 'dummy',
            firebaseUtil: () => 'dummy',
        };

        writeClientServices(client, templates, '/', false);

        expect(fsWriteFileSync).toBeCalledWith('/Item.ts', 'dummy');
    });
});
