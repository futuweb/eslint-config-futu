# 富途ESLint规则

富途所有项目共享的ESLint规则，与[JavaScript编码规范](http://gitlab.futunn.com/web/webwiki/wikis/style-guidelines-javascript)对应。

## 使用方式

1 安装依赖：

```sh
npm install eslint --save-dev
npm install git+http://gitlab.futunn.com/webpackage/eslint-config-futu.git#1.0.0 --save-dev
```

2 在项目web根目录上层新建.eslintrc.js文件

```javascript
module.exports = {
    root: true,
    extends: 'eslint-config-futu'
    rules:{
        // 如果项目有特殊需求，可在此覆盖
    }
};
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