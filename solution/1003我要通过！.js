/*
PAT          ->  PAAT            ->  PAAAT
APATA        ->  APAATAA         ->  APAAATAAA
AAPATAA      ->  AAPAATAAAA      ->  AAPAAATAAAAAA
AAAPATAAA    ->  AAAPAATAAAAAA   ->  AAAPAAATAAAAAAAAA
左边A的数量 * 中间A的数量（变化次数） = 右边A的数量
坑：输入PA
*/
async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

function judge(s) {
    let [l,m,r] = [0,0,0]
    let [arriveP,arriveT] = [false,false]
    for(const c of s) {
        if(c!=='P' && c!=='A' && c!=='T') {
            return false
        } else if(c==='P') {
            if(arriveP) return false
            arriveP = true
        } else if(c === 'T') {
            if(arriveT || !arriveP) return false
            arriveT = true
        } else if(c==='A') {
            if(!arriveP) l++
            if(arriveP && !arriveT) m++
            if(arriveT) r++
        }
    }
    return arriveP && arriveT && l<=r &&  m!== 0 && (l*m) === r
}

main().then(input=>{
    let n = Number(input())
    while (n--) {
        let s = input()
        console.log(judge(s)?"YES":"NO")
    }
})