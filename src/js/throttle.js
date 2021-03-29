// 持续触发，每隔一段时间， 只执行一次事件
// 根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
// 我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。


// 关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器
// 时间戳
function throttle(func, wait) {
    let context, args;
    let previous;
    return function() {
        let now = +new Date(); // +将时间转化为时间戳， 相当于Number(new Date())
        args = arguments;
        context = this;
        if(now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }

}

// 定时器 不是立即执行的， 而且事件停止触发后会再执行一次
function throttle2(func, wait){
    let timeout;
    let contxet, args;
    return function() {
        contxet = this;
        args = arguments;
        if(!timeout) {
            timeout = setTimeout(function(){
                timeout = null;
                func.apply(contxet, args)
            }, wait)
        }
    }
}

// 鼠标移入立即执行，停止触发还能再执行一次
function throttle3(func, wait){
    let timeout, context, args, result;
    let previous = 0;
    let later = function() {
        previous = +new Date();
        timeout = null;
        func.apply(context, args)
    }
    let throttled = function() {
        let now = +new Date();
        // 下次触发func剩余时间
        let remaining = wait - (now-previous) // now-previous 为已经走过的时间， wait为总时间
        context = this;
        args = arguments;
         // 如果没有剩余的时间了或者你改了系统时间
        if (remaining < 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args)
        } else if(!timeout) {
            timeout=setTimeout(later, remaining);
        }
    }
    return throttled;
}