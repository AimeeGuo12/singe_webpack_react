// 尾递归

// 数据求和
// function sum(a, b) {
//   return a + b
// }

function ArraySum(arr, total=0) {
  if(arr.length === 1) {
    return total
  } 
  return ArraySum(arr, total + arr.pop())
}
console.log(ArraySum([2,4,5,6,7]))

// 斐波那契数列
function factorial2(n, start = 1, total = 1) {
  if(n<=2) return total
  return factorial2(n-1, total, total + start)  // ??
}

// 我想的是这个
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1) // 120

// 数组扁平化
let a = [1,2,3,[1,2,3,[1,2,3]]]

function flat (arr = [], result=[]) {
  arr.forEach(v=> {
    if(Array.isArray(v)) {
      result = result.concat(flat(v, []))
    } else {
      result.push(v)
    }
  })
  return result
}

// //数组对象格式化
// let obj = {
//   a: '1',
//   b: {
//       c: '2',
//       D: {
//           E: '3'
//       }
//   }
// }
// // 转化为如下：
// let obj = {
//   a: '1',
//   b: {
//       c: '2',
//       d: {
//           e: '3'
//       }
//   }
// }

// 代码实现
function keysLower(obj) {
  let reg = new RegExp("([A-Z]+)", "g");
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          let temp = obj[key];
          if (reg.test(key.toString())) {
              // 将修改后的属性名重新赋值给temp，并在对象obj内添加一个转换后的属性
              temp = obj[key.replace(reg, function (result) {
                  return result.toLowerCase()
              })] = obj[key];
              // 将之前大写的键属性删除
              delete obj[key];
          }
          // 如果属性是对象或者数组，重新执行函数
          if (typeof temp === 'object' || Object.prototype.toString.call(temp) === '[object Array]') {
              keysLower(temp);
          }
      }
  }
  return obj;
};