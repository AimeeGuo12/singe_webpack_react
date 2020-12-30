## contenthash hash  chunkhash
### hash

hash针对的是每一次构建（build）而言，每一次构建之后生成的文件所带的哈希都是一致的。它关心的是整体项目的变化，只要有任意文件内容发生了更改，那么构建之后其他文件的哈希也会发生更改。

很显然这不是我们需要的，如果module_a文件内容发生了更改，module_a的打包文件的哈希应该发生变化，但是module_b不应该。这会导致用户不得不重新下载没有发生变化的module_b打包文件

### chunkhash
在之前我们对 chunk 进行过定义，即是小单位的代码聚合形式。在上面的例子中以entry入口体现，也就是说每一个入口对应的文件就是一个 chunk。在后面的例子中我们会看到更复杂的例子

不要在开发环境使用 [chunkhash]/[hash]/[contenthash]，因为不需要在开发环境做持久缓存，而且这样会增加编译时间，开发环境用 [name] 就可以了
chunkhash基于的是每一个 chunk 内容的改变，如果是该 chunk 所属的内容发生了变化，那么只有该 chunk 的输出文件的哈希会发生变化，其它的不会。这听上去符合我们的需求。

### contenthash
顾名思义，该哈希根据的是文件的内容。从这个角度上说，它和chunkhash是能够相互代替的。所以在“性能基线”代码中作者使用了contenthash

不过特殊之处是，或者说我读到的关于它的使用说明中，都指示如果你想在ExtractTextWebpackPlugin或者MiniCssExtractPlugin中用到哈希标识，你应该使用contenthash。但就我个人的测试而言，使用hash或者chunkhash也都没有问题（也许是因为 extract 插件是严格基于 content 的？但难道 chunk 不是吗？）

### 栗子
非常简单的 Webpack 配置，它拥有两个打包入口，同时额外提取出 css 文件，最终生成三个文件。filename配置中我们使用的是hash标识符、在 MinCssExtractPlugin中我们使用的是contenthash
```javascript
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    module_a: "./src/module_a.js",
    module_b: "./src/module_b.js"
  },
  output: {
    filename: "[name].[hash].js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ]
};
```

## 场景
Alice 连续 10 周每周访问站点一次
我们每周更新站点一次
我们每周更新“产品列表”页面
我们也有一个“产品详情”页面，但是目前不需要对它进行更新
在第 5 周的时我们给站点新增了一个 npm 包
在第 8 周时我们更新了现有的一个 npm 包

## 分离第三方类库（vendor）类库
让我们把打包文件划分为main.js和vendor.js

```javascript
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // chunks有三个选项：initial、async和all。它指示应该优先分离同步（initial）、异步（async）还是所有的代码模块。这里的异步指的是通过动态加载方式（import()）加载的模块。
    },
  },
};
```
以async为例，假如你有两个模块 a 和 b，两者都引用了 jQuery，但是 a 模块还通过动态加载的方式引入了 lodash。那么在 async 模式下，插件在打包时会分离出lodash~for~a.js的 chunk 模块，而 a 和 b 的公共模块 jQuery 并不会被（优化）分离出来，所以它可能还同时存在于打包后的a.bundle.js和b.bundle.js文件中。因为async告诉插件优先考虑的是动态加载的模块

添加optimization.splitChunks.chunks = 'all'配置也就是在说：“把所有node_modules里的东西都放到vendors~main.js的文件中去”

在实现基本的打包分离条件后，Alice 在每次访问时仍然需要下载 200KB 大小的 main.js 文件， 但是只需要在第一周、第五周、第八周下载 200KB 的 vendors.js脚本

### 分离每一个 npm 包
我们的 vendors.js 承受着和开始 main.js 文件同样的问题——部分的修改会意味着重新下载所有的文件

所以为什么不把每一个 npm 包都分割为单独的文件？做起来非常简单

让我们把我们的react，lodash，redux，moment等分离为不同的文件
```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  plugins: [
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
};
// https://zhuanlan.zhihu.com/p/66212099
```

--Webpack 有一些不那么智能的默认“智能”配置，比如当分离打包输出文件时只允许最多3个文件，并且最小文件的尺寸是30KB（如果存在更小的文件就把它们拼接起来）。所以我把这些配置都覆盖了

--cacheGroups是我们用来制定规则告诉 Webpack 应该如何组织 chunks 到打包输出文件的地方。我在这里对所有加载自node_modules里的 module 制定了一条名为 "vendor" 的规则。通常情况下，你只需要为你的输出文件的 name定义一个字符串。但是我把name定义为了一个函数（当文件被解析时会被调用）。在函数中我会根据 module 的路径返回包的名称。结果就是，对于每一个包我都会得到一个单独的文件，比如npm.react-dom.899sadfhj4.js

--为了能够正常发布npm 包的名称必须是合法的URL，所以我们不需要encodeURI对包的名词进行转义处理。但是我遇到一个问题是.NET服务器不会给名称中包含@的文件提供文件服务，所以我在代码片段中进行了替换

--整个步骤的配置设置之后就不需要维护了——我们不需要使用名称引用任何的类库


## 第二部分 dll 动态加载 https://zhuanlan.zhihu.com/p/66212922
## https://blog.csdn.net/weixin_40811829/article/details/88599201  打包优化



https://zhuanlan.zhihu.com/p/28113197