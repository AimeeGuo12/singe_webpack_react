// (controllor层)：具体处理数据调用和页面控制，调用model层

//新闻列表contorllor层：调用Model层,并进行页面分发**（控制view层）

const indexService = require('../service/new.js');
const url = require('url');

module.exports = {
    // 分页显示
    async showIndex(ctx) {
        //
        let pageNum = url.parse(ctx.url, true).query.p || 1;
        let pageSize = 5;
        let newsData = indexService.getSliceData(pageNum, pageSize);
        let pageTotal = Math.ceil(indexService.newsData.length/pageSize);
        //app中使用总目录views ,此处直接定位到news层级（注意前面不能再加/）
        await ctx.render("news/index.pug", {
            newsData,
            pageTotal,
            pageNum
        })

    },

    // 详情页显示
    async showDetail(ctx) {
        let id = url.parse(ctx.url, true).query.id || 1;
        let detailData = indexService.getDetailDataById(id);
        await ctx.render('news/detail.pug', {
            detailData
        })
    }

}