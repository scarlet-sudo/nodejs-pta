async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input=>{
    let [n,c] = input().split(' ')
    n = Number(n)
    console.log(c.repeat(n))
    for (let i = 0;i<(n/2-2);i++) {
        console.log(`${c}${' '.repeat(n-2)}${c}`)
    }
    console.log(c.repeat(n))
})