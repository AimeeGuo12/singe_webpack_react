// 代理模式
let synchronousFile = function (id) {
    console.log('开始同步文件, id为: ' + id)
  }
let proxySynchronousFile = (function(){
    let cache=[], timer;
    return function(id) {
        cache.push(id)
        if(timer) return
        timer = setTimeout(function(){
            synchronousFile(cache.join(','))
            timer = null
            clearTimeout(timer)
            cache.length = 0 // 清空 ID 集合
        }, 2000)
    }
})()

let checkbox = document.getElementsByTagName('input')
    for (let i = 0, c; c = checkbox[i++]; ) {
      c.onclick = function () {
        if (this.checked === true) {
          proxySynchronousFile(this.id)
        }
      }
    }





// 缓存
// 计算乘积
const mult = function (...args) {
    let a = 1
    for (let i = 0, l = args.length; i < l; i++) {
      a = a * args[i]
    }
    return a
  }
  
  // 计算加和
  const plus = function (...args) {
    let a = 0
    for (let i = 0, l = args.length; i < l; i++) {
      a = a + args[i]
    }
    return a
  }
  
  // 创建缓存代理的工厂
  const createProxyFactory = function (fn) {
    let cache = {}
    return function (...args) {
      let joinArgs = args.join(',')
      if (joinArgs in cache) {
          console.log(joinArgs, cache)
        console.log('get result from cache')
        return cache[joinArgs]
      }
      return cache[joinArgs] = fn.apply(this, args)
    }
  }
  
  const proxyMult = createProxyFactory(mult),
        proxyPlus = createProxyFactory(plus)
  console.log(createProxyFactory(mult)(1, 2, 3, 4))  // 如果是这种方式调用就不会有缓存
  console.log(createProxyFactory(mult)(1, 2, 3, 4))
  console.log(proxyMult(1, 2, 3, 4)) // 这里是已经是直接调用的返回函数， cache对象已经存在相当于‘全局’了
  console.log(proxyMult(1, 2, 3, 4)) // 第二次会直接从缓存获取
  console.log(proxyPlus(1, 2, 3, 4))
  console.log(proxyPlus(1, 2, 3, 4))