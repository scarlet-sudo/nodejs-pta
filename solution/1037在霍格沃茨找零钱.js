async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

// 29个铜币换1个银币，17个银币换1个金币
main().then(input => {
    const [[Au1, Ag1, Cu1], [Au2, Ag2, Cu2]] = input().split(' ').map(e => e.split('.').map(Number))
    let ling = ((Au2 * 17 + Ag2) * 29 + Cu2) - ((Au1 * 17 + Ag1) * 29 + Cu1)
    let isNegative = false
    if (ling < 0) {
        ling = -ling
        isNegative = true
    }
    const res = [~~(~~(ling / 29) / 17), ~~(ling / 29) % 17, ling % 29]
    console.log(`${isNegative ? '-' : ''}${res.join('.')}`)
})