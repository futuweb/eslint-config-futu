// eslint配置文件 - 基础配置
module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "commonjs": true,
        "amd": true,
        "jquery": true
    },
    "rules": {
        // unix换行符
        "linebreak-style": ["error", "unix"],
        // 悬挂式大括号
        "brace-style": ["error", "1tbs"],
        // 分号党
        "semi": ["error", "always"],
        // 4个空格缩进
        "indent": ["error", 4],
        // 字符串单引号
        "quotes": ["error", "single"],
        // 全等号
        "eqeqeq": ["error", "always"],
        // 只允许单行省略大括号
        "curly": ["error", "multi-line"],
        // 不重写保留字
        "no-shadow-restricted-names": ["error"],
        // 不允许label
        "no-labels": ["error"],
        // 不允许扩展原型
        "no-extend-native": ["error"],
        // 单词运算符加空格（new typeof之类）
        "space-unary-ops": ["error"],
        // 运算符前后加空格
        "space-infix-ops": ["error"],
        // 不允许给自己赋值
        "no-self-assign": ["error"],
        // 不允许抛非Error实例
        "no-throw-literal": ["warn"],
        // 不允许重名变量
        "no-shadow": ["warn", {
            "builtinGlobals": true,
            "hoist": "all",
            "allow": [
                "e",
                "err",
                "error",
                "key",
                "value",
                "data",
                "i",
                "j",
                "k",
                "$",
                "jQuery"
            ]
         }],
        // jsdoc
        "require-jsdoc": ["warn", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": false
            }
        }],
        // 定义未使用的变量
        "no-unused-vars": ["warn", {
            "vars": "all",
            "args": "none"
        }]
    }
};