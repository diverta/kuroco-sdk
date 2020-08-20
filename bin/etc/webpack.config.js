const path = require('path');
const DeclarationBundlerPlugin = require('@jmurp7385/declaration-bundler-webpack-plugin');

module.exports = function(env) {
    return {
        mode: 'development',
        output: {
            library: env && env.API_NAME ? ['Kuroco', env.API_NAME] : 'Kuroco',
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
                moduleName: env && env.API_NAME ? `Kuroco.${env.API_NAME}` : `Kuroco`,
                out: 'index.d.ts',
            }),
        ],
    };
};
 