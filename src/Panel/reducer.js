import {DELETE_GRADE} from "./actionType";

export default (state, action) => {
    switch (action.type) {
        case DELETE_GRADE: {
            return state.filter((eachObj) => {
                return eachObj.id !== id
            })
        }
        default: {
            return state;
        }
    }
}