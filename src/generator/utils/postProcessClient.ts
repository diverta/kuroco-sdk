import { Client } from '../client/interfaces/Client';
import { OPERATION_PATTERN } from '../client/interfaces/OperationPattern';
import { postProcessModel } from './postProcessModel';
import { KurocoConfig } from '../..';
import { pickSpecialOperation } from './pickSpecialOperation';

/**
 * Post process client
 * @param client Client object with all the models, services, etc.
 * @param kurocoConfig Etc Kuroco configurations passed by Kuroco.
 * @param exportApiInformations Whether or not to export details of each API endpoints.
 */
export function postProcessClient(client: Omit<Client, 'etc'>, kurocoConfig: KurocoConfig, exportApiInformations = false): Client {
    const specialOperation = {
        [OPERATION_PATTERN.LOGIN]: pickSpecialOperation(client.services, OPERATION_PATTERN.LOGIN),
        [OPERATION_PATTERN.LOGOUT]: pickSpecialOperation(client.services, OPERATION_PATTERN.LOGOUT),
        [OPERATION_PATTERN.TOKEN]: pickSpecialOperation(client.services, OPERATION_PATTERN.TOKEN),
        [OPERATION_PATTERN.FIREBASE_TOKEN]: pickSpecialOperation(client.services, OPERATION_PATTERN.FIREBASE_TOKEN),
    };

    return {
        ...client,
        models: client.models.map(model => postProcessModel(model)),
        etc: {
            specialOperation,
            kurocoConfig,
            exportApiInformations,
        },
    };
}
