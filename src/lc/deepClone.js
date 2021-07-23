/**
 * 深拷贝
 */

const obj = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}

/**
 * 
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj={}) {
    if (typeof obj !== 'object' || obj == null) {
        // obj是null或者不是对象和数组，直接返回
        return obj;
    }
    let result;
    if(obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }
    for (let key in obj) {
        // if (Object.hasOwnProperty.call(obj, key)) {
        if (obj.hasOwnProperty(key)){
            // 递归
            result[key] = deepClone(obj[key])
        }
    }
    return result;
}


class Studengt extends People{
	constructor(name, number){
  
super(name)	 // 继承自父亲
this.name = name  // this实例
    this.number = number
  }
 sayHi(){
  	console.log(this.name)
  }
}


   

    

   

   

    

var p = {
    "id": "007",
    "name": "刘德华",
    "books": new Array(
    "三国演义",
    "红楼梦",
    "水浒传")
    //这是引用类型
    }
   

  

