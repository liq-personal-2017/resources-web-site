module.exports = {
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            // jsx: true
        },
        sourceType: 'module',
        // exclude: ['lib']
    },
    globals: {
        $: false,
        _: false,
    },
    overrides: [
        {
            files: ['./*.js'],
            excludedFiles: './lib/**/*.js',
            // rules: {
            //     quotes: [2, 'single']
            // }
        },
    ],
    // plugins: ['react'],
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'never'],
        'no-console': 0,
        'no-unused-vars': 0,
        'max-len': 0,
        'object-curly-spacing': ['warn', 'always'],
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'always',
                imports: 'never',
                exports: 'never',
                functions: 'ignore',
            },
        ],
    },
}
