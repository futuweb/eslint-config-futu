const { ESLint } = require('eslint');
const rules = require('../index');
const eslint = new ESLint({ overrideConfig: rules });


test('驼峰命名', async () => {
    const result = await eslint.lintText('const a_b = 1; console.log(a_b);');
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Identifier 'a_b' is not in camel case.`);
});

test('class首字母大写', async () => {
    const result = await eslint.lintText('class aa{} console.log(new aa());');
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`A constructor name should not start with a lowercase letter.`);
});
