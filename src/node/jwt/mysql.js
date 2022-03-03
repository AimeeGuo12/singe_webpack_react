// node中使用mysql 将用户数据存在mysql
const mysql = require('mysql')

// mysql中的createConnection方法 可以创建连接
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aimeeguo',
    // port: '',
    database: 'user', // 要连接的数据库
    // multipleStatements: true // 允许每个mysql语句有多条查询.使用它时要非常注意，因为它很容易引起sql注入攻击(默认:false).
})
conn.connect()
// 建立一个变量 存储sql语句
let sql = 'select * from temp'
// 由于promise.then()中不能直接return值， 而且then里是一个异步，所以这里不要用promise了。
let query = async function(sql, value) {
    try {
        return new Promise((resolve, reject) => {
    //         // conn.connect(function(err, connection){
    //         // if (err) {
    //         //     reject(err)
    //         // } else {
            conn.query(sql, value, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
            // conn.end()
        })
            //     }
            // })
        })
    } catch (err_1) {
        console.log(err_1)
    }
}

// 
let addData = (val) => {
    let addSql = 'INSERT INTO temp(username, password) VALUES(?,?)';
    let addSqlParams = val
    return query(addSql, addSqlParams)
}
// 查询
let queryData = (val) => {
    let sql = 'select * from temp';
    return query(sql)
}
module.exports = {
    query: query,
    addData: addData,
    queryData: queryData
}