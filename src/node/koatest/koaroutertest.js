const Koa = require('koa');
const Router = require('koa-router');

let app = new Koa();
let router = new Router();

router.get('/', async ctx => {
    ctx.redirect('/index');
})
router.get('/index', async ctx => {
    ctx.body='主页';
})
router.get('/detail', async ctx => {
    ctx.body='详情页';
})
router.get('/api/getData', async ctx => {
    // ctx.status = 404
    ctx.body={ // 会自动转为json格式返回
        name: '张三',
        age: 20
    };
})

// 接口规范 RESTful 接口设计原则
// 按照接口方式进行区分 同一个接口
// localhost:8000/user 
// get 获取 // post 添加 // delete 删除 // put修改


app.use(router.routes())

app.listen('8888')