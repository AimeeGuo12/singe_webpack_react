import {combineReducers} from 'redux'
import * as actionTypes from "../actions/action-type"
const defaultState = {
    a: 'sub'
}

function reducer1(state = defaultState, action){
    switch(action.type) {
        case actionTypes.ADD1: 
            // return action.data1
        default:
            // return state
    }
    return {
        ...state
    }
}
function reducer2 (state = [], action)  {
    switch(action.type) {
        case actionTypes.ADD2: 
            // return action.data2
        default:
            // return state
    }
    return {
        ...state
    }
}

const reducer = combineReducers({
    a: reducer1, 
    b: reducer2
})
export default reducer