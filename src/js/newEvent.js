function triggerEvent(target, eventType, eventDetail) {
    // 创建
    const event = new CustomEvent(eventType, {
        detail: eventDetail  // 传递的参数
    })
    // 派发
    target.dispatchEvent(event);
}
// 监听注册
document.addEventListener('ajax-start', e=> {
    document.getElementById('whirlyThing').style.display = 'inline-block' ;
    if(e.detail.url === 'my-url') {
        console.log('拿到参数')
    }
})
document.addEventListener('ajax-end', e=> {
    document.getElementById('whirlyThing').style.display = 'none' ;
})

// 使用
function performAjaxOperation () {
    // 触发事件
    triggerEvent(document, 'ajax-start', {url: 'my-url'})
    setTimeout(() => { 
        triggerEvent(document, 'ajax-complete'); // ⇽--- 使用延迟计时器模拟 Ajax请求。开始执行时，触发ajax-start事件，一段时间过去之后，激活ajax-complete事 件。传入URL作为事件额外信息 
    }, 5000);
}
// 点击按钮开始发送请求
const button = document.getElementById('clickMe'); 
button.addEventListener('click', () => { 
    performAjaxOperation(); // ⇽--- 当单击一个按钮时，Ajax操作开始 
});



// 发布-订阅模式
function EventCenter() {
    this.handles = {}
}

ErrorEvent.prototype = {
    constructor: EventCenter,
    listen: function(type, fn) {
        if (this.handles[type] === undefined) {
            this.handles[type] = []
        }
        this.handles[type].push(fn)  //这里用push是可能会有同个类型，多个事件？
    },
    trigger: function(type, ...args) {
        const typeHandlers = this.handles[type]
        if (typeHandlers === undefined || typeHandlers.length === 0) {
            return;
        }

        // 执行
        for (let i = 0; i < typeHandlers.length; i++) {
            typeHandlers[i].apply(this, args)
        }
    },
    // 事件移除
    // handler 则代表要删除的事件处理函数
    remove: function(type, handler) {
        // 方法内部首先取得 type 类型事件的处理函数集合, 同样，这里也要判断这个集合是否存在。
        if(this.handlers[type] === undefined) {
            return;
        }
        this.handlers[type] = this.handlers[type].filter((item) => item !== handler)
    }
}


// 应用
// 将每个小伙伴都初始化为一个 EventCenter 实例，将"到达"事件定义为 arrive ，将“收到消息”事件定义为 message. 
// 小伙伴将处理 arrive 和 message 事件。

//list为要发送的人员
function sendMessage (message, list) {
    if(!Array.isArray(list)) {
        return 
    }
    // 依次触发 list 名单上每个小伙伴的 message 事件，并把 message 传递过去。
    for (let index = 0; index < list.length; index++) {
        list[index].trigger('message', message);
        
    }
} 

// 初始化三个 EventCenter
let daxiong = new EventCenter();
let xiaofu = new EventCenter();
let jingxiang = new EventCenter();

daxiong.listen('arrive', function() {
    console.log('大雄到了，给其他小伙伴发消息。')
    sendMessage('大雄：我到了。', [jingxiang, xiaofu])
})

jingxiang.listen('message', function(message) {
    console.log('静香收到消息：' + message)
    console.log('静香：我要赶紧出门了。')
  })
  
  xiaofu.listen('message', function(message) {
    console.log('小夫收到消息：' + message)
    console.log('小夫：切。')
  })

  daxiong.trigger('arrive')

// 事件移除栗子
// 假设小夫放了鸽子， 这个时候就要取消小夫的 message 事件。

daxiong.listen('arrive', function(){
    console.log('大雄到了，给其他小伙伴发消息。')
    sendMessage('大雄：我到了。', [jingxiang, xiaofu]) 
})

jingxiang.listen('message', function(message) {
    console.log('静香收到消息：' + message)
    console.log('静香：我要赶紧出门了。')
  })

  // 小夫 listen 前，将匿名函数赋值给变量 messageHandlerXf, 
  // 因为 remove 是根据函数名来移除事件处理函数的。
  const messageHandlerXf = function(message) {
    console.log('小夫收到消息：' + message)
    console.log('小夫：切。')
  }
  xiaofu.listen('message', messageHandlerXf)

  // 小夫遇到胖虎，被强行拉去打棒球。
// 注意，他要开始鸽了。
xiaofu.remove('message', messageHandlerXf)
daxiong.trigger('arrive')


