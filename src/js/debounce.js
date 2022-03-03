var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    console.log('getUserAction', this)
    container.innerHTML = count++;
};

// container.onmousemove = getUserAction;
container.onmousemove = debounce3(getUserAction, 1000, false);
// 防抖
function debounce(fn, wait) {
    let timer = null;
    return function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}

// 解决this和event不正确的问题
function debounce2(fn, wait) {
    let timer;
    return function() {
        let context = this
        let args = arguments;
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(context, args)
        }, wait)
    }
}

// 加上immediate参数表示是否需要立即执行
function debounce3(func, wait, immediate) {
    let timeout
    console.log('debounce3外', this)
    return function() {
        console.log('debounce3内', this)
        let context = this;
        let args = arguments;
        if(timeout) clearTimeout(timeout)
        if(immediate) {
            // 如果已经执行，不再执行
            console.log(timeout)
            let callNow = !timeout; // 执行 !timeout为false， 则把timeout清除不执行， 如果已经执行完 则立即执行
            timeout = setTimeout(function(){
                timeout = null; // 考虑到不再触发之后的情况，如果不置 timeout 为null 就无法再实现下次的立即执行!
            }, wait)
            console.log('debounce3内内额你内', this)
            if (callNow) func.apply(context, args)
        } else{
            console.log(timeout)
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);  // 有延时
        }
    }
}
let num = 1;
var x = setInterval(function(){
    console.log(num += 1)
    console.log(x)
    x = null;
    },1000);