const path = require('path');
const fs = require('fs-extra');
const npm = require('global-npm');

/** install required dependencies to target project. */
module.exports = {
    installDependencies: (pjPath, ...moduleNames) => {
        const handleError = e => {
            console.error(e);
            process.exit(1);
        };
        const getPackageJsonObj = (pjPath) => {
            try {
                const packageJsonPath = path.resolve(pjPath, 'package.json');
                return fs.readJSONSync(packageJsonPath);
            } catch(e) {
                handleError(new Error('current directry does not have "package.json", please retry at the root directry of your PJ.'));
            }
        }
        const install = moduleName => {
            npm.commands.install([moduleName], handleError);
        }

        const pkg = getPackageJsonObj(pjPath);
        npm.load({}, e => {
            if (e) {
                handlError(e);
            }
            moduleNames.forEach((nm) => {
                const hasDep = (
                    Object.keys(pkg.dependencies).includes(nm) ||
                    Object.keys(pkg.devDependencies).includes(nm)
                );

                if (!hasDep) {
                    install(nm);
                }
            });
        });
    },
};
