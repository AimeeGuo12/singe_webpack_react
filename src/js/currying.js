// 参考https://segmentfault.com/a/1190000018265172?utm_source=sf-related


// 柯里化就是接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
// 用通俗易懂的话说：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

// why
// 1. 参数复用
// 正常正则验证字符串 reg.test(txt)

// 函数封装后
function check(reg, txt) {
    return reg.test(txt)
}

check(/\d+/g, 'test')       //false
check(/[a-z]+/g, 'test')    //true

// Currying后
function curryingCheck(reg) {
    return function(txt) {
        return reg.test(txt)
    }
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasNumber('testtest')   // false
hasLetter('21212')      // false

// 2. 提前确认 （与懒惰函数比较呢？区别）
var on = function(isSupport, element, event, handler) {
    isSupport = isSupport || document.addEventListener;
    if (isSupport) {
        return element.addEventListener(event, handler, false);
    } else {
        return element.attachEvent('on' + event, handler);
    }
}

// 3. 延迟计算/运行  怎么延迟了？
Function.prototype.bind = function (context) {
    var _this = this
    var args = Array.prototype.slice.call(arguments, 1)

    return function() {
        return _this.apply(context, args)
    }
}

const fn = function(a) {
    return function (b) {
        return a + b
    }
}
f1 = function(a, b) {
    return a+b
}
// 实现
// 初步封装
 const currying = function(fn) {
    // args 获取第一个方法内的全部参数
    var args = Array.prototype.slice.call(arguments, 1)
    return function() {
        // 将后面方法里的全部参数和args进行合并
        var newArgs = args.concat(Array.prototype.slice.call(arguments))
        // 把合并后的参数通过apply作为fn的参数并执行
        return fn.apply(this, newArgs)
    }
}
// 这边首先是初步封装,通过闭包把初步参数给保存下来，然后通过获取剩下的arguments进行拼接，最后执行需要currying的函数。

// 但是上面的函数还是有些缺陷，这样返回的话其实只能多扩展一个参数，currying(a)(b)(c)这样的话，貌似就不支持了（不支持多参数调用），一般这种情况都会想到使用递归再进行封装一层。
// 支持多参数传递
function progressCurrying(fn, args) {

    var _this = this
    var len = fn.length;
    var args = args || [];

    return function() {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.push.apply(args, _args);

        // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
        if (_args.length < len) {
            return progressCurrying.call(_this, fn, _args);
        }

        // 参数收集完毕，则执行fn
        return fn.apply(this, _args);
    }
}

// 关于Currying的性能，我们应该知道下面几点：

// 存取arguments对象通常要比存取命名参数要慢一点
// 一些老版本的浏览器在arguments.length的实现上是相当慢的
// 使用fn.apply( … ) 和 fn.call( … )通常比直接调用fn( … ) 稍微慢点
// 创建大量嵌套作用域和闭包函数会带来花销，无论是在内存还是速度上
// 其实在大部分应用中，主要的性能瓶颈是在操作DOM节点上，这js的性能损耗基本是可以忽略不计的，所以curry是可以直接放心的使用。


// 相关题
// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

console.log(add(1)(2)(3))               // 6
console.log(add(1, 2, 3)(4))            // 10
console.log(add(1)(2)(3)(4)(5))          // 15
console.log(add(2, 6)(1))                // 9


// function curry(fn, args1 = []) { // 默认值设为[]，防止访问args1.length报错
//     // fn.length的长度是形参的长度 4  
//     // 就是将参数都拼到args1中，如果没拼完就继续拼，否则执行fn
//     return fn.length === args1.length ? fn.apply(null, args1) : function (...args2) { // args2就是传入的参数1，2 ，3，4
//       return curry(fn, args1.concat(args2)) 
//     }
//   }
//   function add(a, b, c, d) {
//     console.log(a + b + c + d)
//   }
  
//   let curryAdd = curry(add)
//   curryAdd(1, 2)(3)(4) // 10
//   curryAdd(1)(2)(3)(4)
//   curryAdd(1, 2, 3, 4)


function argsSum(args){ 
    return args.reduce((pre, cur) => { 
        return pre + cur 
    }) 
} 
function add(...args1){ 
    let sum1 = argsSum(args1) 
    let fn = function(...args2){ 
        let sum2 = argsSum(args2) 
        return add(sum1 + sum2) 
    } 
    fn.toString = function(){ 
        return sum1 
    } 
    return fn 
} 