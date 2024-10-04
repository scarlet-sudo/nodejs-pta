async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let n = Number(input())
    let scores = Array(1e5 + 10).fill(0)
    let [maxId, maxScore] = [-1, -1]
    while (n--) {
        let [id, score] = input().split(' ').map(Number)
        scores[id] += score
        if (scores[id] > maxScore) {
            maxId = id
            maxScore = scores[id]
        }
    }
    console.log(`${maxId} ${maxScore}`)
})