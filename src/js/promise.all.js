// Promise.all可以将多个Promise实例包装成一个新的Promise实例。
// 成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值

const { resolve } = require("../../config/webpack.dev")

let p1 = new Promise((resolve, reject) => {
    resolve('成功了')
  })
  
  let p2 = new Promise((resolve, reject) => {
    resolve('success')
  })
  
  let p3 = new Promise((resolve, reject) => {
    reject('失败')
  })
  
  Promise.all([p1, p2]).then((result) => {
    console.log(result)               //['成功了', 'success']
  }).catch((error) => {
    console.log(error)
  })
  
  Promise.all([p1,p3,p2]).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)      // 失败了，打出 '失败'
  })

  // Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个
  // ajax的数据回来以后才正常显示，在此之前只显示loading图标。


  let wake = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${time / 1000}秒后醒来`)
      }, time)
    })
  }
  
  let p4 = wake(3000)
  let p5 = wake(2000)
  
  Promise.all([p4, p5]).then((result) => {
    console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
  }).catch((error) => {
    console.log(error)
  })
//  需要特别注意的是，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all
// 接收到的数组顺序是一致的。这带来了一个绝大的好处：
// 在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，
// 使用Promise.all毫无疑问可以解决这个问题



// Promise.race
// Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是
// 失败状态。
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    },1000)
  })
  
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('failed')
    }, 500)
  })
  
  Promise.race([p1, p2]).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)  // 打开的是 'failed'
  })
  // 应用：
// race的使用场景就是，多台服务器部署了同样的服务端代码，假如我要获取一个商品列表接口，我可以在 race 中写
// 上所有服务器中的查询商品列表的接口地址，哪个服务器响应快，就从哪个服务器拿数据
 
// Promise.race可以用来在有最大请求数量限制时，用来实现大量请求的队列发起.   
// 用于和定时器绑定，可以测试一些接口的响应速度，分析用户的网络状况之类的，，比如将一个请求，和三秒后执行定时器 
// 包装成promise 实例，然后加入 promise.race队列中， 当请求三秒还未响应时候，可以给用户一些提示， 或者是一些其他操作，


// 源码实现：
// 1. all
// 设计思路
// promise.all()返回值是new Promise
// 需要用一个数组存放每一个promise的结果值
// 遍历参数数组，判断是否是promise，是的话执行得到结果后压入结果数组；否则直接放入结果数组。
// 当每个都成功执行后，resolve（result）
// 当有一个失败，reject

function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

Promise.all = arr => {
    let presults = [];
    return new Promise((resolve, reject) => {
        for(let i = 0; i<arr.length; i++) { //使用let保证promise顺序执行
            if (isPromise(arr[i])) {
                arr[i].then((res) => {
                    presults[i] = res;
                    if(presults.length === arr.length){
                        resolve(presults)
                    }
                }, reject)
            } else {
                presults[i] = arr[i]
            }
        }
    })
}

Promise.all = function (promise) {     
    return new Promise((resolve, reject) => {     
        let index = 0     
        let result = []     
        if (promise.length === 0) {     
            resolve(result)     
        } else {     
            function processValue(i, data) {           
                result[i] = data           
                if (++index === promise.length) {               
                    resolve(result)                          
                }    
            }    
            for (let i = 0; i < promise.length; i++) {         
                Promise.resolve(promise[i]).then((data) => {    // Promise.resolve这个要加？？
                    processValue(i, data)         
                }, (err) => {             
                    reject(err) 
                    return        
                })    
            }  
        }   
    })
}

// 2. race
Promise.race = function(values){
    return new Promise((resolve,reject)=>{
        for(let i = 0 ; i< values.length;i++){
            let current = values[i];
            if((typeof current === 'object' &&  current !==null)|| typeof current == 'function'){
                let then = current.then;
                if(typeof then == 'function'){ // 比较哪个promise比较快，谁快用快
                    then.call(current,resolve,reject)
                }else{
                    resolve(current);
                }
            }else{
                resolve(current);
            }
        }
    });
}


if (!Promise.race) {
    Promise.race = function (promises) {
      return new Promise(resolve => {
        const len = promises.length;
        for (let i = 0; i < len; i += 1) {
          const promise = promises[i];
          // 这里使用 Promise.resolve 包了一下，以防传递了 non-promise
          Promise.resolve(promise).then(res => {
            resolve(res);
          }, error => {
            resolve(error);     
          });
        }
      });
    }
  }

window.onload=function() {
    // Promise.all([p1, p2]).then((result) => {
    //     console.log(result)               //['成功了', 'success']
    //   }).catch((error) => {
    //     console.log(error)
    //   })
  }

//   http://www.muyiy.cn/question/async/89.html