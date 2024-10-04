async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    const num = Number(input())
    let cnt = 1
    while (cnt <= num) {
        let [a, b, c] = input().split(' ').map(Number)
        console.log(`Case #${cnt++}: ${(a + b) > c}`)
    }
})