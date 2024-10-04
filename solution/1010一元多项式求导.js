async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    // 测试点有误，数字间有多个空格
    const terms = input().split(/\s+/).map(Number)
    let ans = []
    for (let i = 0; i < terms.length; i += 2) {
        let a = terms[i], b = terms[i + 1]
        if (b !== 0) {
            ans.push(a * b, b - 1)
        }
    }
    console.log(`${ans.length === 0 ? '0 0' : ans.join(' ')}`)
})