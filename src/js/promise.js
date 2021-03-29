const constant = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}
function myPromise(fn) {
    // console.log(fn) // function(resolve,reject){resolve(1)}
    let self = this;
    self.status = 'pending';
    self.value = undefined; // 定义状态为resolved的时候的状态
    self.reason = undefined; // 定义状态为reject的时候的状态
    self.onFullfilledArray=[]; //  这里用来存储异步的方法，状态发生改变时，一次遍历执行数组中的方法。
    self.onRejectedArray=[];
    function resolve(value) { // 以最后一个栗子  value为"初始化promise"
        // console.log(value)
        if(self.status === 'pending') {
            console.log('1')
            self.value = value;
            self.status = 'resolved';
            //如果状态从pending变为resolved，
            //那么就遍历执行里面的异步方法
            self.onFullfilledArray.forEach(function(f){
                f(self.value)
            })
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected';
            self.onRejectedArray.forEach(function(f){
                f(self.reason)
            })
        }
    }

    // 捕获构造异常
    try{
        fn(resolve, reject);
    }catch(e){
        reject(e)
    }
}
// 对于then方法，状态为pending时，往数组里面添加方法：
myPromise.prototype.then1=function(onFullfilled,onRejected) {
    let self = this;
    switch(self.status) {
        case 'pending':
            console.log('2')
            self.onFullfilledArray.push(function() {
                onFullfilled(self.value) //then中的第一个参数函数就是onFullfilled
            })
            self.onRejectedArray.push(function(){
                onRejected(self.reason)
           });
            break;
        case 'resolved':
            console.log('3')
            onFullfilled(self.value);
            break;
        case 'rejected':
            onRejected(self.reason);
            break;
        default:
            break;
    }
}

// var p=new myPromise(function(resolve,reject){resolve(1)});
// p.then(function(x){console.log(x)})  // 打印了 1， 3 不打印2是因为，同步先进行了resolve函数，
// 此时修改了状态，再到then中的就只执行resolved的

// var p=new myPromise(function(resolve,reject){setTimeout(function(){resolve(1)},1000)});

// p.then(function(x){console.log(x)})   // 打印了  2， 1 且1是在1秒后打印出的  
// 因为异步1秒后进行，所以先运行then中的内容，但是此时还是pending 状态没有改变，
// 所以执行pending中的代码，最后再执行resolve函数中的。


// 修改then方法，应该返回的是promise，以实现链式调用,并在返回promise的构造体中，增加错误处理
myPromise.prototype.then2=function(onFullfilled,onRejected) {
    onFullfilled=typeof onFullfilled==="function"?onFullfilled:function(x){return x};
    onRejected=typeof onRejected==="function"?onRejected:function(e){throw e};
    let self = this;
    let promise2;
    switch(self.status) {
        case 'pending':
            promise2 = new myPromise(function(resolve, reject) {
                console.log('2')
                self.onFullfilledArray.push(function() {
                    try{
                        // resolve出去
                        let temple = onFullfilled(self.value) //then中的第一个参数函数就是onFullfilled
                        resolve(temple)
                    }catch(e) {
                        reject(e) // error catch
                    }
                })
                self.onRejectedArray.push(function(){
                    try{
                        // resolve出去
                        let temple = onRejected(self.reason)
                        resolve(temple)
                    }catch(e) {
                        reject(e) // error catch
                    } 
               });
            })
           
            break;
        case 'resolved':
            promise2 = new myPromise(function(resolve, reject) {
                console.log('3')
                try{
                    let temple = onFullfilled(self.value);
                    //将上次一then里面的方法传递进下一个Promise的状态
                    resolve(temple)
                }catch(e){
                    reject(e) // error catch
                }
            })
            break;
        case 'rejected':
            promise2 = new myPromise(function(resolve, reject) {
                try{
                    let temple = onRejected(self.reason);
                    //将上次一then里面的方法传递进下一个Promise的状态
                    resolve(temple)
                }catch(e){
                    reject(e) // error catch
                }
            })

            break;
        default:
            break;
    }
    return promise2
}

// p.then(function(x){console.log(x)}).then(function(){console.log("链式调用1")}).then(function(){console.log("链式调用2")})



// 改进
// 特别的为了解决onFullfilled和onRejected方法的返回值可能是一个promise的问题。

// （1）首先来看promise中对于onFullfilled函数的返回值的要求

