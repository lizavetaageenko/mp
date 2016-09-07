const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../configs/webpack.dev.config.js');
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
    }
});

server.listen(8080);