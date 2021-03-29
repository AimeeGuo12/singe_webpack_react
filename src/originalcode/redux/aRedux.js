

// redux中store中存在的主要方法有三个 
// store.getState  store.dispatch, store.subscribe
// getState,
// dispatch,
// subscribe

/**
 * 
 * @param {*} reducer 
 * @param {*} enhancer  return applyMiddleware(logger, thunk)(createStore)(reducer)
 */
export function createStore(reducer, enhancer) {
    if (enhancer){
        // 不是很懂这里
        return enhancer(createStore)(reducer);
    }
    let currentState = undefined;
    let currentListeners = []; // 订阅

    function getState() {
        return currentState;
    }

    /**
     * 使用方式 dispatch(action)
     * action 为对象或者函数？
     */
    function dispatch(action) {
        currentState = reducer(currentState, action);
        // 监听函数是一个数组，那就循环
        // listener是回调函数 即每次更新state后，订阅过的函数就会执行一遍更新
        currentListeners.length>0 && currentListeners.map(listener => listener())
    }
    // 订阅 可以多次订阅
    function subscribe (listener) {
        // 每次订阅 把回调放入回调数组
        currentListeners.push(listener)
    }
     // 取值的时候，注意一定要保证不和项目中的会重复
    dispatch({type: "@INIT/REDUX-KKB"});
    return {
        getState,
        dispatch,
        subscribe
    }
}
// Redux只是个纯粹的状态管理理器器，默认只支持同步，
// 实现异 步任务 ⽐比如延迟，⽹网络请求，需要中间件的支持，⽐比如我们 
// 试⽤用最简单的redux-thunk和redux-logger 。


// 中间件就是⼀一个函数，对store.dispatch⽅方法进行改造， 
// 在发出 Action 和执⾏行行 Reducer 这两步之间，添加了其他功 能。

// 使用：
// const store = createStore(counterReducer, applyMiddleware(logger, thunk));
// 中间件 核⼼心任务是实现函数序列列执⾏行行
export function applyMiddleware(...middlewares) { // enhancer(createStore)(reducer);
    return createStore => (...args) => {
        console.log('args............', ...args)
        const store = createStore(...args);
        let dispatch = store.dispatch;
        const middleApi = {
            getState: store.getState,
            dispatch
        };
        // 给middleware参数，比如说dispatch
        console.log('middlewares', middlewares)
        const middlewareChain = middlewares.map(middleware => // 返回的是数组
            middleware(middleApi));
        console.log('middlewareChain',middlewareChain)
        dispatch = compose(...middlewareChain)(dispatch);
        return {
            ...store,
            // 覆盖上面store里的dispatch
            dispatch
        }
    }
}

function compose(...funcs) {
    if(funcs.length === 0) {
        return args => args;
        // 相当于 return () => {}
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    // 1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    // 2、currentValue （数组中当前被处理的元素）
    // 3、index （当前元素在数组中的索引）
    // 4、array （调用 reduce 的数组）
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
} 


// 中间件主要是处理dispatch
export function applyMiddleware2(...middlewares) { // enhancer(createStore)(reducer);  enhancer就表示applyMiddleware(...middlewares)
    return createStore => {  // 返回值是一个函数，把createStore这个函数当作参数
        return (...args) => { // 这个...args是指使用的reducer
            console.log('args............', ...args)
            const store = createStore(...args); // 不使用中间件的时候创建的store
            let dispatch = store.dispatch;
            const middleApi = {
                getState: store.getState,
                dispatch
            };
            // 给middleware参数，比如说dispatch
            const middlewareChain = middlewares.map(middleware => {// 返回的是数组
                middleware(middleApi) // 将无中间件的时候创建的store的信息传给每个中间件
            });
            dispatch = compose(...middlewareChain)(dispatch);  // 已经处理过store的中间件处理dispatch并得到最终的dispatch
            return {
                ...store,
                // 覆盖上面store里的dispatch
                dispatch
            }
        }
    }

}