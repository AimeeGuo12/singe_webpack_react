// https://zhuanlan.zhihu.com/p/115243059
// 注册完 Service Worker 之后，浏览器会为我们自动安装它，因此我们就可以在 service worker 文件中监听它的 install 事件了
// 这里缓存
this.addEventListener('install', function (event) {
    console.log('Service Worker install');
     /* 通过这个方法可以防止缓存未完成，就关闭serviceWorker */
     event.waitUntil(
        /* 创建一个名叫V1的缓存版本 */
        caches.open('v1').then(function (cache) {
            /* 指定要缓存的内容，地址为相对于跟域名的访问路径 */
            return cache.addAll([
                './index.html'
            ]);
        })
    );
  });

  /* 注册fetch事件，拦截全站的请求 */
this.addEventListener('fetch', function(event) {
    event.respondWith(
      // magic goes here
        
        /* 在缓存中匹配对应请求资源直接返回 */
      caches.match(event.request)
    );
  });

//   Service Worker 在安装完成后会被激活,监听 activate 事件

this.addEventListener('activate', function (event) {
    console.log('Service Worker activate');
  });
//   这时，我们可以在 Chorme 的开发者工具中看到我们注册的 Service Worker。



this.addEventListener('message', function (event) {
    console.log(event.data); // this message is from page
  });