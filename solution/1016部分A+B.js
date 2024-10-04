async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

function count(s, e) {
    let cnt = 0
    for (const c of s) {
        if (c === e) {
            cnt++
        }
    }
    return cnt
}

main().then(input => {
    let [a, da, b, db] = input().split(" ")
    let [ca, cb] = [count(a, da), count(b, db)]
    console.log(`${Number(da.repeat(ca)) + Number(db.repeat(cb))}`)
})