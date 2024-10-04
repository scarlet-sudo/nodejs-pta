async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let [s1,s2] = [input(),input()]
    let [i1,i2] = [0,0]
    let set = new Set()
    while (i1<s1.length) {
        const c = s1[i1++].toUpperCase()
        if(c===s2[i2]) {
            i2++
        } else {
            if(!set.has(c)) {
                process.stdin.write(c)
                set.add(c)
            }
        }
    }
})