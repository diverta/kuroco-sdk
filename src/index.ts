import * as generator from './generator';
import * as pull from './pull';
export * from './__base';

export default {
    ...generator,
    ...pull,
};
