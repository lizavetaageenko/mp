const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const detect = require('detect-port');
const chalk = require('chalk');
const prompt = require('./utilities/prompt');

const config = require('../configs/webpack.dev.config.js');

const defaultPort = 3333;

function run(port) {
    const compiler = webpack(config);

    compiler.plugin('invalid', function() {
        console.log('Compiling...');
    });

    compiler.plugin('done', function(stats) {
        console.log('Done!');
    });

    var server = new WebpackDevServer(compiler, {
        publicPath: config.output.publicPath,
        quiet: true,
        watchOptions: {
            ignored: /node_modules/
        },
        historyApiFallback: true,
        proxy: {
            '/api': {
                'target': {
                    'host': 'localhost',
                    'protocol': 'http:',
                    'port': 3332
                },
                ignorePath: false,
                changeOrigin: true,
                secure: false,
                pathRewrite: {'^/api' : '/'},
                ws: true
            }
        }
    });

    server.listen(port, (err, result) => {
        if (err) {
            return console.log(err);
        }

        console.log(chalk.cyan('Starting the development server...'));
        console.log(chalk.green('Open http://localhost:' + port));
    });
}

detect(defaultPort).then(port => {
    if (port === defaultPort) {
        run(port);
        return;
    }

    var question =
        chalk.yellow('Something is already running on port ' + defaultPort + '.') +
        '\n\nWould you like to run the app on another port instead: ' + port + '?';

    prompt(question, true).then(shouldChangePort => {
        if (shouldChangePort) {
            run(port);
        }
    });
});
