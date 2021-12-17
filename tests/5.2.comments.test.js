const { ESLint } = require('eslint');
const rules = require('../index');
const eslint = new ESLint({ overrideConfig: rules });

test('单行注释单独一行，位于代码上方', async () => {
    const result = await eslint.lintText(`
const aa = '1'; // comment
console.log(aa);
`
    );

    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe('Expected comment to be above code.');
});
