import { getOperationNameFallback } from './getOperationNameFallback';

describe('getOperationNameFallback', () => {
    it('should produce correct result', () => {
        expect(getOperationNameFallback([''])).toEqual('');
        expect(getOperationNameFallback(['FooBar'])).toEqual('fooBar');
        expect(getOperationNameFallback(['Foo Bar'])).toEqual('fooBar');
        expect(getOperationNameFallback(['foo bar'])).toEqual('fooBar');
        expect(getOperationNameFallback(['foo-bar'])).toEqual('fooBar');
        expect(getOperationNameFallback(['foo_bar'])).toEqual('fooBar');
        expect(getOperationNameFallback(['foo.bar'])).toEqual('fooBar');

        expect(getOperationNameFallback(['abc', 'def'])).toEqual('abcDef');
        expect(getOperationNameFallback(['abc', 'def', 'hij'])).toEqual('abcDefHij');

        expect(getOperationNameFallback(['abc', '', 'def'])).toEqual('abcDef');
        expect(getOperationNameFallback(['abc', 'def', '', 'hij'])).toEqual('abcDefHij');

        expect(getOperationNameFallback(['/test/url'])).toEqual('testUrl');
        expect(getOperationNameFallback(['/test/{var}/url'])).toEqual('testVarUrl');
        expect(getOperationNameFallback(['prefix', '/test/{var}/url'])).toEqual('prefixTestVarUrl');
    });
});
