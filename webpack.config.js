const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/app.js',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        })
    ]
};