// I）如果onFullfilled函数返回的是该promise本身，那么会抛出类型错误

// II）如果onFullfilled函数返回的是一个不同的promise，那么执行该promise的then函数，在then函数里将这个promise的状态转移给新的promise
// III）如果返回的是一个嵌套类型的promsie，那么需要递归。

// IV)如果返回的是非promsie的对象或者函数，那么会选择直接将该对象或者函数，给新的promise。

// 根据上述返回值的要求，我们要重新的定义resolve函数，这里Promise/A+规范里面称为：resolvePromise函数，该函数接受当前的promise、onFullfilled函数或者onRejected函数的返回值、resolve和reject作为参数。

/**
 * 
 * @param {*} promise 当前promise
 * @param {*} x onFullfilled或onRejected函数返回值
 * @param {*} resolve 
 * @param {*} reject 
 */
function resolvePromise(promise, x, resolve, reject) {
    console.log('promise', promise)
    console.log('x', x)
    console.log(resolve, reject)
    // 如果onFullfilled函数返回的是该promise本身，那么会抛出类型错误
    if(promise === x) {
        throw new TypeError("type error")
    }
    // 如果返回的是promsie或非promsie的对象或者函数
     let isUsed;
     if (x!==null && (typeof x === "object" || typeof x === "function")){
        try {
            let then = x.then;
            if(typeof then === 'function'){
                // 为promise时
                then.call(x, function(y) {
                    if(isUsed) return;
                    isUsed = true;
                    resolvePromise(promise, y, resolve, reject)
                }, function(e) {
                    if(isUsed) return;
                    isUsed = true;
                    reject(e)
                })
            } else{
                // 为一个函数或者对象
                resolve(x)
            }
        } catch (e) {
            if(isUsed) return;
            isUsed = true;
            reject(e)
        }
     } else{
         // 返回的基本类型， 直接resolve
         resolve(x)
     }
}

// then中的调用变为resolvePromise而不是promise
myPromise.prototype.then=function(onFullfilled, onRejected) {
    console.log('onFullfilled', onFullfilled)
    onFullfilled=typeof onFullfilled==="function"?onFullfilled:function(x){return x};
    onRejected=typeof onRejected==="function"?onRejected:function(e){throw e};
    let self = this;
    let promise2;
    switch(self.status) {
        case 'pending':
            promise2 = new myPromise(function(resolve, reject) {
                console.log('2')
                self.onFullfilledArray.push(function() {
                    setTimeout(function(){  // then方法返回的也是一个promise，也是一个异步的，这里用setTimeout包裹，使得then方法被调用后，不会阻塞后续的同步任务。
                        try{
                            // resolve出去
                            let temple = onFullfilled(self.value) //then中的第一个参数函数就是onFullfilled
                            resolvePromise(temple)
                        }catch(e) {
                            reject(e) // error catch
                        }
                    })
                   
                })
                self.onRejectedArray.push(function(){
                    setTimeout(function(){
                        try{
                            // resolve出去
                            let temple = onRejected(self.reason)
                            resolvePromise(temple)
                        }catch(e) {
                            reject(e) // error catch
                        } 
                    })
               });
            })
           
            break;
        case 'resolved':
            promise2 = new myPromise(function(resolve, reject) {
                console.log('3')
                setTimeout(function(){
                    try{
                        let temple = onFullfilled(self.value); //  self.value "初始化promise"
                        //将上次一then里面的方法传递进下一个Promise的状态
                        resolvePromise(temple)
                    }catch(e){
                        reject(e) // error catch
                    }
                })
            })
            break;
        case 'rejected':
            promise2 = new myPromise(function(resolve, reject) {
                setTimeout(function(){
                    try{
                        let temple = onRejected(self.reason);
                        //将上次一then里面的方法传递进下一个Promise的状态
                        resolvePromise(temple)
                    }catch(e){
                        reject(e) // error catch
                    }
                })
            })

            break;
        default:
            break;
    }
    return promise2
}

var p=new myPromise(function(resolve,reject){resolve("初始化promise")})
p.then(function(){return new myPromise(function(resolve,reject){resolve("then里面的promise返回值")})}).then(function(x){console.log(x)})

// 首先返回值有两个：

// then函数的返回值——>返回一个新promise，从而实现链式调用

// then函数中的onFullfilled和onRejected方法——>返回基本值或者新的promise

// 这两者其实是有关联的，onFullfilled方法的返回值可以决定then函数的返回值。