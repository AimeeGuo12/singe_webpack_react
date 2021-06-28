const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');// 加载静态资源，浏览器直接输入静态资源地址就能拿到资源信息
const views = require('koa-views');
let app = new Koa();
let router = new Router();
app.use(static(__dirname + '/static')) // __dirname当前执行地址
app.use(views(__dirname + '/views'), {
    extension: 'pug'
})
router.get('/', ctx => {
    ctx.body = 'hellos'
})
// 注意使用pug时，一定要有pug后缀
router.get('/home', async ctx => {
    await ctx.render('./index.pug')
})
app.use(router.routes())

app.listen('8888')