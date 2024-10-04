async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let [a, b] = input().split(' ').map(Number)
    let arr = input().split(' ')
    b = b % a
    if (b === 0) {
        console.log(arr.join(' '))
        process.exit(0)
    }
    arr.reverse()
    console.log(`${arr.slice(0, b).reverse().join(' ')} ${arr.slice(b).reverse().join(' ')}`)
})