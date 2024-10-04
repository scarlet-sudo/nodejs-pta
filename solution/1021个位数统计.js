async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let res = Array(10).fill(0)
    input().split('').map(Number).forEach(e => res[e]++)
    res.forEach((e, i) => {
        if (e !== 0) console.log(`${i}:${e}`)
    })
})