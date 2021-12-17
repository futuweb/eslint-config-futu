const { ESLint } = require('eslint');
const rules = require('../index');
const eslint = new ESLint({ overrideConfig: rules });

test('4空格缩进', async () => {
    const result = await eslint.lintText('\tconst aa = 1;\nif (aa) {\n  console.log(aa);\n}');
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(2);
    expect(result[0].messages[0].message).toBe(`Expected indentation of 0 spaces but found 1 tab.`);
    expect(result[0].messages[1].message).toBe(`Expected indentation of 4 spaces but found 2.`);
});

test('中置运算符左右空格', async () => {
    const result = await eslint.lintText('const a1=1; const a2=2; const aa=a1+a2; console.log(aa);');
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(4);
    expect(result[0].messages[0].message).toBe(`Operator '=' must be spaced.`);
    expect(result[0].messages[1].message).toBe(`Operator '=' must be spaced.`);
    expect(result[0].messages[2].message).toBe(`Operator '=' must be spaced.`);
    expect(result[0].messages[3].message).toBe(`Operator '+' must be spaced.`);
});

test('单目运算符空格', async () => {
    let result;

    result = await eslint.lintText('const a1 = 2; const aa = typeof(a1); console.log(aa);');
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Unary word operator 'typeof' must be followed by whitespace.`);

    result = await eslint.lintText('let aa = 2; console.log(aa++);');
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);
});

test('关键词左右空格', async () => {
    let result;

    result = await eslint.lintText(`
const half = 0.5;
if(Math.random() > half){
    console.log('1');
}else{
    console.log('2');
}`);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(3);
    expect(result[0].messages[0].message).toBe(`Expected space(s) after \"if\".`);
    expect(result[0].messages[1].message).toBe(`Expected space(s) before \"else\".`);
    expect(result[0].messages[2].message).toBe(`Expected space(s) after \"else\".`);

    result = await eslint.lintText(`
const half = 0.5;
if (Math.random() > half){
    console.log('1');
} else {
    console.log('2');
}`);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);
});

test('switch case缩进', async () => {
    let result;

    result = await eslint.lintText(`
const half = 0.5;
const one = 1;
const two = 2;
const aa = Math.random() > half ? one : two;
switch (aa){
case one:
    console.log('1');
    break;
case two:
    console.log('2');
    break;
}
    `);
    expect(result.length).toBe(1);
    // 一共有6行需要缩进
    expect(result[0].messages.length).toBe(6);
    expect(result[0].messages[0].message).toBe(`Expected indentation of 4 spaces but found 0.`);

    result = await eslint.lintText(`
const half = 0.5;
const one = 1;
const two = 2;
const aa = Math.random() > half ? one : two;
switch (aa){
    case one:
        console.log('1');
        break;
    case two:
        console.log('2');
        break;
}
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);
});
