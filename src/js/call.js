

function call() {

}
Function.prototype.myCall = function (context, ...args) {
    context.fn = this // boo.fn = bar
    console.log(this)   // this是调用的函数bar
    context.fn(...args) //
    delete context.fn
}

// let boo = { value: 2 }
// function bar(name, age) { // Aimee 18 2
//     console.log(name)
//     console.log(age)
//     console.log(this.value)
// }

// bar.myCall(boo, 'Aimee', 18)

Function.prototype.myCall2 = function (context) {
    var context = context || window
    // 给 context 添加一个属性
    // getValue.call(a, 'yck', '24') => a.fn = getValue
    context.fn = this
    // 将 context 后面的参数取出来
    var args = [...arguments].slice(1)
    // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
    var result = context.fn(...args)
    // 删除 fn
    delete context.fn
    return result
}


// apply
Function.prototype.myApply = function (context, arr) {
    context.fn = this
    context.fn(...arr)
    delete context.fn
}

// bar.apply(boo, ['kevin', 18])


// bind
Function.prototype.myBind = function (context, ...args1) { // context
    if (typeof this !== 'function') {// 只允许函数调用 bind 方法
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    let self = this; //
    //   let args = Array.prototype.slice.call(arguments, 1)
    let args = args1;
    // 直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，
    // 也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转
    let fNOP = function () { } 
    let fBound = function (...args2) { // 
        //   let bindArgs = Array.prototype.slice.call(arguments);
        let bindArgs = args2;
        // 当作为构造函数时，this 指向实例(fBound创建的实例)，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        console.log('self', self) // function bar
        console.log('this', this)
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    // 先让 fNOP 的原型方法指向 this 即函数bar的原型方法，继承 this 的属性
    fNOP.prototype = this.prototype
    //再将 fbound 即要返回的新函数的原型方法指向 fNOP 的实例化对象
    // 这样，既能让 fBound 继承 this 的属性，在修改其原型链时，又不会影响到 this 的原型链
    fBound.prototype = new fNOP()
    return fBound;
}

// bar.myBind(boo, 'k')(18)

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.myBind(foo, 'daisy');
// bindFoo('18') // 
var obj = new bindFoo('18'); // this 已经指向了 obj
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
