const Koa = require("koa");
const Router = require("koa-router");
// const views = require("koa-views");
const static = require("koa-static");
const { query, queryData, addData } = require('./mysql.js');
// form表单提交是post请求，必须使用koa-bodyparser获取数据
const bodyparser = require("koa-bodyparser");
// md5加密登录信息
const md5 = require("md5");
const jwt = require('jsonwebtoken')
let data;
let msg = '';
// node.js通过require后，会自动将json文件中的数据转换为对象
const musicData = require("./data/music.json");

const app = new Koa();
const route = new Router({ prefix: '/api' });

// 注意引入的模块都需要通过app.use()将模块和router进行关联
app.use(bodyparser());

app.use(static(__dirname + "/static"));

route.post("/login", async ctx => {
    console.log('xxxxxxxx')
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Content-Type', 'application/json;charset=UTF-8')
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    await login(ctx)
    ctx.body({
        data: {
            msg: msg,
        },
        state: 200,
        type: 'success' // 自定义响应体
    })
});
//

async function login(ctx) {
    const { username, password } = ctx.request.body;
    const {authorization = ''} = ctx.request.header;
    console.log(ctx.request.header)
    console.log('authorization',authorization)
    // 去掉Bearer和空格
    const token = authorization.replace('Bearer', '')
    // 先验证token
    try {
         // 通过 jsonwebtoken 包的方法验证 token
        // const user = 
        let jwt = jsonwebtoken.verify(token, secret);
        console.log(jwt)
        let r = []
        await queryData().then(res => {
            r = res.filter((userData) => {
               return userData.username === username &&  userData.password === password
            })
        })
        console.log(r)
        if (r.length === 0) {
            ctx.throw(401, '用户名或密码不正确');
        } else {
            // route.redirect()
            msg = '登陆成功！'
        }
    }catch(err) {
        ctx.throw(401, err.message)
    }
}
// 由于promise.then()中不能直接return值， 而且then里是一个异步，所以这里不要用promise了。
async function handleUser(ctx) {
    //获取请求体中的用户名, 用它进行查询
    const { username, password } = ctx.request.body;
    // let result = await query('select * from temp')
    await queryData().then(async res => {
        let data = JSON.parse(JSON.stringify(res))
        console.log(data.length)
        const repeatedUser = data && data.filter(userData => {
            return userData.username === username
        });
        console.log(repeatedUser)
        if (repeatedUser.length > 0) {
            msg = '当前用户名已被占用！'
        }
        let addSqlParams = [username, password]
        await addData(addSqlParams).then(res_1 => {
            msg = '注册成功！'
        })
    })
}
let secret = '37423647sdghfgsd@@';
const expiresIn = 60 * 60 * 24 * 30;    //时效 (秒)
function getToken(ctx) {
    const { username, password } = ctx.request.body;
    let token = jwt.sign({
        username: username, 
        password: password
    }, secret, {algorithm: 'HS256', expiresIn})
    return token;
}

function vertifyToken(token) {
    return jwt.verify(token, secret)
}

function tokenExp(token) {
    let verify = verifyToken(token);
    let time = parseInt((new Date().getTime()) / 1000);
    return `剩余${verify.exp - time}秒`
}

// 注册吧
route.post("/checkUser", async ctx => {
    console.log(ctx)

    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Content-Type', 'application/json;charset=UTF-8')
    
    await handleUser(ctx)
    let tk = getToken(ctx)

    console.log(tk)
    console.log('msg', msg)
    ctx.body = {
        data: { msg: msg, token: tk },
        state: 200,
        type: 'success' // 自定义响应体
    }
    // 校验用户名和密码
    // ctx.verifyParams({
    //     username: {type:'string', required: true},
    //     password: {type:'string', require:true}
    //   })
});


app.use(route.routes()).use(route.allowedMethods());
app.listen("8989", () => {
    console.log('已经监听中。。。')
});