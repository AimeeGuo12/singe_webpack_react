// newListener和removeListener
// 这两者都是表示监听器有变化时，程序主动触发的：
class EventEmitter {
    handles={};
    // 监听所有触发的事件
    on(evName, listener) {
        if (!this.handles[evName]) { // 如果没有监听过evName事件
            this.handles[evName] = []
        }
        this.handles[evName].push(listener) // 添加监听者，事件绑定
        // 有新增事件时，触发newListener
        this.emit('newListener', evName, listener);
        return this;
    }
    // 主动触发事件
    emit(evName, ...args) {
        const handler = this.handles[evName]; // 将这个事件的函数都取出，依次执行
        if(handler) {
            for(let i = 0; i<handler.length; i++) {
                handler[i].apply(this, args)
            }
        }
    }
    // 与on事件类似，只要监听到第1个事件后，则立刻移除监听器，后续不再监听此事件：
    once(evName, listener) {
        let fired = false;
        let magic = (...args) => {
            this.off(evName, magic);
            if(!fired) {
                fired = true;
                listener.apply(this.args);
            }
        }
        this.on(evName, magic);
        return this;
    }
    //移除某个事件
    off(evName, listener) {
        if(this.handles[evName]) {
            // 从数组中移除listener
            this.handles[evName] = this.handles[evName].filter(fn => {
                if(fn!==listener) {
                    // 监听器有移除时，触发removeListener
                    this.emit('removeListener', evName, listener);
                    return true;
                }
                return false;
            });
        }
    }
}
// 使用
let downapp = new EventEmitter();
downapp.on('steps', step => console.log(step))
downapp.emit('steps', 30) // 30
// https://www.xiabingbao.com/post/design/observer-eventemitter.html



// 继承
// 原型链
function Parent() {
    this.name = 'hello';
}
Parent.prototype.getName = function() {
    return this.name;
}

function Child() {};
Child.prototype = new Parent();
// 根据原型链的规则,顺便绑定一下constructor, 这一步不影响继承, 只是在用到constructor时会需要
Child.prototype.constructor = child;
const alias = new Child();
alias.name //hello
alias.getName();  //hello

// -------------------------------------------------------------
function move(el, attr, val, cb) { // val目标
    let now = parseFloat(getComputedStyle(el)[attr])
    let speed = (val - now)/Math.abs(val-now)*2;
    clearInterval(el.timer)
    el.timer = setInterval(() => {
        if(Math.abs(now - val) < 0) {
            clearInterval(el.timer)
            cb && cb();
        } else {
            now += speed;
            el.style[attr] = now + 'px';
        }
    }, 16)
}
{
    let box = document.querySelector('#box');
    move(box, 'left', 200)
}

// 基于promise
function move(el, attr, val) { // val目标
    let now = parseFloat(getComputedStyle(el)[attr])
    let speed = (val - now)/Math.abs(val-now)*2;
    // let speed = val > now ? 1:-1;
    return new Promise((resolve, reject) => {
        clearInterval(el.timer)
        el.timer = setInterval(() => {
            if(Math.abs(now - val) < 0) {
                clearInterval(el.timer)
                resolve();
            } else {
                now += speed;
                el.style[attr] = now + 'px';
            }
        }, 16)
    })
}
{
    let box = document.querySelector('#box');
    function boxMove() {
        move(box, 'left', 200).then(() => {
            return move(box, 'top', 200)
        }).then(() => {
            return move(box, 'left', 0)
        }).then(() => {
            return move(box, 'top', 0)
        }).then(() => {
            boxMove()
        })
    }
    boxMove()
}

//-----------------------------------------------------------
// catch
new Promise((resolve, reject) => {
    reject(1) // 这里出错 直接使用catch捕获了，不会再继续向下走
}).then(() => {
    console.log('1')
}).then(() => {
    console.log('2')
}).catch((err) => { 
    console.log('出错了',err) // 1
})

async function fn() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('1')
            resolve()
        }, 1000)
    })
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('2')
            resolve()
        }, 1000)
    })
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('3')
            resolve()
        }, 1000)
    })
}

fn() // 1 2 3

async function fn() {
    let n1 = await new Promise((resolve) => {
        setTimeout(() => {
            console.log(0)
            resolve(1)
        }, 1000)
    })
    let n2 =await new Promise((resolve) => {
        setTimeout(() => {
            console.log(n1)
            resolve(2)
        }, 1000)
    })
    let n3 =await new Promise((resolve) => {
        setTimeout(() => {
            console.log(n2)
            resolve(3)
        }, 1000)
    })
    console.log(n3)
}

