const path = require('path')

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
    }
}