import {ADD_GRADE} from "./actionTypes";

export default (state,action) => {
    switch (action.type){
        case ADD_GRADE:{
            return [...state,action.info]//immutable
        }
        default:{
            return state;
        }
    }
}
