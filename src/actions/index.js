import {ADD1, ADD2} from './action-type';

const add1 = (data) => {
    ({
        type: ADD1, data: data
    })
}

const add2 = () => {
    ({
        type: ADD2, data1: name
    })
}
//异步action，就是指action的值为函数，异步action中一般都会调用同步action
//异步action不是必须要使用的，我们可以在组件中调用dispatch的时候，在异步回调中调用同步action，当然也可以在异步action返回的函数体内，写在异步回调内调用同步action
//异步action不是必须要写的，完全可以在等待异步任务有结果之后再去分发同步action

const addNameAsync = (name) =>{
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(createIncrementAction(name))
        },2000)
    }
    return dispatch =>{
        setTimeout(()=>{
            dispatch(addNameCreater(name))
        },2000);
    }
}

function createIncrementAction(data){
    return {
        type: INCREMENT,
        data
    }
}
export {
    add1,
    add2,
    addNameAsync
}