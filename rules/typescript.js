/**
 * Created by JackieYao on 2020/12/23.
 */
module.exports = {
    extends: [ 'plugin:@typescript-eslint/recommended' ],
    rules: {
        // 是否可使用require导入
        '@typescript-eslint/no-var-requires': 'off',
        // 是否可使用any类型
        '@typescript-eslint/no-explicit-any': ['warn'],
        // 是否可使用`@ts-<directive>`
        '@typescript-eslint/ban-ts-comment': ['warn'],
    }
}
