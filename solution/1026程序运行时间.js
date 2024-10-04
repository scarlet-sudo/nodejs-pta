async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let t = Math.round((input().split(' ').map(Number).reduce((a, b) => b - a) / 100))
    console.log(`${(~~(t / 3600)).toString().padStart(2, '0')}:${(~~(t / 60) % 60).toString().padStart(2, '0')}:${(t % 60).toString().padStart(2, '0')}`)
})