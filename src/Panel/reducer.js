import {DELETE_GRADE,ADD_GRADE} from "./actionType";

export default (state, action) => {
    switch (action.type) {
        case DELETE_GRADE: {
            return state.filter((eachObj) => {
                return eachObj.id !== action.id;
            })
        }
        case ADD_GRADE:{
            return [...state,action.info]//immutable
        }
        default: {
            return state;
        }
    }
}