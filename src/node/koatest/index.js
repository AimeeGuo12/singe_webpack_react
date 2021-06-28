const Koa = require('koa');
const app = new Koa();
// 单线程 分主线程和副线程
app.use(async ctx => { // ctx就是context 
    // ctx.req === req; ctx.res === res;  ctx中包括原生得req和res
    // ctx.request; ctx.response;
    // ctx.response.body = 'hello world';
    ctx.body = 'hello world'
})




// 中间件
let middleWare1 = async(ctx, next) => {
    console.log('start1...');
    ctx.state = { // 通过state可以把数据传递到下一个中间件里
        name: 'zhangsan'
    }
    // await new Promise()  // await 的时候要promise
    next() // ---> middleware2
    console.log('end1...')
}
let middleWare2 = async(ctx, next) => {
    console.log('start2...');
    console.log(ctx.state)
    console.log('end2')
    next();
}
app.use(middleWare1)
app.use(middleWare2)
app.use(async ctx => {
    // 状态码
    ctx.status = '403'
    ctx.body = 'z';
})
app.listen(3000)