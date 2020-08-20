const path = require('path');
const DeclarationBundlerPlugin = require('@jmurp7385/declaration-bundler-webpack-plugin');

module.exports = function(env) {
    return {
        mode: 'development',
        output: {
            library: ['Kuroco', env && env.API_NAME ? env.API_NAME : ''],
            libraryTarget: 'umd',
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'tsconfig.json'),
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        plugins: [
            new DeclarationBundlerPlugin({
                moduleName: `Kuroco${ env && env.API_NAME ? '.' + env.API_NAME : ''}`,
                out: 'index.d.ts',
            }),
        ],
    };
};
 