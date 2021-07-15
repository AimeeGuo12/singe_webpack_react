// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import countReducer from './reduce';
import {createStore, applyMiddleware} from '../GRedux/gRedux';
function countReducer(state = 0, action) {
    switch(action.type) {
        case 'ADD': 
           return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }
}
function logger({getState, dispatch}) {
    return dispatch => action => {
        // 中间件任务
        console.log(action.type + "执⾏了！");
        return dispatch(action);
    };
}

// thunk增加了处理函数型action的能⼒
// middlewares.map(middleware => middleware(midApi)) midApi是getState, dispatch
function thunk({getState, dispatch}) {
    return dispatch => action => {
        if (typeof action === "function") {
            return action(dispatch, getState);
        } else {
            return dispatch(action);
        }
    };
}
const store = createStore(countReducer, applyMiddleware(thunk, logger));
export default store;

