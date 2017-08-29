import {createStore, combineReducers} from 'redux';
import {reducer as PanelReducer} from './Panel';


// let reducer = combineReducers({
//     PanelReducer,AddReducer
// })


var mockData = [{
    name: 'Duan',
    id: 0,
    math: 99,
    chinese: 99,
    english: 88,
    programming: 123
},{
    name: 'Duan',
    id: 1,
    math: 99,
    chinese: 99,
    english: 88,
    programming: 123
},{
    name: 'Duan',
    id: 2,
    math: 99,
    chinese: 99,
    english: 88,
    programming: 123
},{
    name: 'Duan',
    id: 3,
    math: 92,
    chinese: 93,
    english: 82,
    programming: 13
}];
let initValue =mockData//todo :从localStorage获取
export const store = createStore(PanelReducer,initValue);