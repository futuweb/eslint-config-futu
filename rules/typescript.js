/**
 * Created by JackieYao on 2020/12/23.
 */
const base = require('./base');

module.exports = {
    extends: [ 'plugin:@typescript-eslint/recommended' ],
    rules: {
        ...base.rules,
        // 是否可使用require导入
        '@typescript-eslint/no-var-requires': 'off',
        // 是否可使用any类型
        '@typescript-eslint/no-explicit-any': ['warn'],
        // 是否可使用`@ts-<directive>`
        '@typescript-eslint/ban-ts-comment': ['warn'],
        // 数组声明
        '@typescript-eslint/array-type': ['error', {'default': 'array'}],
        // 对象类型声明使用interface
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        // 命名约定
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'interface',
                'format': ['PascalCase'],
                'custom': {
                    'regex': '^[A-Z]',
                    'match': true
                }
            }
        ],
        // 函数与类方法的返回值需要被显式的指定
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        // 方法签名的声明方式使用property格式
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        // for循环
        '@typescript-eslint/prefer-for-of': ['warn'],
        // 使用 import type {} 进行类型的导入
        '@typescript-eslint/consistent-type-imports': ['error', {'prefer': 'type-imports'}],
        // 使用可选链
        '@typescript-eslint/prefer-optional-chain': ['warn'],
        // 不允许空的interface，使用了extends除外
        '@typescript-eslint/no-empty-interface': ['error', {'allowSingleExtends': true}],
        // 枚举成员必须初始化
        '@typescript-eslint/prefer-enum-initializers': ['error'],
        // 枚举成员值只能是string number boolean等，不允许需要计算的方式
        '@typescript-eslint/prefer-literal-enum-member': ['error', { 'allowBitwiseExpressions': true }],
        // 使用@ts-expect-error而不是@ts-ignore
        '@typescript-eslint/prefer-ts-expect-error': ['warn'],
        // 返回值是promise的函数必须声明async
        '@typescript-eslint/promise-function-async': ['warn'],
        // switch判断条是联合类型时，其每一个类型分支都需要被处理
        '@typescript-eslint/switch-exhaustiveness-check': ['warn'],
        // 类型定义 函数参数、对象属性、类成员 必须声明类型
        '@typescript-eslint/typedef': [
            'error',
            {
                'arrowParameter': true,
                'parameter': true,
                'propertyDeclaration': true,
                'memberVariableDeclaration': true
            }
        ],
        // 关闭此规则，因为eslint8之前的版本对导入的类型定义会报错 xxx is defined but never used，
        // ts自己有类似的提醒，所以关闭eslint中的这个规则
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['off']
    }
}
