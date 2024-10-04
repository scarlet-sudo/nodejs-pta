async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

const N = 500000

main().then(input => {
    let [l, r] = input().split(' ').map(Number)
    const isPrime = Array(N).fill(true)
    isPrime[0] = isPrime[1] = false
    for (let i = 2; i <= N; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= N; j += i) {
                isPrime[j] = false
            }
        }
    }
    const primes = [-1]
    for (let i = 2; i <= N; i++) {
        if (isPrime[i]) {
            primes.push(i)
        }
    }
    while (l <= r) {
        if ((l + 10) <= r) {
            console.log(primes.slice(l, l + 10).join(' '))
            l += 10
        } else {
            console.log(primes.slice(l, r + 1).join(' '))
            break
        }
    }
})