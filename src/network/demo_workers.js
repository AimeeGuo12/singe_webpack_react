function timedCount () {
    for (let i = 0; i < 10000000000; i++) {
      if (i % 100000 === 0) {
        postMessage(i);
      }
    }
  }
  
  timedCount();
  // http://www.ruanyifeng.com/blog/2018/07/web-worker.html
// Worker线程的API
// self.name： Worker 的名字。该属性只读，由构造函数指定。
// self.onmessage：指定message事件的监听函数。
// self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
// self.close()：关闭 Worker 线程。
// self.postMessage()：向产生这个 Worker 线程发送消息。
// self.importScripts()：加载 JS 脚本。


//   点击Start Worker按钮启动web worker，可以看到web worker开始工作，
// 且在web worker正常工作时，我们仍然可以在input输入框中输入信息，这表示页面并没有因为
// web worker的运行而被阻塞，另外要注意一点，web worker虽然是新启动的子线程，运行不会阻塞页面，
// 
// 但与主线程的交互会，以上面的代码为例，如果在web worker的for循环里面直接调用postMessage，
// 仍然会感到页面的操作不够流畅（原因是主线程需要一直不停地处理子线程post过来的消息）
// 