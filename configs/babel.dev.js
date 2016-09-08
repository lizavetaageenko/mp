var path = require('path');

module.exports = {
    babelrc: false,
    cacheDirectory: true,
    presets: [
        require.resolve('babel-preset-latest')
    ],
    plugins: []
};
