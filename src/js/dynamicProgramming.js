// 动态规划
// 核心是记录已经解决过的子问题的解

// 动态规划算法的两种形式
// 记录求解的方式有两种：① 自顶向下的备忘录法 ② 自底向上
// 以求斐波那契数列为例来介绍这两种方法：

// Fibonacci (n) = 1;   n = 0
// Fibonacci (n) = 1;   n = 1
// Fibonacci (n) = Fibonacci(n-1) + Fibonacci(n-2)

// 1.自顶向下的备忘录法
function Fibonacci (n) {
    if (n <= 1) return n;
    const memo = new Array(n + 1)
    for (let index = 0; index <= n; index++) {
        memo[index] = -1  // 先全部记为负一
    }
    return fib(n, memo)

    function fib(n, memo) {
        // 已经有了值 否则将求出的值放到memo备忘录里
        if(memo[n] !== -1) return memo[n];
        if(n <= 2) memo[n] = 1;
        else memo[n] = fib(n-1, memo) + fib(n-2, memo)
        return memo[n]
    }
}



// 2、自底向上的动态规划
// 备忘录法还是利用了递归，上面算法不管怎样，计算 fib(6) 的时候最后
// 还是要计算出 fib(1), fib(2), fib(3) ……那么何不先计算出 fib(1), fib(2), fib(3) 
// ……呢？这也就是动态规划的核心，先计算子问题，再由子问题计算父问题。

function Fibonacci2(n) {
    if (n <= 1) return n;
    const f = [];
    f[0] = 0;
    f[1] = 1;
    for (let i = 2; i <= n; i++) {
        f[i] = f[i-1] + f[i-2]
    }
    return f[n]
}

// 补充一种es6的写法
function Fibonacci1 (n, fib1 = 1, fib2 =1) {
    if (n <= 2) return 1;
   for (let i = 0; i < n.length; i++) {
       [fib1, fib2]= [fib2, fib1+fib2]
   }
   return fib2
}

// 使用时机
https://www.kancloud.cn/chenmk/web-knowledges/1250927




// 上楼梯 n阶  有一次1阶和一次2阶两种方式
// n = 1 ; f(n) = 1;
// n=2; f(n) = 2;
// 思路： n阶时  是第 n-1阶和n-2阶方法得和

function f(n) {
    let res = 0;
    if (n<1) return 0;
    if (n===1) return 1;
    if (n===2) return 2;
    let n1 = 1, n2 = 2;
    for (let index = 3; index <= n; index++) {
        res = n1 + n2;
        n1 = n2;
        n2 = res;
    }  
    return res;
}




// 找数组连续子集相加得最大值
function getMaxAddValue(arr) {
    let array = new Array(arr.length);
    array[0] = arr[0]
    let res=arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(res + arr[i] > 0 && arr[i] > 0) {
            array[i] = res + arr[i]
            res = res + arr[i]
        } else {
            array[i] = 0;
            res = 0;
        }
        
    }
    return Math.max(...array) // 
    // 或者  Math.max.apply(null, numArray);
}




console.log(Fibonacci(6))
console.log(Fibonacci2(6))
console.log('..............')
console.log(f(1),f(2),f(3),f(4),f(5),f(6),f(7),f(8),f(9))
console.log(getMaxAddValue([2, 3 , 6, -10, 3, 6]))  // 11