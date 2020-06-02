import * as generator from './generator';
import * as pull from './pull';
import * as init from './init';
export * from './__base';

export default {
    ...generator,
    ...pull,
    ...init,
};
