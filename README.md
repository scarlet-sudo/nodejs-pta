# NodeJS PTA
使用NodeJS完成 [拼题A](https://pintia.cn/) 的题目
## 特点
### 封装标准输入
因为JS原生的标准输入相较于其他语言过于冗长，所以将其封装为了`main`函数，简洁程度不逊于`Python`    
下面这段代码分别使用了NodeJS和Python实现了读取一个数组并输出的功能   
**NodeJS**
```javascript
async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input=>{
    let n  = Number(input())
    let arr = input().split(' ').map(Number)
    console.log(`length: ${n}`)
    console.log(`${arr.join(' ')}`)
})
```
**Python**
```python
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    print(f"length: {n}")
    print(' '.join(map(str, arr)))
```
`main`函数的主要功能是从标准输入读取所有数据，然后通过返回一个迭代器来逐行读取输入的数据
```javascript
async function main() {
    return new Promise(((resolve, _) => {
        const chunks = []
        process.stdin.on('data', (chunk => {
            chunks.push(chunk)
        }))
        process.stdin.on('end', (() => {
            let data = Buffer.concat(chunks).toString().trimEnd().split('\n')
            let index = 0
            resolve((() => data[index++]))
        }))
    }))
}
```
实际使用时可使用`terser`等代码压缩工具将JS脚本压缩为一行，再复制到第一行   
以`example.js`中的代码为例
```javascript
async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input=>{
    let n  = Number(input())
    let arr = input().split(' ').map(Number)
    console.log(`length: ${n}`)
    console.log(`${arr.join(' ')}`)
})
```
输入样例
```text
5
1 2 3 4 5
```
输出样例
```text
length: 5
1 2 3 4 5
```
执行代码时事先将需要输入的内容写入到`input.txt`文件中，然后执行如下命令（将`example.js`替换为实际路径）
```shell
Get-Content input.txt | node example.js
```
或者
```shell
Get-Content input.txt | ./example.js
```

### 优先使用函数式编程
```javascript
async function main(){return new Promise(((resolve,_)=>{const chunks=[];process.stdin.on("data",(chunk=>{chunks.push(chunk)}));process.stdin.on("end",(()=>{let data=Buffer.concat(chunks).toString().trimEnd().split("\n");let index=0;resolve((()=>data[index++]))}))}))}

main().then(input => {
    const py = ['ling', 'yi', 'er', 'san', 'si', 'wu', 'liu', 'qi', 'ba', 'jiu']
    let result = [...input()].map(Number).reduce((a, b) => a + b).toString().split('').map(e => py[Number(e)]).join(' ')
    console.log(result)
})
```