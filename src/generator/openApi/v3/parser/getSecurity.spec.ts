import { getSecurity } from './getSecurity';

describe('getSecurity', () => {
    it('should produce correct result', () => {
        expect(
            getSecurity({
                openapi: '3.0',
                info: {
                    title: 'dummy',
                    version: '1.0',
                },
                paths: {},
                components: {
                    securitySchemes: {
                        'Token-Auth1': {
                            type: 'apiKey',
                            in: 'header',
                            name: 'X-TOKEN',
                        },
                        'Token-Auth2': {
                            type: 'apiKey',
                            in: 'header',
                            name: 'X-TOKEN',
                        },
                    },
                },
            })
        ).toEqual({
            'Token-Auth1': { in: 'header', name: 'X-TOKEN', type: 'apiKey' },
            'Token-Auth2': {
                in: 'header',
                name: 'X-TOKEN',
                type: 'apiKey',
            },
        });
    });
});
