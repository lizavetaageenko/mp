const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            require.resolve('webpack-dev-server/client') + '?/',
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
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style', // The backup style loader
                'css?sourceMap!resolve-url?sourceMap!sass?sourceMap'
            )
        }, {
            test: /\.(jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
            include: [path.resolve('src'), path.resolve('node_modules')],
            loader: 'file',
            query: {
                name: 'static/media/[name].[hash:8].[ext]'
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('index.html'),
            favicon: path.resolve('favicon.ico')
        }),
        new ExtractTextPlugin('build/styles.css')
    ]
};