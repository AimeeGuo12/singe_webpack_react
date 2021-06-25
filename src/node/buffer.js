// buffer创建
// alloc指定大小
let buffer = Buffer.alloc(10);  // 10字节
console.log(buffer)

let b1 = Buffer.from('大家号');  
console.log(b1)
// buffer 转字符串
console.log(b1.toString()) // 大家号

let buffer3 = Buffer.from([0xe5, 0xa4, 0xa7, 0xe5, 0xae, 0xb6, 0xe5, 0x8f, 0xb7])
console.log(buffer3.toString()) // 大家号

// 汉字转为buffer后将buffer分开 然后分别ToString, 有时候会出现乱码
// 解决方案
// 1. 通过Buffer.concat()将两个buffer合到一起
let buffer1 = Buffer.from([0xe5, 0xa4, 0xa7, 0xe5]);
let buffer2 = Buffer.from([0xae, 0xb6, 0xe5, 0x8f, 0xb7])

let newBuffer = Buffer.concat([buffer1, buffer2]);
console.log(newBuffer.toString()) 

// 通过string_decoder 可以自动拼接
let {StringDecoder} = require('string_decoder');
let decoder = new StringDecoder();
let res1 = decoder.write(buffer1) // 大  不会乱码
let res2 = decoder.write(buffer2) // 家号
console.log(res1)
console.log(res2)
