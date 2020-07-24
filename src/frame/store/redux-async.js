// 标准中间件定义格式
// export default store => next => action => {}
 
// // 即
// function (store) {
//     return function(next) {
//         return function (action) {
//             return {}
//         }
//     }
// }
export default (asyncMethods) => {
    return ({dispatch, getState}) => next => action => {
        let asyncAction = null;
        let actionType = action.type;
        // 因为形式为 type: main/method
        let ifHasFieldName = actionType.indexOf('/') >=0 && actionType.indexOf('@redux') < 0 ;
        if (ifHasFieldName) {
            let fieldName = actionType.split('/')[0];
            let methodName = actionType.split('/')[1];
            asyncAction = asyncMethods[fieldName][methodName];
        } else {
            Object.keys(asyncMethods).map((key) => {
				if(action.type in asyncMethods[key]) {
					asyncAction = asyncMethods[key][action.type];
				}
			});
        }

        if(asyncAction) {  // 相对于数据请求方法时的参数
			return asyncAction(dispatch, getState, action.payload);
		}

		return next(action);
    }
}

// next()	取得一个包含匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合  dom元素的
// nextAll()	查找当前元素之后所有的同辈元素

// thunk中间件的实现
// function createThunkMiddleware(extraArgument) {
//     return ({ dispatch, getState }) => next => action => {
//       if (typeof action === 'function') {
//         return action(dispatch, getState, extraArgument);
//       }
  
//       return next(action);
//     };
//   }
  
  const thunk = createThunkMiddleware();
  thunk.withExtraArgument = createThunkMiddleware;
  
  export default thunk;
  