module.exports = {
    parser: '@babel/eslint-parser',
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    rules: {
        // JSX w plikach .js
        'react/jsx-filename-extension': [1, { extensions: ['.js'] }],

        // React 17+
        'react/react-in-jsx-scope': 'off',

        // NIE zmuszamy do konstruktora (masz class fields)
        'react/state-in-constructor': 'off',

        // NIE zmuszamy do function declaration zamiast arrow
        'react/function-component-definition': 'off',

        // NIE zmuszamy do destrukturyzacji propsów
        'react/destructuring-assignment': 'off',

        // NIE wymagamy PropTypes w każdym komponencie
        'react/prop-types': 'off',

        // Formatowanie
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'max-len': ['error', { code: 100 }],

        // Prettier jako źródło prawdy
        'prettier/prettier': 'error',
    },
};
