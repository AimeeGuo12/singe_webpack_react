class PubSub{
    constructor(){
        this.listener={}
    }

    subscribe(listen, callback){
        if(this.listener[listen]){
            this.listener[listen].push(callback)
        }else{
            // 没人订阅过，就建一个数组[callback]，回调放进去
            this.listener[listen]=[callback]
        }
    }
    publish(listen, ...args) {
        // 取出当前订阅事件的所有回调
        const subscribedEvents = this.listener[listen];
        if(subscribedEvents && subscribedEvents.length) {
            subscribedEvents.forEach(callback => {
                callback.call(this, ...args)
            })
        }
    }
    unsubScribe(listen, callback) {
        const subscribedEvents = this.listener[listen];
        if(subscribedEvents && subscribedEvents.length) {
            this.listener[listen] = this.listener[listen].filter(cb => cb !== callback)
        }
    }
}

const pubSub = new PubSub();
pubSub.subscribe('event1', () => {});    // 注册事件
pubSub.publish('event1');                // 发布事件