// 创建一个container 包含添加和调用的方法
var cache = {};
// memory: 
// once: 只执行一次
// stopOnFalse: 遇到return false的就不再向下执行
var container = function(flags) {
  // 处理flags 适配对象和字符串两种方式  createflags将字符串 once 转为{once: true}的形式
  flags = typeof flags === "string" ? (cache[flags] || createflags(flags)): extend({}, flags)
  // len: stack.length
  var i, len, carryOut, memory, startPoint, stackLen;
  var stack = [] // 存回调函数
  // 回调函数执行
  var fire = function(data) { //回调的参数
    memory = flags.memory && data
    carryOut = true; // carryOut 是否执行过回调
    len = stack.length;
    i = startPoint || 0; 

    for(; i< len; i++) {
      // stack[i].apply(data[0], data[1])
      if(flags.stopOnFalse && stack[i].apply(data[0], data[1]) === false){
        break;
      }
    }
  }
  var self = {
    // 添加
    add: function() {
      (function add(args){
        stackLen = stack.length
        // 类数组转为数组 遍历获取参数
      Array.from(args).forEach(function(arg, i) {
        // (fn1, fn2, fn3)的形式
        if(toString.call(arg) === '[object Function]') {
          if(!self.has(arg)){
            stack.push(arg)
          }
        } else if(arg && arg.length && typeof arg !== "string"){   // ([fn1, fn2, fn3])的形式
          add(arg)
        }
      })
      })(arguments)

      if(memory) {
        startPoint = stackLen;
        fire(memory);
      }
    },
    // 绑定this
    // context ==> this  args ==> fn
    startupWith: function(context, args){
      args = args || []
      args = [context, args.slice ? args.slice(): args];
      // 检查回调是否只执行一次 
      // 不是只执行一次  或者 还没有执行过
      if(!flags.once || !carryOut) {
        // 执行回调
        fire(args)
      }
    },
    // 执行回调 使用给定的上下文和参数调用所有的回调
    startup: function() {
      self.startupWith(this, arguments)
    },
    // has 检查是否有重复的函数添加
    has: function(fn) {
      return stack.indexOf(fn) > -1;
    }
  }
  return self
  
}
function createflags (flags) {
  var res = {}
  // 用于在空白处拆分 /\S+/g
  (flags.match(/\S+/g) || []).forEach((flag) => {
    res[flag] = true;
  })
  return res;
}

function extend(to, from) {
  for(var key in from) {
    to[key] = from[key]
  }
  return to;
}

function Promise(func) {
  var tuples = [
    // 状态， 添加回调方法(语法糖)、创建容器->回调列表， 最终状态
    ['resolve', 'done', container("once memory"), 'resolved'],
    ['reject', 'fail', container('once memory'), 'rejected']
  ]
  var state = 'pending'
  var chain = {
    then: function() {
      var args = arguments;
      return Promise(function(resolve, reject) {
        tuples.forEach(function(tuple, i){
          var fn = toString.call(args[i] === "[object Function]") && args[i]
          chain[tuple[1]](function(){
            var returned = fn && fn.apply(this, arguments)
            if(returned && toString.call(returned.then) ===  "[object Function]") {
              returned.done(resolve)
              returned.fail(reject)
            }
          })
        })
      })
    }
  }

  var protect={}
  tuples.forEach(function(tuple, i) {
    var list = tuple[2];
    var stateString = tuple[3];
    if(stateString){
      list.add(function(){
        state = stateString
      })
    }
    // cahin[done/fail] chain.done chain.fail
    chain[tuple[1]] = list.add;
    // 状态绑定
    protect[tuple[0]] = function(){
      protect[tuple[0] + 'with'](this, arguments)
    }
    protect[tuple[0]+'with'] = list.startupWith

  })

  if(func){
    func.call(chain, protect["resolve"], protect["reject"])
  }
  return chain;
}