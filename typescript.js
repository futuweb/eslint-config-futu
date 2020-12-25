/**
 * Created by JackieYao on 2020/12/23.
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [ '@typescript-eslint' ],
    extends: [
        './rules/base.js',
        './rules/typescript.js',
    ],
};
