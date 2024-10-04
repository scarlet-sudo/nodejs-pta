async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
}

function calc(m, n) {
    if (n === 0) return 'Inf'
    if (m === 0) return '0'
    let ans = []
    let isNegative = (m * n) < 0
    if (isNegative) ans.push('(-')
    m = m > 0 ? m : -m
    n = n > 0 ? n : -n
    let x = ~~(m / n)
    if (x !== 0) ans.push(x.toString())
    if (m % n === 0) {
        if (isNegative) ans.push(')')
        return ans.join('')
    }
    if (x !== 0) ans.push(' ')
    m = m - n * x
    let t = gcd(m, n)
    m = m / t
    n = n / t
    // 这里加上toString()是为了适配BigInt类型的参数，但用例没有这么大的数不用BigInt也过了
    ans.push(`${m.toString()}/${n.toString()}${isNegative ? ')' : ''}`)
    return ans.join('')
}

main().then(input => {
    let [[a, b], [c, d]] = input().split(' ').map(e => e.split('/').map(Number))
    let [x, y] = [calc(a, b), calc(c, d)]
    console.log(`${x} + ${y} = ${calc(a * d + b * c, b * d)}`)
    console.log(`${x} - ${y} = ${calc(a * d - b * c, b * d)}`)
    console.log(`${x} * ${y} = ${calc(a * c, b * d)}`)
    console.log(`${x} / ${y} = ${calc(a * d, b * c)}`)
})