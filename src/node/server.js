const Koa = require('koa');
let Router = require('koa-router');
let router = new Router();
let app = new Koa();
const {generateBigData} = require('./mockData.js')
router.get('/getData', async ctx => {
    let data = generateBigData();
    ctx.set('Content-Type', 'application/json;charset=UTF-8')
    ctx.body = {
        state: 200,
        data: data
    }
}) 
app.use(router.routes())
app.listen('3009', () => {
    console.log('服务开启，监听中...')
})