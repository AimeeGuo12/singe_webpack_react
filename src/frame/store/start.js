import React from 'react';
import ReactDom from 'react-dom';

import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import reduxAsync from './redux-async';

import {
	Provider
} from 'react-redux';
import reducer from '../../redux/reducer';

function start({root, component, model}) {
    let models = {};
    // Object.prototype.toString.call()用来判断数据类型
    let modelType = Object.prototype.toString.call(model);
    if (modelType === '[object, Object]') {
        models = {[model.name]: modal}
    } else if (modelType === '[object, Array]') {
        model.map((item) => {
            models[item.name] = item
        })
    }

    // 整合reducer
    let reducers = {};
    // 异步方法
    let asyncMethods = {};

    Object.keys(models).map((item) => {
        // 存储异步方法
        asyncMethods[item] = models[item].async;
        reducers[item] = (state = models[item].data, action) => {
            let actionType = action.type;
            // 过滤掉redux自身内部的action
            let ifHasPlaceName = actionType.indexOf('/') >= 0 && actionType.indexOf('@redux') < 0;
            let fieldName = actionType.split('/')[0];
            let methodName = actionType.split('/')[1];

            let syncMethod = null;

            if (fieldName !== item) {
                return state;
            }

            if (ifHasPlaceName) {
                syncMethod = models[fieldName].sync[methodName];
            } else {
                syncMethod =  (typeof models[item] === 'object' && models[item] !== null)
                ? models[item].sync[action.type] : null;
            }

            if(syncMethod) {
                return syncMethod(state, action.payload);
            } else {
                return state;
            }
        }
    })
    const store = createStore(combineReducers(reducers), applyMiddleware(reduxAsync(asyncMethods)));
    const Wrapper = () => {
        return <Provider store={store}>
            {component}
        </Provider>
    }
    ReactDom.render(<Wrapper/>, root)
    return store;
}
export default start;