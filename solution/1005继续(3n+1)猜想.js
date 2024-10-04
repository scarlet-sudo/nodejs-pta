async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

function callatz(n) {
    if (n === 1) {
        return 1
    }
    if (n % 2 === 1) {
        n = 3 * n + 1
    }
    return n / 2
}

main().then(input => {
    let n = Number(input())
    let arr = input().split(' ').map(Number)
    let ans = []
    let set = new Set([1])
    for (let i = 0; i < n; i++) {
        let e = arr[i]
        while (e !== 1) {
            e = callatz(e)
            set.add(e)
        }
    }
    arr.forEach((e) => {
        if (!set.has(e)) ans.push(e)
    })
    console.log(ans.sort((a, b) => b - a).join(' '))
})