var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//示例1
console.log(foo.bar()); // 2
//示例2
console.log((foo.bar)()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4
console.log((false || foo.bar)()); // 1
//示例5
console.log((foo.bar, foo.bar)()); // 1
// 以上是在非严格模式下的结果，严格模式下因为 this 返回 undefined，所以示例 3 会报错。
function foo() {
    console.log(this)
}

foo(); // undefined

