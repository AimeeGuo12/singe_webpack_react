/**
 * 存储状态state 
    获取状态getState 
    更新状态dispatch
    变更订阅subscribe
 */

/**
 * 
 * @param {*} reducer 
 * @param {*} enhancer  return applyMiddleware(logger, thunk)(createStore)(reducer)
 */
// 中间件就是⼀一个函数，对store.dispatch⽅方法进行改造， 
// 在发出 Action 和执⾏行行 Reducer 这两步之间，添加了其他功 能。
export function createStore(reducer, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    // 保存状态
    let currentState = undefined;
    // 回调函数
    let currentListeners = []; // 订阅

    function getState () {
        return currentState;
    }

    function dispatch (action) {
        currentState = reducer(currentState,action);
       // 监听函数是一个数组，那就循环
        // listener是回调函数 即每次更新state后，订阅过的函数就会执行一遍更新
        currentListeners.length>0 && currentListeners.map(listener => listener())
    }
    dispatch({type:'@@OOO/KKB-REDUX'})
    function subscribe (listener) {
        currentListeners.push(listener)
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}

// 中间件就是⼀一个函数，对store.dispatch⽅方法进行改造， 
// 在发出 Action 和执⾏行行 Reducer 这两步之间，添加了其他功 能。

// 使用：
// const store = createStore(counterReducer, applyMiddleware(logger, thunk));
// 中间件 核⼼心任务是实现函数序列列执⾏行行
export function applyMiddleware(...middlewares) {// enhancer(createStore)(reducer);
    return createStore => (...args) => {
        const store = createStore(...args);
        let dispatch = store.dispatch;

        const midApi = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        }
        // 使中间件可以获取状态值，派发action
        // 将无中间件的时候创建的store的信息传给每个中间件
        // 给middleware参数，比如说dispatch
        const middlewareChain = middlewares.map(middleware => middleware(midApi))
        // compose可以middlewareChain函数数组合并成⼀个函数
        dispatch = compose(...middlewareChain) (dispatch)
        return {
            ...store,
            // 覆盖上面store里的dispatch
            dispatch
        }
    }
}

export function compose(...funcs) {
    if (funcs.length === 0) {
        // 相当于 return () => {}
        return arg => arg
    }
    if (funcs.length === 1) {
        return funcs[0]
    }
     // 1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
    // 2、currentValue （数组中当前被处理的元素）
    // 3、index （当前元素在数组中的索引）
    // 4、array （调用 reduce 的数组）
    return funcs.reduce((a, b) => (...args) =>a(b(...args)))
}