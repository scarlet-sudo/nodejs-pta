async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let num = Number(input())
    let cnt = 0
    while (num !== 1) {
        if((num & 1) !== 0) {
            num = num*3 + 1
        }
        num /= 2
        cnt++
    }
    console.log(cnt);
})