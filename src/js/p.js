// 使用的时候
// new MyPromise1(resolve, reject)
// 所以 executor传入的是resolve, reject



class MyPromise1 {
    constructor(executor) {
        this.state ='pending';
        this.value = undefined; //成功的数据/失败的原因 Promise的值
        this.onResolvedCallback = [];
        this.onRejectedCallback = [];
        // 定义resolve, reject
        // 判断状态为pending之后把状态改为相应的值，并把对应的res和reason存在this的value属性上面，
        // 之后执行相应的回调函数
        let resolve = (res) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = res;
                //执行resolve的回调函数，将value传递到callback中
                this.onResolvedCallback.forEach(cb => cb(res))
            }
        }
        let reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.value = reason;
                //执行reject的回调函数，将reason传递到callback中
                this.onRejectedCallback.forEach(cb => cb(reason))
            }
        }
        // 如果executor出错，Promise应该被其throw出的值reject
        try{
            executor(resolve, reject) //执行executor并传入相应的参数
        }catch(e) {
            reject(e)
        }
    }
    // 注册在这个Promise状态确定后的回调，很明显，then方法需要写在原型链上
    // then方法接收两个参数，onResolved，onRejected，分别为Promise成功或失败后的回调
    then = (onResolved, onRejected) => {
        let promise2;
        // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
        onResolved = typeof onResolved === 'function'? onResolved: function(value){return value};
        onRejected = typeof onRejected === 'function'? onRejected: function(reason) {throw reason};
        /**
         * promise2 = promise1.then(function(value) {
                return 4
                }, function(reason) {
                throw new Error('sth went wrong')
            })
            对于上面代码的返回 promise2的值取决于then里面函数的返回值；如果promise1被resolve了，promise2的将被4 resolve，
            如果promise1被reject了，promise2将被new Error('sth went wrong') reject。
            所以，我们需要在then里面执行onResolved或者onRejected，并根据返回值(标准中记为x)来确定promise2的结果，并且，
            如果onResolved/onRejected返回的是一个Promise，promise2将直接取这个Promise的结果。
         */
        if(this.state === 'pending') {
            // 返回一个new Promise
            return promise2 = new MyPromise1((resolve, reject) => {
              
            })
        }
        if (this.status === 'fulfilled') {
            return promise2 = new MyPromise1((resolve, reject) => {
                // 如果promise1(此处即为this/self)的状态已经确定并且是fulfilled，我们调用onResolved
                // 因为考虑到有可能throw，所以我们将其包在try/catch块里
                try{
                    let x = onResolved(this.value)
                    if(x instanceof MyPromise1) {  // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
                        x.then(resolve, reject)
                    } else {
                        resolve(x) //否则，以它的返回值做为promise2的结果
                    }
                }catch(e) {
                    reject(e)
                }
            })
          }
        
          if (this.status === 'rejected') {
            return promise2 = new MyPromise1((resolve, reject) => {
                try {
                    let x = onRejected(self.data)
                    if (x instanceof MyPromise1) {
                      x.then(resolve, reject)
                    } else {
                      resolve(x)
                    }
                  } catch (e) {
                    reject(e)
                  }
            })
          }
        //   return promise2;  为了实现链式调用 返回的还是一个Promise
    }
}