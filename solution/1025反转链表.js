// 语言性能问题导致测试点5超时
// 参考了Acwing的题解后，确定已是最优算法
// https://www.acwing.com/file_system/file/content/whole/index/content/4184495/
async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

function reverseLikeCpp(arr, start, end) {
    while (start < end) {
        [arr[start++],arr[end--]] = [arr[end],arr[start]]
    }
}

main().then(input => {
    const N = 1e5 + 10
    let e = Array(N).fill(0), ne = Array(N).fill(0),idx = 0
    let [head, n, k] = input().split(' ').map(Number)
    while (n--) {
        let [addr, val, nextAddr] = input().split(' ').map(Number)
        e[addr] = val
        ne[addr] = nextAddr
    }
    let list = Array(N).fill(0)
    while (head !== -1) {
        list[idx++] = head
        head = ne[head]
    }
    for (let i = 0; i + k <= idx; i += k) {
        reverseLikeCpp(list, i, i + k-1)
    }
    for (let i = 0; i < idx - 1; i++) {
        let a = list[i].toString(), b = list[i + 1].toString()
        console.log(`${a.padStart(5, '0')} ${e[a]} ${b.padStart(5, '0')}`)
    }
    console.log(`${list[idx - 1].toString().padStart(5, '0')} ${e[list[idx - 1]]} -1`)
})