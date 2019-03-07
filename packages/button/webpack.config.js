const path = require('path');

module.exports = {
    mode: 'production',
    entry: './lib/button.js',
    output: {
        path: path.join(__dirname, '/'),
        filename: 'js/index.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, './')
            }
        ]
    }
}