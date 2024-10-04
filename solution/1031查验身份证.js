async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

const q = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
const z = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
main().then(input => {
    let n = Number(input())
    let allPassed = true
    while (n--) {
        let idCard = input()
        let m = z[idCard.slice(0, 17).split('').reduce((a, b, i) => a + Number(b) * q[i], 0) % 11]
        if (m !== idCard[17]) {
            allPassed = false
            console.log(idCard)
        }
    }
    if (allPassed) {
        console.log("All passed")
    }
})