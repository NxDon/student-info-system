import {ADD_GRADE} from "./actionTypes";

export const addGrade = (newStudentInfo) => {
    return{
        type:ADD_GRADE,
        info:newStudentInfo
    }
}