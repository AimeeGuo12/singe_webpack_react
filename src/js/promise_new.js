// 08/06学习promise again  一步一步跟着来
// https://mp.weixin.qq.com/s?__biz=MzI4NjY4MTU5Nw==&mid=2247486661&idx=1&sn=8e4b3056aa9c110ca08047d0917290f4&chksm=ebd87c57dcaff54168d1a8f94b074fa814270b9753d8c1e7eebe3b4203254ecb0e6989ba1f19&scene=21#wechat_redirect

const { call } = require("file-loader");

// 初始版本
class Promise{
    callbacks = [];
    // constructor方法在这里实质就是构造方法，通过new生成实例会自动调用，如果类型没有定义constructor则会默认添加
    constructor(fn) { 
        fn(this._resolve.bind(this))
    }
    //constructor才是实例A的构造函数，写在constructor外部的可以理解为绑定在构造函数的原型上。
    // Promise.prototype.then = (onFullfilled) {}
    then(onFullfilled) {
        this.callbacks.push(onFullfilled)
        return this;
    }
    _resolve(value) {
        this.callbacks.forEach(fn => fn(value));
    }
}

// 使用
let p = new Promise(resolve => {

}, reject)  




// https://zhuanlan.zhihu.com/p/145888159
// https://www.ituring.com.cn/article/66566
const PENDING = 'pending'; // 等待态
const RESOLVED = 'resolved'; // 成功态
const REJECTED = 'rejected'; // 失败态

// 针对返回的不同类型做返回封装
/**
 * 
 * @param {*} promise2 当前promise
 * @param {*} x onFullfilled或onRejected函数返回值
 * @param {*} resolve 
 * @param {*} reject 
 */
const resolvePromise = (promise2, x, resolve, reject) => {
    // 循环引用 自己等待自己完成  错误实现
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }

    let called; // 变量控制成功就不能失败
    // 后续的条件严格判断 保证代码能和别的库一起使用
    if ((typeof x === 'object' && x !== null) || typeof x === 'function') {//可能是个promise
        // 继续判断
        try{
            let then = x.then;
            if (typeof then === 'function') { // 说明x是个promise
                then.call(x, y => {// 根据promise的状态决定是成功还是失败 
                    if (called) return;
                    called = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    reject(err);
                } )
            } else { // {then: '23} 普通对象
                if (called) return;
                called = true;
                resolve(x);
            }
        } catch (err) { // 取值（x.then出错）
            if (called) return;
            called = true;
            reject(err)
        }
    } else { // 普通值， 直接返回
        resolve(x)
    }
}
class MyPromise{
    // 创建一个Promise实例时，都会立即执行executor函数(处理器函数)，
    //executor函数传递两个参数，resolve和reject，
    //如果executor函数执行错误，Promise实例状态会变为rejected
    constructor(executor) {
        this.status = PENDING; //promise状态
        this.value = undefined; //成功的数据/失败的原因
        this.onResolvedCallbacks = []; // 专门用来存放成功的回调
        this.onRejectedCallbacks = []; // 专门用来存放失败的回调
        //成功后执行，将状态改变为 resolved，并且将结果返回
        let resolve = (res) => {
            if (this.statue !== PENDING) return; // 状态一旦改变，就不会再变
            this.value = res;
            this.status = RESOLVED;
            // 成功以后运行回调
            this.onResolvedCallbacks.forEach(fn => fn()) //依次执行
        }
        //异常时执行，将状态改变为 rejected，并且将失败的原因返回
        let reject = (err) => {
            if (this.statue !== PENDING) return; // 状态一旦改变，就不会再变
            this.value = err;
            this.status = REJECTED;
            this.onRejectedCallbacks.forEach(fn => fn())
        }
        // try、catch捕获异常，如果错误，执行reject方法
        try{
            executor(resolve, reject)// 立即执行
        } catch(err) {
            reject(err)
        }
    }

    then(onFullfilled, onRejected) {
        // 没有传的话， 默认返回
        onFullfilled = typeof onFullfilled === 'function'? onFullfilled : v => v;
        onRejected = typeof onRejected === 'function'? onRejected : e => {throw e};
        let promise2 = new MyPromise((resolve, reject) => {// 为了实现链式调用
            if(this.status === RESOLVED) {//执行成功
                setTimeout(()=> {
                    try {
                        let x = onFullfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch(err) {
                        reject(err);
                    }
                }, 0)
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try{
                        let x = onRejected(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch(err) {
                        reject(err);
                    }
                }, 0);
            }
            if (this.status === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFullfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (err) {
                            reject(err)
                        }
                    }, 0)
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try{
                            let x = onRejected(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch(err) {
                            reject(err)
                        }
                    }, 0)
                })
            }
        })
        return promise2; 
    };
    catch(errCallBack) {
        return this.then(null, errCallBack)
    };
    // static 静态方法只能构造函数直接调用，不能通过new实例调用
    //快速创建一个成功的promise
    static resolve(data) {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    };
    // 快速的构建一个失败的promise
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }

    // 无论失败或成功都会执行
    finally(callback) {
        return this.then(
            value => MyPromise.resolve(callback()).then(()=>value),
            reason => MyPromise.resolve(callback()).then(() => {
                throw reason
              })
        )
    };
    static all(promises) {
        return new MyPromise((resolve, reject) => {
        // 异步 ：并发 （使用for循环迭代执行） 和 串行（借助回调 第一个完成后调用第二个）
        // 遍历数组 依次拿到执行结果
        let arr = [], // 存放每个promise结果
        index = 0;
        const processData = (key, data) => {
            arr[key] = data;
            if (++index === promises.length) {
                resolve(arr)
            }
        }
        for (let i = 0; i < promises.length; i++) {
            let result = promises[i]; //依次执行
            if(isPromise(result)) { // 返回promise
                result.then(data => {
                    processData(i, data)
                }, reject)
            } else { // 返回普通值
                processData(i, result)
            }
        }
        })
    }

    //多个接口请求，采用快的那个
    static race(promises) {
        return new MyPromise((resolve, reject) => {
          for (let i = 0; i < promises.length; i++) {
            let result = promises[i];
            if (isPromise(result)) {
              result.then(resolve, reject)
            } else {
              resolve(result);
            }
          }
        });
      }
}
// promise的延迟对象
MyPromise.defer = MyPromise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
      dfd.resolve = resolve;
      dfd.reject = reject;
    })
    return dfd
  }

module.exports = MyPromise