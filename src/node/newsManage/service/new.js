// （model层）：具体数据处理，如调用数据库等


//新闻列表：处理数据逻辑controllor
let newsData = require('../data/data.json');
module.exports = {
    newsData,
    getSliceData(pageNum, pageSize) {
        return newsData.slice((pageNum - 1)*pageSize, pageNum*pageSize)
    },
    getDetailDataById(id) {
        return newsData.find(item => item.id == id);
    }
}