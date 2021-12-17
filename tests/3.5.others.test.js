const { ESLint } = require('eslint');
const rules = require('../index');
const eslint = new ESLint({ overrideConfig: rules });

test('悬挂式大括号', async () => {
    let result;

    result = await eslint.lintText(`
function aa ()
{
    console.log('1');
}
aa();
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);

    result = await eslint.lintText(`
function aa () {
    console.log('1');
}
aa();
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);
});

test('分号党', async () => {
    const result = await eslint.lintText(`
function aa () {
    console.log('1')
}
aa()
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(2);
    expect(result[0].messages[0].message).toBe(`Missing semicolon.`);
    expect(result[0].messages[1].message).toBe(`Missing semicolon.`);
});

test('单引号', async () => {
    let result;

    // 普通字符串
    result = await eslint.lintText(`
const aa = "1";
console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Strings must use singlequote.`);

    // 模板字符串
    result = await eslint.lintText(`
const aa = \`1\`;
console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);

    // 需要转义字符串
    result = await eslint.lintText(`
const aa = "1'";
console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);
});

test('单行if/else/for/while需要大括号包裹', async () => {
    let result;

    result = await eslint.lintText(`
if (true) console.log('1');
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(2);
    expect(result[0].messages[0].message).toBe(`Unexpected constant condition.`);
    expect(result[0].messages[1].message).toBe(`Expected { after 'if' condition.`);

    result = await eslint.lintText(`
if (true) {
    console.log('1');
} else console.log('2');
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(2);
    expect(result[0].messages[1].message).toBe(`Expected { after 'else'.`);

    result = await eslint.lintText(`
const one = 1;
const ten = 10;
for (let aa = one; aa < ten; aa++) console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Expected { after 'for' condition.`);

    result = await eslint.lintText(`
while (one) console.log('1');
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(2);
    expect(result[0].messages[1].message).toBe(`Expected { after 'while' condition.`);
});

test('不允许魔法数字', async () => {
    const result = await eslint.lintText(`
console.log(123);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`No magic number: 123.`);
});

test('单行代码不超过100字符', async () => {
    let result;

    result = await eslint.lintText(`
const aa = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`This line has a length of 114. Maximum allowed is 100.`);

    result = await eslint.lintText(`
const aa = '<div class="abc def ghi jkl mno pqr stu vw xyz">12345678901234567890123456789012345678901234567890</div>';
console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);
});

test('函数不得超过50行', async () => {
    let functionText = `const aa = function () {\n`;
    for (let i = 0; i < 51; i++) {
        functionText += `    console.log('${i}');\n`;
    }
    functionText += `};\n`;
    functionText += `aa();\n`;

    const result = await eslint.lintText(functionText);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Function has too many lines (53). Maximum allowed is 50.`);
});

test('函数参数不得超过5个', async () => {
    const result = await eslint.lintText(`
const aa = function (p1, p2, p3, p4, p5, p6) {
    console.log(p1, p2, p3, p4, p5, p6);
};
aa('1', '2', '3', '4', '5', '6');
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Function has too many parameters (6). Maximum allowed is 5.`);
});

test('不允许使用逗号语句', async () => {
    const result = await eslint.lintText(`console.log('1'), console.log('2');`);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Unexpected use of comma operator.`);
});

test('Symbol带描述', async () => {
    const result = await eslint.lintText(`
const aa = Symbol();
console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Expected Symbol to have a description.`);
});

test('尽量使用箭头函数回调', async () => {
    let result;

    result = await eslint.lintText(`
const aa = ['1', '2', '3'].map(function (item) {
    return item;
});
console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Unexpected function expression.`);

    result = await eslint.lintText(`
const aa = ['1', '2', '3'].map(item => item);
console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);
});

test('箭头函数括号', async () => {
    let result;

    result = await eslint.lintText(`
const aa = ['1', '2', '3'].map((item) => {
    return item;
});
console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);

    result = await eslint.lintText(`
const aa = ['1', '2', '3'].map(item => item);
console.log(aa);
    `);
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);
});
