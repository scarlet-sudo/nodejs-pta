async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let [a, b] = input().split(' ')
    let [ba, bb] = [BigInt(a), BigInt(b)]
    console.log(`${ba / bb} ${ba % bb}`)
})