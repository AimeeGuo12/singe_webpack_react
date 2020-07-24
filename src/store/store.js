import {createStore, applyMiddleware} from 'redux';
import reducer from '../redux/reducer.js';
import thunk from 'redux-thunk';
import { defaults } from 'autoprefixer';
const store = createStore(reducer, applyMiddleware(thunk))
export default store;