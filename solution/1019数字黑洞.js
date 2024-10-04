async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

function numOption(num, dz) {
    num = `${num}`
    if (dz) {
        return [...num].sort().join('')
    } else {
        return [...num].sort((a, b) => b - a).join('')
    }
}

main().then(input => {
    let res = input()
    do {
        let [a, b] = [numOption(res, true), numOption(res, false)]
        res = (Number(a) - Number(b)).toString().padStart(4, '0')
        console.log(`${a} - ${b} = ${res}`)
    } while (res)

})