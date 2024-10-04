async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

// Sn = 2*n^2 - 1 S22<1000 S23>1000
function S(n) {
    return 2 * n * n - 1
}

main().then(input => {
    let [k, c] = input().split(' ')
    k = Number(k)
    let [n, remain] = [0, 0]
    for (n = 23; n >= 0; n--) {
        if (S(n) <= k) {
            remain = k - S(n)
            break
        }
    }
    for (let i = 2 * n - 1, space = 0; i >= 0; i -= 2) {
        console.log(`${' '.repeat(space++)}${c.repeat(i)}`)
    }
    for (let i = 3, space = n - 2; i <= 2 * n - 1; i += 2) {
        console.log(`${' '.repeat(space--)}${c.repeat(i)}`)
    }
    console.log(remain)
})