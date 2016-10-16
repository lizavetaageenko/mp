var path = require('path');

module.exports = {
    babelrc: false,
    presets: [
        require.resolve('babel-preset-latest'),
        require.resolve('babel-preset-react')
    ],
    plugins: []
};
