async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let n = Number(input())
    let validCnt = 0
    let [oldest, youngest] = [['', '2014/09/07'], ['', '1814/09/05']]
    while (n--) {
        let [name, date] = input().split(' ')
        if (date <= '2014/09/06' && date >= '1814/09/06') {
            validCnt++
            if (date < oldest[1]) oldest = [name, date]
            if (date > youngest[1]) youngest = [name, date]
        }
    }
    if (validCnt === 0) {
        console.log(0)
    } else {
        console.log(`${validCnt} ${oldest[0]} ${youngest[0]}`)
    }
})