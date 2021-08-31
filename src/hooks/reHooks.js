import React, {useReducer, useContext, createContext} from 'react';
export const AppContext = createContext({});
export function Start(props) {
    let model = props.model;
    let name = model.name;
    const initState = model.data;
    function mainReducer(state=initState, action){
        let actionType = action.type;
        let moduleName = actionType.split('/')[0];
        let funcName = actionType.split('/')[1];
        let syncMethod = null
        if (moduleName === name) {
            syncMethod = model.sync[funcName];

        } else {
            throw(`dispatch 的模块名 ${moduleName} 与设置的模块名${name}不一致！`)
        }
        if (syncMethod) {
            return syncMethod(state, action.payload)
        } else {
            return state;
        }
    }
    // 这里的ab是数据
    const [emp, dispatch] = useReducer(mainReducer, initState)
    // useReducer 接受一个 reducer 函数作为参数，reducer 接受两个参数一个是 state 另一个是 action 。
    // 然后返回一个状态 count 和 dispath，count 是返回状态中的值，而 dispatch 是一个可以发布事件来更新 state 的。
    // const [count, dispath] = useReducer((state,action)=> {
    //     //...
    // }, 0);
    
    return <AppContext.Provider value={{emp, dispatch}}>
        {props.children}
    </AppContext.Provider>
}
