import { getOperationPath } from './getOperationPath';

describe('getOperationPath', () => {
    it('should produce correct result', () => {
        expect(getOperationPath('/api/v{api-version}/list/{id}/{type}')).toEqual('/api/v${requestParam.apiVersion}/list/${requestParam.id}/${requestParam.type}');
        expect(getOperationPath('/api/v{api-version}/list/{id}')).toEqual('/api/v${requestParam.apiVersion}/list/${requestParam.id}');
        expect(getOperationPath('/api/v1/list/{id}')).toEqual('/api/v1/list/${requestParam.id}');
        expect(getOperationPath('/api/{foobar}')).toEqual('/api/${requestParam.foobar}');
        expect(getOperationPath('/api/{fooBar}')).toEqual('/api/${requestParam.fooBar}');
        expect(getOperationPath('/api/{foo-bar}')).toEqual('/api/${requestParam.fooBar}');
        expect(getOperationPath('/api/{foo_bar}')).toEqual('/api/${requestParam.fooBar}');
        expect(getOperationPath('/api/{foo.bar}')).toEqual('/api/${requestParam.fooBar}');
        expect(getOperationPath('/api/{Foo-Bar}')).toEqual('/api/${requestParam.fooBar}');
        expect(getOperationPath('/api/{FOO-BAR}')).toEqual('/api/${requestParam.fooBar}');
    });
});
