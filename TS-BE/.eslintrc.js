module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typecript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {},
}