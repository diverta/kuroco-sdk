const deps = require('../../bin/deps.js');

describe('deps', () => {
    it('pick(): should pick only unused pkg', () => {
        expect(deps.pick({}, ['pkg'])).toEqual(['pkg']);
        expect(deps.pick({
            dependencies: {
                'installedPkg1': null,
                'installedPkg3': null,
                'pkg1': null,
            },
            devDependencies: {
                'installedPkg2': null,
                'pkg2': null
            }
        }, ['pkg1', 'pkg2', 'pkg3'])).toEqual(['pkg3']);
    })
    it('getPackageJsonObj(): should load values of package.json relate to the path', () => {
        const pkg = deps.getPackageJsonObj(__dirname);
        expect(pkg.name).toBe('dummy_package_json');
    })
});
