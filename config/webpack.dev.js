const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const config = {
    output: {
        filename: "[name].js", // 
        // 不要在开发环境使用 [chunkhash]/[hash]/[contenthash]，因为不需要在开发环境做持久缓存，而且这样会增加编译时间，开发环境用 [name] 就可以了
        // chunkhash基于的是每一个 chunk 内容的改变，如果是该 chunk 所属的内容发生了变化，那么只有该 chunk 的输出文件的哈希会发生变化，其它的不会。这听上去符合我们的需求。
        // publicPath: "/dist/"
    },
// 配置webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, "../dist"), //contentBase选项是server模式下的output，开启server后，webpack会实时编译代码到内存
        hot: true // 开启webpackDevServer热加载
    },
    devtool: "inline-source-map" //在打包后的文件中，如果出现异常，堆栈追踪异常不能定位到打包前的单个文件，所以使用source-map。官方推荐开发模式下使用inline-source-map, 生产模式使用source-map
}
const options = {
    mode: "development",
}
module.exports = merge(webpackConfigCreator(options), config);