import { Model } from '../client/interfaces/Model';
import { postProcessModelEnum } from './postProcessModelEnum';
import { postProcessModelEnums } from './postProcessModelEnums';
import { postProcessModelImports } from './postProcessModelImports';

/**
 * Post process the model. this will cleanup
 * any double imports or enum values.
 * @param model
 */
export function postProcessModel(model: Model): Model {
    const clone = { ...model };
    return {
        ...clone,
        imports: postProcessModelImports(clone),
        enums: postProcessModelEnums(clone),
        enum: postProcessModelEnum(clone),
    };
}
