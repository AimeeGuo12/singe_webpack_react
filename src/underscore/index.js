// 函数库
(function() {
    // 我们将所有的方法添加到一个名为 _ 的对象上，然后将该对象挂载到全局对象上。
    // 之所以不直接 window._ = _ 是因为我们写的是一个工具函数库，不仅要求可以运行在浏览器端，
    //还可以运行在诸如 Node 等环境中。
    // let root = this; // 严格模式下，this返回的是undefined， 而不是window，所以对环境检测修改
    let root = (typeof self == 'object' && self.self == self && self) ||  // self针对web worker,  self = window, window.self = window
           (typeof global == 'object' && global.global == global && global)  // global 针对node
            || this //  node 的 vm 模块中，也就是沙盒模块，runInContext 方法中，是不存在 window，也不存在 global 变量的。但是我们却可以通过 this 访问到全局对象
            || {}; // 微信小程序中，window 和 global 都是 undefined，加上又强制使用严格模式，this 为 undefined，挂载就会发生错误
    let _ = {};
    root._ = _;

    // 添加自己的方法
    _.reverse = function(string) {
        return string.split('').reverse().join('');
    }
})()