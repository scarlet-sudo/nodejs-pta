async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

// 这个函数是由通义千问大模型生成的
function scientificToDecimal(scientificNotation) {
    // 匹配科学计数法的正则表达式
    const regex = /^([+-]?)(\d+)\.(\d+)E([+-]\d+)$/;

    // 使用正则表达式解析输入
    const match = scientificNotation.match(regex);
    if (!match) {
        throw new Error("Invalid input format");
    }

    // 提取各个部分
    const [_, sign, integerPart, decimalPart, exponent] = match;
    const fullNumber = integerPart + decimalPart; // 整数部分和小数部分合并
    const exp = parseInt(exponent, 10); // 将指数部分转换为整数

    // 计算小数点应该移动的位置
    let result = '';
    if (exp > 0) {
        // 正指数：向右移动小数点
        result = fullNumber + '0'.repeat(exp - decimalPart.length);
        if (result.length < exp + 1) {
            result = result.padEnd(exp + 1, '0');
        }
    } else if (exp < 0) {
        // 负指数：向左移动小数点
        result = '0.' + '0'.repeat(-exp - 1) + fullNumber;
        if (result.length < fullNumber.length - exp) {
            result = result.padStart(fullNumber.length - exp, '0');
        }
    } else {
        // 指数为0：直接拼接整数部分和小数部分
        result = integerPart + '.' + decimalPart;
    }

    // 添加符号
    return (sign === '-' ? '-' : '') + result;
}

main().then(input=>{
    let s = input()
    console.log(scientificToDecimal(s))
})