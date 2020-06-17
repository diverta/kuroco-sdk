import { OPERATION_PATTERN } from '../client/interfaces/OperationPattern';
import { Service } from '../client/interfaces/Service';

/**
 * Pick special operations
 * @param services Service objects.
 */
export function pickSpecialOperation(services: Service[] = [], type: OPERATION_PATTERN) {
    const service = services.find(s => s.operations.some(o => o.type === type));
    if (!service) {
        return null;
    }

    const operation = service.operations.find(o => o.type === type);
    if (!operation) {
        return null;
    }

    return {
        ...operation,
        class: service.name,
        className: service.name,
        method: `${service.name}.${operation.name}`,
        methodName: operation.name,
    };
}
