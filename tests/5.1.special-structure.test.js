const { ESLint } = require('eslint');
const rules = require('../index');
const eslint = new ESLint({ overrideConfig: rules });


test('fallthrough要有注释', async () => {
    let result;

    result = await eslint.lintText(`
const cond = Math.random() ? '1' : '2';
function aa () {
    switch (cond) {
        case '1':
            console.log('1');
        case '2':
            console.log('1 or 2');
            break;
        default:
            console.log('3');
            break;
    }
}
aa();
`
    );
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Expected a 'break' statement before 'case'.`);

    result = await eslint.lintText(`
const cond = Math.random() ? '1' : '2';
function aa () {
    switch (cond) {
        case '1':
            console.log('1');
            // fall through
        case '2':
            console.log('1 or 2');
            break;
        default:
            console.log('3');
            break;
    }
}
aa();
`
    );
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);

});

test('必须有default', async () => {
    let result;

    result = await eslint.lintText(`
const cond = Math.random() ? '1' : '2';
function aa () {
    switch (cond) {
        case '1':
            console.log('1');
            break;
        case '2':
            console.log('1 or 2');
            break;
    }
}
aa();
`
    );
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Expected a default case.`);

    result = await eslint.lintText(`
const cond = Math.random() ? '1' : '2';
function aa () {
    switch (cond) {
        case '1':
            console.log('1');
            // fall through
        case '2':
            console.log('1 or 2');
            break;
        default:
            // nothing
    }
}
aa();
`
    );
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(0);

});

test('default在最后', async () => {
    let result;

    result = await eslint.lintText(`
const cond = Math.random() ? '1' : '2';
function aa () {
    switch (cond) {
        case '1':
            console.log('1');
            break;
        default:
            console.log('3');
            break;
        case '2':
            console.log('1 or 2');
            break;
    }
}
aa();
`
    );
    expect(result.length).toBe(1);
    expect(result[0].messages.length).toBe(1);
    expect(result[0].messages[0].message).toBe(`Default clause should be the last clause.`);
});
