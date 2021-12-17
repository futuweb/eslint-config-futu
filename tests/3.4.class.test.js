const { ESLint } = require('eslint');
const rules = require('../index');
const eslint = new ESLint({ overrideConfig: rules });

test('空……', async () => {
    // 空，啥也干不了
});
