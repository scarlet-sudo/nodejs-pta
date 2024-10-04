async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

function toHour(ch) {
    if (ch >= '0' && ch <= '9') {
        return `0${ch}`
    } else if (ch >= 'A' && ch <= 'N') {
        return `${ch.charCodeAt(0) - 65 + 10}`
    }
    return null
}

function isalpha(ch) {
    return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')
}

main().then(input => {
    let [s1, s2, t1, t2] = [input(), input(), input(), input()]
    let [day, hour, minute] = [null, null, null]
    for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
        let c1 = s1[i], c2 = s2[i]
        if (!day && c1 === c2 && (c1 >= 'A' && c1 <= 'G')) {
            day = days[c1.charCodeAt(0) - 65]
        } else if (day && c1 === c2 && toHour(c1)) {
            hour = toHour(c1)
            break
        }
    }
    for (let i = 0; i < Math.min(t1.length, t2.length); i++) {
        let c1 = t1[i], c2 = t2[i]
        if (c1 === c2 && isalpha(c1)) {
            minute = i.toString().padStart(2, '0')
            break
        }
    }
    console.log(`${day} ${hour}:${minute}`)
})