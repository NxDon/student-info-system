import React from 'react';
import {Table} from 'react-bootstrap';

import StudentGrade from './StudentGrade';

//this.props.studentList : Array[{
// name:String,id:Number,chinese:Number,
// english:Number,programming:Number
// }]
export default class StudentInfo extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <Table striped bordered condensed hover>
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
                    this.props.studentList.map((eachStu) => {
                        return <StudentGrade name={eachStu.name}
                                             id={eachStu.id}
                                             key={eachStu.id}
                                             chinese={eachStu.chinese}
                                             english={eachStu.english}
                                             math={eachStu.math}
                                             programming={eachStu.programming}
                        />
                    })
                }
                </tbody>
            </Table>
        )
    }
}