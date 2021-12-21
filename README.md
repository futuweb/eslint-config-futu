# 富途ESLint规则

富途所有项目共享的ESLint规则，与[JavaScript编码规范](http://gitlab.futunn.com/web/webwiki/wikis/style-guidelines-javascript)对应。

## 预设场景

- 浏览器 ✅
- Node.js ✅
- CommonJS ✅
- ES6(ES2015) ✅
- ES2017 ✅
- Jest ✅
- Vue.js ✅
- jQuery ❌
- AMD ❌

## 使用方式

1 安装依赖：

```sh
npm install eslint eslint-config-futu --save-dev
```

2 在项目web根目录上层新建.eslintrc.js文件

```javascript
module.exports = {
    root: true,
    extends: 'eslint-config-futu',
    env: {
    },
    parserOptions: {
    },
    rules:{
        // 如果项目有特殊需求，可在此覆盖
    }
};
```

## 在TypeScript项目中使用

1. 安装依赖

```bash
npm install eslint typescript eslint-config-futu --save-dev
```

2. 在项目web根目录上层新建.eslintrc.js文件

```javascript
module.exports = {
    root: true,
    extends: 'eslint-config-futu/typescript',  // 这里要使用'eslint-config-futu/typescript'配置
    env: {
        browser: true,
        node: true,
        amd: true
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module'，
        // recommend to use another config file like tsconfig.eslint.json and extends tsconfig.json in it.
    		// because you may be need to lint test/**/*.test.ts but no need to emit to js.
    		// @see https://github.com/typescript-eslint/typescript-eslint/issues/890
    		project: './tsconfig.json'
    },
    rules:{
        // 如果项目有特殊需求，可在此覆盖
    }
}
```



## 附：编辑器使用方式

不要全局安装ESLint工具，不要全局安装ESLint工具，不要全局安装ESLint工具。

### WebStorm

设置（Preference） - 语言框架（Languages & Frameworks） - JavaScript - 质量工具（Code Quality Tools） - ESLint

勾上 启用（Enable），Node interpreter写 Node 的路径，一般会自动检测到，如果检测不到需要自己选一下。

ESLint package选择**项目中的**`node_modules/eslint`，注意是项目中的，不能是全局的。剩下配置保留现状即可。

### sublime text

如果没有安装Package Control的可以先安装一下，说明见这里。<https://packagecontrol.io/installation>

然后安装SublimeLinter和SublimeLinter-contrib-eslint即可。

> 如果使用Package Control拉不出插件列表，可以设置一下Channel：打开命令输入框，找到Package Control: Add Channel，输入 https://git.oschina.net/mugood/PackageControl/raw/master/channel_v3.json 即可。

### VSCode

安装ESLint插件，启用即可。

## 注：为什么不能使用全局ESLint工具

因为在项目中会通过npm在项目中安装`eslint-config-futu`，然后基于这个公共规则配置文件来使用ESLint。

然而ESLint有一个“Bug”，全局ESLint无法找到项目中的`eslint-config-futu`，所以无法应用公共规则配置文件。

所以只能使用项目中安装的`eslint`依赖。按上方编辑器的配置说明，编辑器均会使用项目中的`eslint`依赖。

如果不在编辑器中使用，想在命令行使用，可以有两种方法：

1. 使用`./node_modules/.bin/eslint`，或者将这个命令写入`npm scripts`。在`npm scripts`中可以直接写`eslint`，会默认从`./node_modules/.bin`下查找`eslint`命令。
2. 全局安装`eslint-cli`这个第三方库，然后使用`eslint`命令。

## 历史记录

### 2.0.0-alpha.1 2021-12-21

- 禁用`no-magic-numbers`规则

### 2.0.0-alpha.0 2021-12-17

- 修订诸多规范

### 1.1.0 2020-12-24

- 增加 [prefer-const](https://eslint.org/docs/rules/prefer-const) 检查
- 增加 [no-var](https://eslint.org/docs/rules/no-var) 检查
- 支持typescript文件校验
- 增加 [@typescript-eslint/no-var-requires](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md) 检查
- 增加 [@typescript-eslint/no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md) 检查
- 增加 [@typescript-eslint/ban-ts-comment](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md) 检查

### 1.0.3 2017-04-20

- 修正 tag 1.0.2

### 1.0.2 2017-04-18

- 修正 `no-use-before-define` 规则，只做变量的检查，函数与类不做检查

### 1.0.1 2017-04-14

- 允许 console [no-console](http://eslint.org/docs/rules/no-console)
- 增加[no-self-assign](http://eslint.org/docs/rules/no-self-assign)检查
- 增加[no-tabs](http://eslint.org/docs/rules/no-tabs)检查
- 增加[valid-jsdoc](http://eslint.org/docs/rules/valid-jsdoc)检查
- 增加[no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)检查
- 增加[no-use-before-define](http://eslint.org/docs/rules/no-use-before-define)检查
- 增加[no-multi-assign](http://eslint.org/docs/rules/no-multi-assign)检查
- 增加[no-invalid-this](http://eslint.org/docs/rules/no-invalid-this)检查
- 增加[new-cap](http://eslint.org/docs/rules/new-cap)检查
- 增加[max-params](http://eslint.org/docs/rules/max-params)检查
- 增加[no-useless-return](http://eslint.org/docs/rules/no-useless-return)检查
- 增加[no-nested-ternary](http://eslint.org/docs/rules/no-nested-ternary)检查
- 增加[no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces)检查
- 增加[guard-for-in](http://eslint.org/docs/rules/guard-for-in)检查

### 1.0.0 2017-03-30

- 初始化规则
