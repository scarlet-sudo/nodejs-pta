async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    const num = Number(input())
    console.log(`${'B'.repeat(num / 100)}${'S'.repeat(num / 10 % 10)}${[...Array(num % 10).keys()].map(i => i + 1).join('')}`);
})