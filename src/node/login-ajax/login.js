// 通过http://localhost:9090/login.html即可请求到login.html页面 

const Koa = require("koa");
const Router = require("koa-router");
const static = require("koa-static");
// const views = require("koa-views");
const userData = require("./data/user.json");
 
let app = new Koa();
let router = new Router();
 
app.use(static(__dirname + "/static"));
//前面页面直接放到static里时，只能通过login.html访问，不能通过/直接访问
router.get("/checkUser", (ctx, next) => {
    // 注意接收queryString参数通过cxt.query获得；如果是post传参需引入koa-bodyparser ，然后通过ctx.request.body接收
    let username = userData.find(item=>item.username === ctx.query.username);
    console.log(ctx.query);
    if(username){
    // node.js会自动将对象转为json传给前端，所以不用再进行转换
        ctx.body = {
            status:1,
            msg:"用户名正确"
        };
    }else{
        ctx.body = {
            status:0,
            msg:"用户名错误"
        };
    }
});
 
app.use(router.routes());
app.listen("9090");
