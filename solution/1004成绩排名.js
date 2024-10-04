async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    let maxgs = ['', '', 0]
    let mings = ['', '', 100]
    let n = Number(input())
    while (n--) {
        let [a, b, c] = input().split(' ')
        let stu = [a, b, Number(c)]
        maxgs = stu[2] > maxgs[2] ? stu : maxgs
        mings = stu[2] < mings[2] ? stu : mings
    }
    console.log(`${maxgs[0]} ${maxgs[1]}`);
    console.log(`${mings[0]} ${mings[1]}`);
})