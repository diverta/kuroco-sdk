import { OPERATION_PATTERN } from './OperationPattern';
import { Dictionary } from '../../utils/types';
import { pickSpecialOperation } from '../../utils/pickSpecialOperation';
import { Model } from './Model';
import { Service } from './Service';
import { Security } from './Security';

export interface Client {
    version: string;
    server: string;
    models: Model[];
    services: Service[];
    security: Dictionary<Security>;
    etc: {
        specialOperation: {
            [OPERATION_PATTERN.LOGIN]: ReturnType<typeof pickSpecialOperation>;
            [OPERATION_PATTERN.LOGOUT]: ReturnType<typeof pickSpecialOperation>;
            [OPERATION_PATTERN.TOKEN]: ReturnType<typeof pickSpecialOperation>;
            [OPERATION_PATTERN.FIREBASE_TOKEN]: ReturnType<typeof pickSpecialOperation>;
        };
        kurocoConfig: KurocoConfig;
        exportApiInformations: boolean;
    };
}
