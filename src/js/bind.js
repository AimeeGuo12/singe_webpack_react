var foo = { value: 1 };

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}

var bindFoo = bar.bind(foo, 'daisy'); // （1）bindFoo是一个函数
bindFoo('18'); // （2）此处可以再次传入参数
// 1
// daisy
// 18


Function.prototype.bind1 = function(context) {
    console.log('context', context) //只传一个参数  这个参数就代表this的指向，其他的参数通过arguments拿
    // context 可能是多个参数，第一个是this指向的
    var self = this; // 函数实例  bar函数
    // JavaScript中的Array.prototype.slice.call(arguments)能将有length属性的对象转换为数组(特别注意： 这个对象一定要有length属性).
    // 这个过程我们是不是可以理解为 Array.prototype.slice.call(arguments)的实现过程就是把传入进来的具有length属性的第一个参数arguments转换为数组，再调用它的slice（截取）方法
    // 获取bind1函数从第二个参数到最后一个参数
    console.log(arguments)
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(args)
    return function() {
        var bindArgs = Array.prototype.slice.call(arguments)
        console.log(self) // [Function: bar]
        console.log(this)  //window
        self.apply(context, args.concat(bindArgs))
    }
}

var foo = { value: 1 };

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}

var bindFoo = bar.bind1(foo, 'daisy'); // （1）bindFoo是一个函数
bindFoo('18'); 

Function.prototype.myBind = function(context) {
    // 判断调用对象是否为函数
    if(typeof this !== 'function') {
        throw new TypeError('Error')
    }
    // 获取参数
    const args = [...arguments].slice(1), fn = this;
    return function Fn() {
        // 根据调用方式，传入不同绑定值
        return fn.apply(this instanceof Fn ? new fn(...arguments): context, args.concat(...arguments))
    }
}