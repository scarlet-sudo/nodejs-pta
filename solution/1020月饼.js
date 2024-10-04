async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let [n, d] = input().split(' ').map(Number)
    let [tmp1, tmp2] = [input().split(' ').map(Number), input().split(' ').map(Number)]
    let earnings = 0, mooncakes = []
    for (let i = 0; i < n; i++) {
        mooncakes.push([tmp1[i], tmp2[i] / tmp1[i]])
    }
    mooncakes.sort((a, b) => b[1] - a[1])
    for (let i = 0; i < n; i++) {
        if (mooncakes[i][0] >= d) {
            earnings += d * mooncakes[i][1]
            break
        }
        d -= mooncakes[i][0]
        earnings += mooncakes[i][0] * mooncakes[i][1]
    }
    console.log(earnings.toFixed(2))
})