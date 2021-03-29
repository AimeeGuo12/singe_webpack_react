// import {createStore, applyMiddleware} from '../aRedux';
// import thunk from "redux-thunk";
// import logger from "redux-logger";
import {createStore, combineReducers} from "redux";
// 定义一个reducer
function countReducer(state = 0, action) {
    switch (action.type) {
        case "ADD":
            return state + action.payload;

        case "MINUS":
            return state - action.payload;

        default:
            return state;
    }
}

// const store = createStore(countReducer, applyMiddleware(thunk, logger))
const store = createStore(
    combineReducers({
      count: countReducer
    })
  );
export default store;

// 打日志
function logger ({getState, dispatch}){
    return dispatch => action => {
        console.log(action.type + "执行了");
        return dispatch(action);
    }
}

function thunk({getState, dispatch}) {
    return dispatch => action => {
         // action 可以是对象 还可以是函数 ，那不同的形式，操作也不同
         if (typeof action === "function") {
            return action(dispatch, getState);
         } else{
            return dispatch(action);
         }
    }
}