
class EventEmitter {
  constructor() {
    this.events = {}
  }

  // emitter.addListener/on(eventName, listener) ：添加类型为 eventName 的监听事件到事件数组尾部
  on(eventName, handler) {
    // if(this.events[eventName]) {
    //   this.events[eventName].push(cb)
    // } else{
    //   this.events[eventName] = cb
    // }
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }

  addListener(eventName, handler) {
    this.on(eventName, handler)
  }

  // 添加类型为 eventName 的监听事件到事件数组头部
  prependListener(type, handler) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].unshift(handler);
  }
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => {
        // fn.apply(this, args)
        // 如果函数定义了自己的apply方法，只能使用Function.prototype.apply.call(fn, obj, args)
        // 可以简写成Reflect.apply(fn, obj, args)
        Reflect.apply(fn, this, args);
      })
    }
  }
  removeListener(type, handler) {
    if (!this.events[type]) {
      return;
    }
    this.events[type] = this.events[type].filter(item => item !== handler);
  }

  off(type, handler) {
    this.removeListener(type, handler)
  }

  // 添加类型为 eventName 的监听事件，以后只能执行一次并删除
  once(eventName, handler) {
    this.on(eventName, this._onceWrap(eventName, handler, this)) 
  }
  // 传入事件监听处理函数的时候进行封装，利用闭包的特性维护当前状态，通过fired属性值判断事件函数是否执行过
  _onceWrap(eventName, handler, target) {
    const state = {fired: false, handler, eventName, target}

    const wrapFn = this._onceWrapper.bind(state)
    state.wrapFn = wrapFn  // 这个啥用？
    return wrapFn
  }
  _onceWrapper(...args) {
    if(!this.fired) {
      this.fired = true
      Reflect.apply(this.handler, this.target, args)
      this.target.off(this.eventName, this.wrapFn)
    }
  }
}


// 测试调试代码
const ee = new EventEmitter();

// 注册所有事件
ee.once('wakeUp', (name) => { console.log(`${name} 1`); });
ee.on('eat', (name) => { console.log(`${name} 2`) });
ee.on('eat', (name) => { console.log(`${name} 3`) });
const meetingFn = (name) => { console.log(`${name} 4`) };
ee.on('work', meetingFn);
ee.on('work', (name) => { console.log(`${name} 5`) });

ee.emit('wakeUp', 'xx');
ee.emit('wakeUp', 'xx');         // 第二次没有触发
ee.emit('eat', 'xx');
ee.emit('work', 'xx');
ee.off('work', meetingFn);        // 移除事件
ee.emit('work', 'xx');           // 再次工作