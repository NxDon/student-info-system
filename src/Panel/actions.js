import {DELETE_GRADE} from "./actionType";

export const removeGrade = (id) => ({
    type: DELETE_GRADE,
    id: id
});

