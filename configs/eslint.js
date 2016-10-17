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
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'linebreak-style': 0,
        'comma-dangle': 0,
        'no-use-before-define': ['error', {'functions': false}],
        'no-param-reassign': ['error', {'props': false}],
        'react/jsx-filename-extension': 0,
        'react/jsx-indent-props': ['error', 4],
        'react/prefer-stateless-function': ['error']
    }
};
