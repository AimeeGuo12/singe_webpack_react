const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
// form表单提交是post请求，必须使用koa-bodyparser获取数据
const bodyparser = require("koa-bodyparser");
const nunjucks= require('koa-nunjucks-2');
const fs = require('fs');
let photoes = require('./data/data.json');
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
        pothoes: photoes
    })
})
// route.get('/fileUpload', async ctx => {
//     console.log(ctx)
//     ctx.render('index')
// })

//监控文件上传进度
route.post('/fileUpload', ctx => {
//通过前端append()中的name属性即可获取到对应数据或文件
    //ctx.request.files.imgFile.path即文件的临时路径，对临时路径中的文件转存到服务器下路径即可
    
    let fileData = fs.readFileSync(ctx.request.files.imgFile.path);
    
    //判断文件夹不存在，需要先创建文件夹
    if(!fs.existsSync("static/imgs")){
        fs.mkdirSync("static/imgs/");
    }
    fs.writeFileSync("static/imgs/"+ctx.request.files.imgFile.name,fileData);
    
    ctx.body = {
        status:1,
        msg:"文件上传成功"
    };
})

app.use(route.routes());
app.listen(9000);