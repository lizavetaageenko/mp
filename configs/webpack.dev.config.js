const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sassLintPlugin = require('sasslint-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('../scripts/utilities/WatchMissingNodeModulesPlugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            require.resolve('webpack-dev-server/client') + '?/',
            path.join(path.resolve('src/client'), 'index')
        ]
    },
    output: {
        path: path.resolve('build'),
        publicPath: '/',
        filename: 'build/app.bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            include: path.resolve('src'),
            loader: 'eslint'
        }],
        loaders: [{
            test: /\.js$/,
            include: path.resolve('src'),
            loader: 'babel',
            query: require('./babel.dev')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style', // The backup style loader
                'css?sourceMap!postcss!resolve-url?sourceMap!sass?sourceMap'
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
    eslint: {
        configFile: 'configs/eslint.js',
        useEslintrc: false
    },
    postcss: function() {
        return [
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 2 versions',
                    'Firefox ESR',
                    'not ie < 9'
                ]
            }),
        ];
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('index.html'),
            favicon: path.resolve('favicon.ico')
        }),
        new ExtractTextPlugin('build/styles.css'),
        new sassLintPlugin({
            configFile: path.resolve('configs/scss-lint.yml'),
            glob: 'src/**/*.s?(a|c)ss',
            ignorePlugins: [
                'extract-text-webpack-plugin',
                'html-webpack-plugin'
            ]
        }),
        new WatchMissingNodeModulesPlugin(path.resolve('node_modules'))
    ]
};