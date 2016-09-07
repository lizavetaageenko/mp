const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    entry: {
        app: [
            path.join(path.resolve('src'), 'app')
        ]
    },
    output: {
        path: path.resolve('build'),
        filename: '/app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.resolve('src'),
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('index.html')
        }),
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