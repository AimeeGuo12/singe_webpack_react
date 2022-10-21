// underScore思想
(function (root) {
  console.log(root)
  var _ = function (data) {
    console.log(data)
    // data [1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, "a", "A"]
    // this 如果不是指向实例  就new一个实例
    if (!(this instanceof _)) {
      return new _(data);
    }
    this.wrapper = data;
  }

  /**
   * 
   * @param {*} source 上次返回的参数
   * @param {*} callback 外部传入的回调
   * @returns 
   */
  _.unique = function (source, callback) {
    console.log('callback', callback)
    var result = [];
    var i = 0;
    for (; i < source.length; i++) {
      var target = callback ? callback(source[i]) : source[i];
      if (result.indexOf(target) === -1) result.push(target);
    }
    return result;
  }

  _.chain = function (data) {
    var instance = _(data);
    instance._chain = true;
    return instance;
  }

  var model = function (instance, outcome) {
    // 需要链式调用 改变参数 返回实例
    if (instance._chain) {
      instance.wrapper = outcome;
      return instance;
    }
    // 否则  直接返回值
    return outcome;
  }

  _.max = function (outcome) {
    outcome.push("max")
    return outcome
  }


  _.prototype.ending = function () {
    // 结束链式调用  返回结果
    return this.wrapper;
  }

  // 获取_中的方法名
  _.posscess = function (target) {
    var result = [];
    for (var name in target) {
      result.push(name);
    }
    return result;
  }

  var beforeHook = function (keys, callback) {
    for (var i = 0; i < keys.length; i++) {
      callback(keys[i]);
    }
  }

  // 混入 1. 方法的名称 2. 存储在数组中 3. 遍历数组  4. item给原型扩展
  _.mixin = function (object) {
    // object 是_函数以及上面的方法
    console.log('object :>> ', object);
    beforeHook(_.posscess(object), function (key) {
      // 将_中方法挂到原型上 为了函数形式的使用
      // 先拿到方法
      var func = object[key];
      object.prototype[key] = function () {
        // 参数结构 组合
        var deco = [this.wrapper]; // 这里的this指向实例本身  
        // 不能直接push 直接push得到的是类数组
        // deco.push(arguments) // [Array(14), Arguments(1)]
        Array.prototype.push.apply(deco, arguments);  //[Array(14), f]
        // 需要设置返回值 
        return model(this, func.apply(this, deco));     //1: 对象   2: 数据的结果
      }
    });

  }

  _.mixin(_);

  root._ = _;
})(this);
// 这里的this? 