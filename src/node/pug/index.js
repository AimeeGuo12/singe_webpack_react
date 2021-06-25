const Koa = require("koa");
const Router = require('koa-router');
const views = require('koa-views');
let app = new Koa();
let router = new Router;
app.use(views(__dirname+'/views'), {
    map: {
        html: 'pug'
    }
})

router.get('/', async ctx => {
    // ctx.body = "hello";
    let users = [{name: 'aimee', age: 18}, {name: 'bob', age: 12}]
    await ctx.render("index.pug", {
        data: "我是数据", // 将数据传入
        users
    })
})

app.use(router.routes());
app.listen(3000)