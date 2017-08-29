import {DELETE_GRADE, ADD_GRADE} from "./actionType";

export const removeGrade = (id) => ({
    type: DELETE_GRADE,
    id: id
});


export const addGrade = (newStudentInfo) => {
    return {
        type: ADD_GRADE,
        info: newStudentInfo
    }
}