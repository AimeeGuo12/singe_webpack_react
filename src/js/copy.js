// deepCopy

function deepCopy(obj) {
    let newObj;
    if (typeof obj === 'object') { // 数组或对象 返回'object'
        newObj = Array.isArray(obj) ? []: {}
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // 如果对象的属性仍然为对象/数组则递归
                newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]): obj[key]
            }
        }
    } else {
        newObj = obj // 简单数据类型直接复制
    }
    return newObj
}

let a = {
    age: undefined,
    sex: Symbol('male'),
    jobs: function () {},
    name: 'cxk'
}
let d= {
    fname: 'zzt',
    fans: {name: 'gg', age: 18, friends: {name: undefined}}
}
let b = JSON.parse(JSON.stringify(a))
console.log(b) // { name: 'cxk' }
let c = deepCopy(a)
console.log(c) // { age: undefined, sex: Symbol(male), jobs: [Function: jobs], name: 'cxk' }

let e = deepCopy(d)
console.log(d, e)

// 字符串转驼峰 注意第一个字符不大写，如border-bottom-color -> borderBottomColor
function Change(str) {
    let arr = str.split('-')
    arr = arr.map((item, index) => {
        return index === 0? item : item.charAt(0).toUpperCase() + item.substring(1)
    })
    return arr.join("")
}

console.log(Change('border-bottom-color'))

// 查找
function findMostChar(str) {
    let map = new Map();
    let maxChar, max = 0;
    for (let index = 0; index < str.length; index++) {
        let item = str[index];
       if(!map.has(item)){
           map.set(item, 1)
       } else {
        let count = map.get(item)
        map.set(item, count + 1)
        if (count > max) {
            max = count
            maxChar = item
        }
       } 
    }
    console.log(...map)
    return maxChar
}

console.log(findMostChar('asdsdsdsdswewscd')) // s

// 数组扁平
const arr = [1, [2, 3, [4, 5]]]
function flattern(arr) {
    console.log(arr.join(',').split(','))
    return arr.reduce((preValue, currValue, currIndex, array) => {
        return preValue.concat(Array.isArray(currValue)? flattern(currValue): currValue)
    }, []) // []作为第一个preValue
}
console.log(flattern(arr)) // [1,2,3,4,5]


// 用reduce实现map
Array.prototype.map = function(callback) {
    let arr = this;
    return arr.reduce((prev, curr, index, arr) => {
        prev.push(callback(curr, index, arr))
        return prev
    }, [])
}