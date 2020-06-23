import * as base from '../src/__base';
(base.handleSuccess as any) = jest.fn();
(base.handleError as any) = jest.fn();
