import { Client } from '../client/interfaces/Client';
import { postProcessModel } from './postProcessModel';

/**
 * Post process client
 * @param client Client object with all the models, services, etc.
 */
export function postProcessClient(client: Client): Client {
    return {
        ...client,
        models: client.models.map(model => postProcessModel(model)),
    };
}
