async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then((input)=>{
    let arr = input().split(' ').map(Number)
    let res = 0
    for(let i = 1;i<arr.length;i++) {
        if(arr[i] !==0) {
            res = `${i}`
            arr[i]--
            break
        }
    }
    for(let i = 0;i<arr.length;i++) {
        res += `${i}`.repeat(arr[i])
    }
    console.log(res);
})