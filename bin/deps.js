const path = require('path');
const fs = require('fs-extra');
const npm = require('global-npm');

function installDependencies(pjPath, moduleNames = []) {
    const pkg = getPackageJsonObj(pjPath);
    npm.load({}, e => {
        if (e) {
            handlError(e);
        }
        const installModuleNames = pick(pkg, moduleNames);
        if (installModuleNames.length > 0) {
            install(installModuleNames);
        }
    });
}
function handleError(e) {
    console.error(e);
    process.exitCode = 1;
}
function getPackageJsonObj(pjPath) {
    try {
        const packageJsonPath = path.resolve(pjPath, 'package.json');
        return fs.readJSONSync(packageJsonPath);
    } catch (e) {
        handleError(new Error('current directry does not have "package.json", please retry at the root directry of your PJ.'));
    }
}
function install(moduleNames) {
    npm.commands.install(moduleNames, (res) => {
        if (res && res.err) {
            handleError(res.err);
        }
    });
}
function pick(pkg, moduleNames = []) {
    return moduleNames
        .map(nm => {
            const deps = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {})];
            const hasDep = deps.includes(nm);

            if (!hasDep) {
                return nm;
            }
        })
        .filter(v => v !== undefined);
}

/** install required dependencies to target project. */
module.exports = {
    installDependencies,
    handleError,
    getPackageJsonObj,
    install,
    pick,
};
