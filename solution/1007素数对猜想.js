async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

// 埃拉托斯特尼筛法
function sieveOfEratosthenes(range) {
    const prime = Array(range + 1).fill(true)
    prime[0] = prime[1] = false
    for (let i = 2; i <= range; i++) {
        if (prime[i]) {
            for (let j = i * i; j <= range; j += i) {
                prime[j] = false
            }
        }
    }
    const primes = []
    for (let i = 2; i <= range; i++) {
        if (prime[i]) {
            primes.push(i)
        }
    }
    return primes
}

main().then(input => {
    const num = Number(input())
    let cnt = 0
    const primes = sieveOfEratosthenes(num)
    for (let i = 1; i < primes.length; i++) {
        if (primes[i] - primes[i - 1] === 2) {
            cnt++
        }
    }
    console.log(cnt);
})