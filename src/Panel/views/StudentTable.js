import React from 'react';

import GradeRow from './GradeRow.js';
import {connect} from 'react-redux'

import {removeGrade} from '../actions';

const StudentTable = ({studentList, onRemove}) => {
    console.log(studentList);
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Math</th>
                <th>Chinese</th>
                <th>English</th>
                <th>Programming</th>
            </tr>
            </thead>
            <tbody>
            {
                studentList.map((eachStu) => {
                    return <GradeRow key={eachStu.id} info={eachStu} onRemove={() => onRemove(eachStu.id)
                    }/>
                })
            }
            </tbody>
        </table>
    )
};


const mapState = (state) => {
    return {
        studentList: state
    };
};

const mapDispatch = (dispatch) => {
    return {
        onRemove: (id) => {
            dispatch(removeGrade(id));
        }
    }
};

export default connect(mapState, mapDispatch)(StudentTable)