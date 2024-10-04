// JS语言性能问题导致测试点3、4运行超时
// 建议使用C++完成本题
let chunks = []

let a = Array.from({length: 201}, () =>
    Array.from({length: 101}, () => [])
)
let b = Array.from({length: 201}, () =>
    Array.from({length: 101}, () => [])
)
let c = Array.from({length: 201}, () =>
    Array.from({length: 101}, () => [])
)
let d = Array.from({length: 201}, () =>
    Array.from({length: 101}, () => [])
)


function f(arr,l,l2) {
    for(let i = 200;i>=l2;i--) {
        for(let j = 100;j>=l;j--) {
            if(arr[i][j]) {
                arr[i][j].sort((a, b) => a - b)
                for(let k = 0;k<arr[i][j].length;k++) {
                    process.stdout.write(`${arr[i][j][k]} ${j} ${i-j}\n`)
                }
            }
        }
    }
}

process.stdin.on("data", (chunk => {
    chunks.push(chunk)
}))
process.stdin.on("end", (() => {
    let input = Buffer.concat(chunks).toString().trim().split("\n");
    let tmp = input[0].split(' ')
    let n = Number(tmp[0]),l = Number(tmp[1]),h = Number(tmp[2])
    for(let i = 1;i<input.length;i++) {
        // 不使用解构赋值是因为会带来额外的性能开销
        // https://segmentfault.com/a/1190000045326384
        let x = input[i].split(' ').map(Number)
        let de = x[1],cai = x[2],sum = x[1]+x[2]
        if(de<l||cai<l) {
            n--
            continue
        }
        if(de >= h && cai>=h) a[sum][de].push(x[0])
        else if(de >= h) b[sum][de].push(x[0])
        else if(de >= cai) c[sum][de].push(x[0])
        else d[sum][de].push(x[0])
    }
    process.stdout.write(`${n}\n`)
    let l2 = l*2
    f(a,l,l2)
    f(b,l,l2)
    f(c,l2)
    f(d,l,l2)
}))