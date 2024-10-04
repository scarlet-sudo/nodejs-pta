async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let n = Number(input())
    let a = input().split(' ').map(Number)
    let b = input().split(' ').map(Number)
    let i = 0
    while (i < n - 1 && b[i] <= b[i + 1]) {
        i++
    }
    let j = i + 1
    while (j < n && a[j] === b[j]) {
        j++
    }
    if (j === n) {
        console.log("Insertion Sort")
        // 对a数组进行插入排序的部分排序
        for (let k = 0; k < i + 2; k++) {
            for (let l = k; l > 0 && a[l - 1] > a[l]; l--) {
                [a[l], a[l - 1]] = [a[l - 1], a[l]]
            }
        }
    } else {
        console.log("Merge Sort")
        let k = 1, flag = true
        while (flag) {
            flag = false
            for (let m = 0; m < n; m++) {
                if (a[m] !== b[m]) {
                    flag = true
                }
            }
            k = k * 2
            for (let m = 0; m < Math.floor(n / k); m++) {
                a.splice(m * k, k, ...a.slice(m * k, m * k + k).sort((x, y) => x - y))
            }
            a.splice(Math.floor(n / k) * k, n - Math.floor(n / k) * k, ...a.slice(Math.floor(n / k) * k, n).sort((x, y) => x - y))
        }
    }
    console.log(a.join(' '))
})