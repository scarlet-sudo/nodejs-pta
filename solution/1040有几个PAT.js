async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input=>{
    let patStr = input()
    let [p,pa,pat] = [0,0,0]
    for(const c of patStr) {
        if(c === 'P') {
            p++
        } else if(c === 'A') {
            pa+=p
        } else if(c === 'T') {
            pat+=pa
        }
    }
    console.log(pat%1000000007)
})