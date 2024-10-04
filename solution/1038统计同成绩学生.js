async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input=>{
    const grade = Array(101).fill(0)
    input()
    input().split(' ').forEach(e=>grade[Number(e)]++)
    console.log(input().split(' ').slice(1).map(e=>grade[Number(e)]).join(' '))
})