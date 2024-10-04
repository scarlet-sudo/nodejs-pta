async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let nums = input().split(' ').map(Number)
    let result = [0, 0, 0, 0, 0]
    let [a2fh, a4cnt, a4sum] = [1, 0, 0]
    let has = Array(5).fill(false)
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]
        switch (num % 5) {
            case 0: if (!(num & 1)) { result[0] += num; has[0] = true } break;
            case 1: result[1] += num * a2fh; a2fh *= -1; has[1] = true; break;
            case 2: result[2]++; has[2] = true; break;
            case 3: a4sum += num; a4cnt++; has[3] = true; break;
            case 4: result[4] = num > result[4] ? num : result[4]; has[4] = true; break;
        }
    }
    if (a4cnt !== 0) {
        result[3] = (a4sum / a4cnt).toFixed(1)
    }
    console.log(result.map((e, i) => has[i] ? e : 'N').join(' '))
})