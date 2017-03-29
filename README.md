# 富途ESLint规则

富途所有项目共享的ESLint规则，与[JavaScript编码规范](http://gitlab.futunn.com/web/webwiki/wikis/style-guidelines-javascript)对应。

## 使用方式

1 安装依赖：

```sh
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