// 文件操作
// 增删改查
// 1. 文件操作  2. 目录操作
// 所有的文件操作，没有加Sync都是异步，否则为同步
const fs = require('fs');
// 文件读取
// 如果没有第二个参数指定类型， 返回data是buffer格式的，使用data.toString()
// 可以转换为正常格式的
fs.readFile('1.txt', 'utf8', (err, data) => {
    if(err) {
        return console.log('err')
    }
    console.log(data)
    console.log(data.toString())
})
// 同步
let data = fs.readFileSync('./1.txt')
console.log(data.toString())
// 增
// a: 追加写入； w: 写入； r: 读取
fs.writeFile('1.txt', '我是写入的文字aa',{flag: 'a'},(err) => {
    if(err) {
        console.log(err)
        return;
    } 
    console.log('写入成功')
})

// 修改  这里讲修改文件名
fs.rename('1.txt', '2.txt', (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('修改成功')
})

// 删除
fs.unlink('2.txt', err=> {
    if (err) {
        return console.log(err)
    }
    console.log('删除成功')
})

// 复制 （先读取再写入）
fs.copyFile('index.js', 'index2.js', err => {
    if (err) {
        return console.log(err)
    }
    console.log('复制成功')
})

// 自定义复制
function myCopy(src, dest) {
    fs.writeFileSync(dest, fs.readFileSync(src))
}
myCopy('index2.js', 'index3.js')


// 目录操作
// 创建  和文件操作一样 分为同步 异步
fs.mkdir('11', err => {
    if (err) {
        return console.log(err)
    }
    console.log('创建成功')
})

// 修改  修改文件夹名
fs.rename('11','22', err => {
    if (err) {
        return console.log(err)
    }
    console.log('修改成功')
})

// 读取
fs.readdir('22', (err, data) => {
    if (err) {
        return console.log(err)
    }
    console.log(data)
})

// 删除  // 这种只能删除空文件夹/目录
fs.rmdir('22', err => {
    if (err) {
        return console.log(err)
    }
    console.log('删除成功')
})

// 删除非空文件夹/目录
//先把目录里的文件删除，再删除空文件夹
function removeDir(path) {
    let data = fs.readdirSync(path); // data是个数组
    data.forEach((item) => {
        let url = path + "/" + item
        let stat = fs.statSync(url)
        if(stat.isFile()) {
            fs.unlinkSync(url)
        } else{
            removeDir(url)
        }
    })
    fs.rmdirSync(path)
}

removeDir('22')


// 通用方法
// 判断文件或者目录是否存在
fs.exists('index.html', exists => {
    console.log(exists)
})

// 获取文件或目录的详细信息
fs.stat('index.js', (err, stat) => {
        if (err) {
            return console.log(err)
        }
        console.log(stat)
        // 判断是否是文件
        let res = stat.isFile();
        // 判断是否是文件夹
        let res2 = stat.isDirectory()
    }
)