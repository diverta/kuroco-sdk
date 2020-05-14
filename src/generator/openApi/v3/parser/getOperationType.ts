import { OpenApi } from '../interfaces/OpenApi';
import { Security } from '../../../client/interfaces/Security';
import { Dictionary } from '../../../utils/types';

/**
 * Get operation type. returns a value to get whether this target operation shuold be special process.
 * @param pathSummary
 * @note here 'pathSummary' is not 'summary' in operation, should be set from path object.
 */
export function getOperationType(pathSummary: string = ''): 'LOGIN' | 'LOGOUT' | 'TOKEN' | null {
    if (pathSummary === '') {
        return null;
    }

    function isMatchAll(moduleNames: string) {
        return moduleNames.split(':').every(moduleName => pathSummary.includes(moduleName));
    }
    if (isMatchAll('login:1:Login:login_challenge')) {
        return 'LOGIN';
    }
    if (isMatchAll('login:1:Login:logout')) {
        return 'LOGOUT';
    }
    if (isMatchAll('login:1:Login:token')) {
        return 'TOKEN';
    }

    return null;
}
