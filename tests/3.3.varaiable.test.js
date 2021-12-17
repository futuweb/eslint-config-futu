const { ESLint } = require('eslint');
const rules = require('../index');
const eslint = new ESLint({ overrideConfig: rules });

test('不允许一次声明多个变量', async () => {
    const result = await eslint.lintText(`let aa = 1, bb = 2; console.log(aa, bb);`);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Split 'let' declarations into multiple statements.`);
});

test('不允许连续赋值', async () => {
    const result = await eslint.lintText(`let aa; let bb; aa = bb = '1'; console.log(aa, bb);`);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Unexpected chained assignment.`);
});

test('不允许未使用的变量，但参数除外', async () => {
    let result;

    result = await eslint.lintText(`
let aa = 1;
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`'aa' is assigned a value but never used.`);

    result = await eslint.lintText(`
let aa = function (bb) {
    console.log('1');
};
aa('1');
    `)
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);
});

test('不允许使用var', async () => {
    const result = await eslint.lintText(`var aa = 1; console.log(aa);`);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Unexpected var, use let or const instead.`);
});
