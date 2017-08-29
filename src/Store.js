import {createStore, compose,combineReducers} from 'redux';
import {reducer as PanelReducer} from './Panel';
import persistState from 'redux-localstorage';

// let reducer = combineReducers({
//     PanelReducer,AddReducer
// })
const enhancer = compose(persistState(null,{key:"studentInfo"}));//syn with localStorage
let reducer = combineReducers({
    studentInfo:PanelReducer
})


export const store = createStore(reducer,enhancer);