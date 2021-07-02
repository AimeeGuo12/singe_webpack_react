const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
// form表单提交是post请求，必须使用koa-bodyparser获取数据
const bodyparser = require("koa-bodyparser");
const nunjucks= require('koa-nunjucks-2');

let app = new Koa();
let route = new Router();
app.use(static(__dirname + '/static'));
app.use(nunjucks({
    ext: 'html', // 或者是.njk  后缀
    path: __dirname+'/views', //path表示视图路径
    nunjucksConfig: {
        trimBlocks: true // 防止Xss漏洞
    }
}))
app.use(bodyparser());
route.get('/main', async ctx => {
    await ctx.render('index', {
        pothoes: [{
            path: 'xxx',
            name: '美照'
        }]
    })
})
// route.get('/fileUpload', async ctx => {
//     console.log(ctx)
//     ctx.render('index')
// })
route.post('/fileUpload', async ctx => {

})

app.use(route.routes());
app.listen(9000);