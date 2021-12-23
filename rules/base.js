// eslint配置文件 - 基础配置
module.exports = {
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 2017,
    },
    env: {
        es2017: true,
        browser: true,
        commonjs: true,
    },
    rules: {
        // unix换行符
        'linebreak-style': ['error', 'unix'],

        // 驼峰命名
        camelcase: ['error'],
        // 构造函数名首字母大写
        'new-cap': ['error'],
        'id-denylist': ['error', 'a', 'b', 'c', 'd'],
        // 4个空格缩进
        indent: ['error', 4, { SwitchCase: 1 }],
        // 中置运算符左右空格
        'space-infix-ops': ['error'],
        // 单目运算符空格
        'space-unary-ops': ['error', { words: true, nonwords: false }],
        // 关键词左右空格
        'keyword-spacing': ['error'],
        // 逗号在结尾
        'comma-style': ['error', 'last'],
        // 逗号结尾空格
        'comma-spacing': ['error', { before: false, after: true }],
        // 分号在结尾
        'semi-style': ['error', 'last'],
        // 分号结尾空格
        'semi-spacing': ['error', { before: false, after: true }],
        // 不允许一次声明多个变量
        'one-var': ['error', 'never'],
        // 不允许连续赋值
        'no-multi-assign': ['error'],
        // 不允许未使用的变量，但参数除外
        'no-unused-vars': ['error', { args: 'none' }],
        // 不允许使用var
        'no-var': ['error'],
        // 悬挂式大括号
        'brace-style': ['error', '1tbs'],
        // 分号党
        semi: ['error', 'always'],
        // 字符串单引号
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        // 允许常量条件
        'no-constant-condition': ['warn'],
        // 只允许单行省略大括号
        curly: ['error', 'all'],
        // 不允许魔法数字，但允许数组索引、默认值、对象中使用
        // 'no-magic-numbers': ['error', { ignoreArrayIndexes: true, ignoreDefaultValues: true, enforceConst: false, detectObjects: false }],
        // 单行代码不得超过100列，HTML模板除外
        'max-len': ['error', { code: 100, ignoreComments: true, ignoreRegExpLiterals: true, ignoreStrings: false, ignoreTemplateLiterals: false, ignorePattern: '<.*>' }],
        // 单函数代码不超过50行（不含空行和注释）
        'max-lines-per-function': ['error', { max: 50, skipBlankLines: true, skipComments: true }],
        // 函数最多接受5个参数
        'max-params': ['error', { max: 5 }],
        // 不允许使用逗号语句
        'no-sequences': ['error'],
        // Symbol带描述
        'symbol-description': ['error'],
        // 尽量使用箭头函数回调
        'prefer-arrow-callback': ['error'],
        // 箭头函数括号
        // 'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'arrow-parens': ['error', 'always'],
        // fallthrough要有注释
        'no-fallthrough': ['error', { commentPattern: 'fall ?through' }],
        // 必须有default
        'default-case': ['error'],
        // default放最后
        'default-case-last': ['error'],
        // 单行注释
        'line-comment-position': ['warn', { position: 'above' }],

        // 未在规范中写明，但重要的
        // 拒绝 tab
        'no-tabs': ['error'],
        // 全等号
        eqeqeq: ['error', 'always'],
        // 不重写保留字
        'no-shadow-restricted-names': ['error'],
        // 不允许label
        'no-labels': ['error'],
        // 不允许扩展原型
        'no-extend-native': ['error'],
        // 不允许给自己赋值
        'no-self-assign': ['error'],
        // 不允许抛非Error实例
        'no-throw-literal': ['warn'],
        // 不允许重名变量
        'no-shadow': ['warn', {
            builtinGlobals: true,
            hoist: 'all',
            allow: [
                'e',
                'err',
                'error',
                'key',
                'value',
                'data',
                'i',
                'j',
                'k',
            ]
         }],
        // jsdoc
        /* require-jsdoc: ["warn", {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
                ArrowFunctionExpression: false
            }
        }],
        valid-jsdoc: ["warn", {
            matchDescription: ".+",
            requireParamDescription: true,
            requireReturnDescription: true
        }], */
        // 变量先声明再使用
        'no-use-before-define': ['error', {
            variables: true,
            functions: false,
            classes: false
        }],
        // this
        'no-invalid-this': ['warn'],
        // 不允许多层3元运算，可读性差
        'no-nested-ternary': ['error'],
        // 不允许多空格（为了好看）
        'no-multi-spaces': ['warn', {
            exceptions: {
                VariableDeclarator: true
            }
        }],
        'prefer-const': ['error'],
        'no-trailing-spaces': ['error'],
        'eol-last': ['error', 'always'],
    }
};
