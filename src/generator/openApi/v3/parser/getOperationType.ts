import { OPERATION_PATTERN } from '../../../client/interfaces/OperationPattern';

/**
 * Get operation type. returns a value to get whether this target operation shuold be special process.
 * @param pathSummary
 * @note here 'pathSummary' is not 'summary' in operation, should be set from path object.
 */
export function getOperationType(pathSummary: string = ''): OPERATION_PATTERN | null {
    if (pathSummary === '') {
        return null;
    }

    function isMatchAll(moduleNames: string) {
        return moduleNames.split(':').every(moduleName => pathSummary.includes(moduleName));
    }
    if (isMatchAll('login:1:Login:login_challenge')) {
        return OPERATION_PATTERN.LOGIN;
    }
    if (isMatchAll('login:1:Login:logout')) {
        return OPERATION_PATTERN.LOGOUT;
    }
    if (isMatchAll('login:1:Login:token')) {
        return OPERATION_PATTERN.TOKEN;
    }
    if (isMatchAll('login:1:Login:firebaseToken')) {
        return OPERATION_PATTERN.FIREBASE_TOKEN;
    }

    return null;
}
