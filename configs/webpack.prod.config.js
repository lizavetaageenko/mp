const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const sassLintPlugin = require('sasslint-webpack-plugin');
const autoprefixer = require('autoprefixer');

const path = require('path');

module.exports = {
    entry: {
        app: [
            path.join(path.resolve('src/client'), 'app')
        ]
    },
    output: {
        path: path.resolve('build'),
        filename: '/app.bundle.js'
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
            query: require('./babel.prod')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style', // The backup style loader
                'css?sourceMap!postcss?sourceMap!resolve-url?sourceMap!sass?sourceMap'
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
        useEslintrc: false,
        emitError: true,
        emitWarning: true,
        failOnError: true,
        failOnWarning: true
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
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.NoErrorsPlugin(),
        new CleanWebpackPlugin(['build'], {
            root: path.resolve('./'),
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('index.html'),
            favicon: path.resolve('favicon.ico')
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
        }),
        new ExtractTextPlugin('/styles.css'),
        new sassLintPlugin({
            configFile: path.resolve('configs/scss-lint.yml'),
            glob: 'src/**/*.s?(a|c)ss',
            ignorePlugins: [
                'extract-text-webpack-plugin',
                'html-webpack-plugin'
            ],
            failOnWarning: false,
            failOnError: false
        })
    ]
};
