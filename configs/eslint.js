module.exports = {
    root: true,
    parser: 'babel-eslint',
    extends: 'airbnb',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },

    settings: {
        'import/ignore': [
            'node_modules',
            '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$',
        ],
        'import/extensions': ['.js'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.json']
            }
        }
    },

    rules: {
        indent: ['error', 4],
        'linebreak-style': 0
    }
};
