import { Model } from './Model';
import { Service } from './Service';
import { Security } from './Security';

export interface Client {
    version: string;
    server: string;
    models: Model[];
    services: Service[];
    security: Dictinaly<Security>;
}
