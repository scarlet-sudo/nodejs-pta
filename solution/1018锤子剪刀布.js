async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

function cjb(a, b) {
    return a === b ? 0 : ((a === 'C' && b === 'J') || (a === 'J' && b === 'B') || (a === 'B' && b === 'C')) ? 1 : -1
}
function judge(arr) {
    if(arr[0]>=Math.max(arr[1],arr[2])) {
        process.stdout.write('B')
    } else if(arr[1]>=Math.max(arr[0],arr[2])) {
        process.stdout.write('C')
    } else {
        process.stdout.write('J')
    }
}
let m = {
    'B':0,
    'C':1,
    'J':2
}
main().then(input=>{
    let num = Number(input())
    let JiaGameCnt = [0,0,0]
    let [winJiaCnt,winYiCnt] = [[0,0,0],[0,0,0]]
    while(num--) {
        let [a,b] = input().split(' ')
        switch(cjb(a,b)) {
            case 0: JiaGameCnt[1]++;break;
            case 1: JiaGameCnt[0]++;winJiaCnt[m[a]]++;break;
            case -1: JiaGameCnt[2]++;winYiCnt[m[b]]++;break;
        }
    }
    console.log(JiaGameCnt.join(' '))
    console.log(JiaGameCnt.reverse().join(' '))
    judge(winJiaCnt)
    process.stdout.write(' ')
    judge(winYiCnt)
    console.log('');
})