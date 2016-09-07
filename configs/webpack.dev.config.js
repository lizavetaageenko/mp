const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            path.join(path.resolve('src'), 'app')
        ]
    },
    output: {
        path: path.resolve('build'),
        publicPath: '/',
        filename: 'build/app.bundle.js'
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
    ]
};