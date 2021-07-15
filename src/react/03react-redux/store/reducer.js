
import {ADD, MINUS} from './actions';
let defaultState = {
    num: 1
}
export default function(state = defaultState, action) {
    switch(action.type){
        case ADD:
            return {
                ...state, 
                num: state.num + 1
            };
        case MINUS:
            return {
                ...state, 
                num: state.num - 1
            };
        default: 
            return {...state};
    }
}