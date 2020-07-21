const path = require('path');

module.exports = {
    webpack: path.resolve(__dirname, 'webpack.config.js'),
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    packageJSON: path.resolve(__dirname, 'package.json'),
}