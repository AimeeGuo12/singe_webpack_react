(function(root){
  var _ = function(data){

    if (!(this instanceof _)){
      return new _(data)
    }
    this.wrapper = data
  }

  _.process(object) = function() {
    let arrResult = []
    for(var key in object) {
      arrResult.push(key)
    }
    return arrResult;
  }
  _.chain = function(data) {
    var instance = _(data);
    instance.chain = true;
    return instance
  }
  _.prototype.ending = function () {
    // 结束链式调用  返回结果
    return this.wrapper;
  }

  var model = function(instance, deco) {
    if(instance.chain) {
      instance.wrapper = deco
      return instance;
    }
    return  deco;
  }
  var beforeHook = function(keys, callback) {
    for(let i = 0; i < keys.length - 1; i++) {
      callback(keys[i])
    }
  }
  
  _.mixin = function(object) {
    
    beforeHook(_.process(object), function(key) {
      var func = object[key]

      _.prototype[key] = function() {
        let deco = [this.wrapper];
        Array.prototype.push.apply(deco, arguments)
        return model(this, func.apply(this, deco))
      }
    })
  }

  _.mixin(_)
  root._ = _

})(this)