// 变量提升
console.log(f1);    //函数提升，整个代码块提升到文件的最开始<br>
f1();  
console.log(f2);  // undefined

function f1(){  // 将整个函数提升
  console.log('我是函数f1。。。');
}
var f2 = function () {  // 只提升var f2;
  console.log('我是函数f2。。。');
};

(function () {
  console.log('closure');
  a = 'aaa';
  var a = 'bbb';
  console.log(a);
})();


// ƒ f1(){
//     console.log('我是函数f1。。。');
//   }
//   我是函数f1。。。
//   undefined
//   closure
//   bbb



// 作用域
var value = 1;

function foo() {
    console.log(value); //1  执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。
}

function bar() {
    var value = 2;
    foo();
}

bar();  // 1

var x = 10
function fn() {
  console.log(x)
}
function show(f) {
  var x = 20
//   (function() {
    f() //10，而不是20
//   })()
}
show(fn)