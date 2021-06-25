// 流
// 流会把数据分为64kb的小文件传输
const { RSA_NO_PADDING } = require('constants');
const fs = require('fs');
// let res = fs.readFileSync('1.txt')
// let rs = fs.createReadStream('1.txt') // 时间换空间
// rs.on('data', chunk => {
//     console.log(chunk.toString())
// })

// 创建一个65kb的文件
let buffer = Buffer.alloc(65*1024);
fs.writeFileSync('65kb', buffer, err => {
    if (err) {
        console.log(err)
    }
    console.log('写入成功')
})

let rs = fs.createReadStream('65kb') // 时间换空间
let str = ''
rs.on('data', chunk => {
    console.log(chunk)
    str += chunk
})
rs.on('end', () => {
    console.log(str)
})

// 管道pipe
let rs = fs.readFileSync('1.txt');
let ws = fs.writeFileSync('2.txt');
rs.pipe(ws) // 将rs中的数据写入ws中