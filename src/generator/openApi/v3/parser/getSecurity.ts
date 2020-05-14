import { OpenApi } from '../interfaces/OpenApi';
import { Security } from '../../../client/interfaces/Security';
import { Dictionary } from '../../../utils/types';

/**
 * Get Security schemas.
 * @param openApi
 */
export function getSecurity(openApi: OpenApi): Dictionary<Security> {
    let security = {};
    if (openApi.components) {
        for (const definitionName in openApi.components.securitySchemes) {
            if (openApi.components.securitySchemes.hasOwnProperty(definitionName)) {
                security = {
                    ...security,
                    [definitionName]: openApi.components.securitySchemes[definitionName],
                };
            }
        }
    }
    return security as Dictionary<Security>;
}
