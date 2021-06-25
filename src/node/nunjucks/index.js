const Koa = require("koa");
const Router = require('koa-router');
// nunjucks不再使用koa-views引入静态文件，而是使用koa-nunjucks-2；
const nunjucks = require('koa-nunjucks-2');
let app = new Koa();
let router = new Router;
app.use(nunjucks({
    ext: 'html', // 或者是.njk  后缀
    path: __dirname+'/views', //path表示视图路径
    nunjucksConfig: {
        trimBlocks: true // 防止Xss漏洞
    }
}))

router.get('/', async ctx => {
    // ctx.body = "hello";
    // 此处render方法中，因为设置了ext后缀，所以不需要再写文件后缀
    await ctx.render('index', {
        userName: 'aimee',
        num: 2, 
        arr: [{
            name: '张三1',
            age: 20
        }, {
            name: '张三2',
            age: 22
        }, {
            name: '张三3',
            age: 23
        }, {
            name: '张三4',
            age: 24
        }],
        str: 'hello world'
    })
})

app.use(router.routes());
app.listen(8000)