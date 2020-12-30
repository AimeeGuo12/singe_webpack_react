https://blog.csdn.net/weixin_33670786/article/details/91467481?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.control
// 介于客户端和服务器之间的一个代理服务器。在 Service Worker 中我们可以做很多事情，比如拦截客户端的请求、向客户端发送消息、
//向服务器发起请求等等，其中最重要的作用之一就是离线资源缓存。
// 和 Web Worker 相比:
// 相同：
// Service Worker 工作在 worker context 中，是没有访问 DOM 的权限的，所以我们无法在 Service Worker 中获取 DOM 节点，
// 也无法在其中操作 DOM 元素；
// 我们可以通过 postMessage 接口把数据传递给其他 JS 文件；
// Service Worker 中运行的代码不会被阻塞，也不会阻塞其他页面的 JS 文件中的代码；

// 不同的地方在于，Service Worker 是一个浏览器中的进程而不是浏览器内核下的线程，因此它在被注册安装之后，能够被在多个页面
// 中使用，也不会因为页面的关闭而被销毁。因此，Service Worker 很适合被用与多个页面需要使用的复杂数据的计算——购买一次，
// 全家“收益”。

// 另外有一点需要注意的是，出于对安全问题的考虑，Service Worker 只能被使用在 https 或者本地的 localhost 环境下。

// 如果当前使用的浏览器支持 Service Worker ，则在 window.navigator 下会存在 serviceWorker 对象，
// 我们可以使用这个对象的 register 方法来注册一个 Service Worker。
// Service Worker 在使用的过程中存在大量的 Promise

// index.js
if ('serviceWorker' in window.navigator) {
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .then(function (reg) {
        console.log('success', reg);
        // 向 Service Worker 发送信息
        navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage("this message is from page");
        // 如果多个scope多个server worker的时候, 给指定的 Service Worker 发送信息
        reg.active.postMessage("this message is from page, to sw");
      })
      .catch(function (err) {
        console.log('fail', err);
      });
  }
  复制代码