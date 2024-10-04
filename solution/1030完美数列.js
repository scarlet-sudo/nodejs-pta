async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

function binarySearch(arr, left, right, target) {
    let low = left, high = right
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] <= target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return high
}


main().then(input => {
    let [n, p] = input().split(' ').map(Number)
    let arr = input().split(' ').map(Number)
    arr.sort((a, b) => a - b)
    let left = 0, right = arr.length - 1, ans = 0
    for (let i = 0; i < arr.length; i++) {
        let m = arr[i];
        let maxIndex = binarySearch(arr, i, arr.length - 1, m * p);
        let currentAns = maxIndex - i + 1;
        if (currentAns > ans) {
            ans = currentAns;
        }
    }
    console.log(ans)
})