async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input=>{
    let [needCnt,haveCnt] = [Array(200).fill(0),Array(200).fill(0)]
    let [have,need] = [input(),input()]
    let needZhu = 0
    let yes = true
    for (const e of need) {
        needCnt[e.charCodeAt(0)]++
    }
    for(let e of have) {
        haveCnt[e.charCodeAt(0)]++
    }
    for(let i =0;i<200;i++) {
        haveCnt[i] -= needCnt[i]
        if(haveCnt[i]<0) {
            yes = false
            needZhu+=(-haveCnt[i])
        }
    }
    if(yes) {
        console.log(`Yes ${haveCnt.reduce((a,b)=>a+b)}`)
    } else {
        console.log(`No ${needZhu}`)
    }
})