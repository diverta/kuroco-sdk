const path = require('path');
const DeclarationBundlerPlugin = require('@jmurp7385/declaration-bundler-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        library: 'Kuroco',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.resolve(__dirname, 'tsconfig.json'),
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new DeclarationBundlerPlugin({
            moduleName: 'Kuroco',
            out: 'index.d.ts',
        })
    ]
}