fn() // 0 1 2 3 


let map = new Map();
map.set('aa', 1);
map.set('bb', 2);
for (let [name, value] of map) {
    console.log(name + '' + value)
}

// 模块化

//-----------------------------------------------

/**
 * target 用Proxy包装的被代理对象（可以是任何类型的对象，包括原生数组，函数）
 * 
 * handler 一个对象，其声明了代理target的一些操作，其属性
 * 是当执行一个操作时
 */
let proxy = new Proxy(target, handler)

let data = {
    name: 'xxx',
    age: 12,
    price: 100000
}
let proxyData = new Proxy(data, {
    get(target, key) { // 获取的时候拦截 // target就是要代理的对象
        console.log(arg)
        if(key === 'price') {
            return target[key]*.9
        }
        return target[key];
    },
    set(target, key, newVal) {
        if(key === 'price') {
           if(newVal > target[key]) {
               throw "没钱了，钱不够！"
           }
        }
        // if(isNaN(newVal)) {
        //     throw '数字'
        // }
        target[key] = newVal;
    },
    has(target, key) { // 判断某个值存不存在拦截
        return (key in target)
    }
})
console.log(proxyData.price)
proxyData.price = 6000
console.log('gf' in proxyData)


function fn() {
    console.log(this, 111)
}

// apply代理的是函数
fn = new Proxy(fn, {
    apply(target,thisArg, ...arg) { // 函数执行时，进行一个拦截, 通过new调用这个
        // 函数不会触发apply的代理（new fn)
        // throw '该函数是类不能直接调用'
        if(typeof thisArg !== 'object') {
            throw "该函数只支持事件和对象的方法调用"
        }
        target.apply(thisArg, arg)
    }
})

// fn.call(1, 'a', 'b', 'c');
fn.call(document, 'a', 'b', 'c');
// new fn;
// fn()


// construct  //用于 function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person = new Proxy(Person, {
    apply(target,thisArg, ...arg) { 
        throw "Person是一个类，请勿直接调用"
    },
    construct(target, arg) { // construct一定要返回一个对象
        return new target(...arg)
    }
})

let p = new Person('Aime, 19');

// defineProperty
let data = {
    name: 'xxx',
    age: 12,
    price: 100000
}
let proxyData = new Proxy(data, {
    get(target, key) { // 获取的时候拦截 // target就是要代理的对象
        console.log(arg)
        if(key === 'price') {
            return target[key]*.9
        }
        return target[key];
    },
    set(target, key, newVal) {
        if(key === 'price') {
           if(newVal > target[key]) {
               throw "没钱了，钱不够！"
           }
        }
        // if(isNaN(newVal)) {
        //     throw '数字'
        // }
        target[key] = newVal;
    },
    has(target, key) { // 判断某个值存不存在拦截
        return (key in target)
    },
    defineProperty(target, key, descrip) { // 当调用了Object.defineProperty时执行
        return Object.defineProperty(target, key, descrip)
    },
    deleteProperty(target, key) { // 删除拦截
        if (key == 'name') {
            throw "name属性不能删除"
        }
        delete target[key];
    },
    getOwnPropertyDescriptor(target, key) { // 获取属性描述
        return Object.getOwnPropertyDescriptor(target, key)
    },
    //阻止对象扩展
    preventExtensions(target) {
        return Object.preventExtensions(target)
    },
    setPrototypeOf(target, prototype) { 
        return Object.setPrototypeOf(target, prototype)
    },
    ownKeys(target) { // 拦截keys方法
        return Object.ownKeys(target)
    }
    
})

Object.defineProperty(proxyData, 'child', {
    configurable: true,
    enumerable: true,
    get() {
        return "不要关心人家家事"
    },
    set(val) {
        console.log('这不是我的', val)
    }
})
Object.getOwnPropertyDescriptor(proxyData, 'name')
console.log(proxyData.child) //不要关心人家家事
delete proxyData.name;
// delete

let base = {
    url: 'https://www.baidu.com',
    user: 'mt'
}
Object.preventExtensions(base);
base.ggg = '1010'// 不能加新属性。可以修改

Object.freeze(base)// 冻结对象，不能修改也不能扩展
Object.isExtensible(base) // 判断对象能否扩展


// 对象的原型获取和设置
class Person{
    sayName() {
        console.log(this.name)
    }
}

let p = {
    name: 'aa'
}
// 获取对象的原型
console.log(Object.getPrototypeOf(p)); // Object
console.log(Object.prototype);
// 设置
Object.setPrototypeOf(p, Person.prototype); // 将p的原型设为Person的原型
p.sayName();



//---------------------------------------------------------
