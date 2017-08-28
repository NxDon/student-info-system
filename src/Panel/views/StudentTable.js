import React from 'react';

import GradeRow from './GradeRow.js';

export default class StudentTable extends React.Component {
    render() {
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
                    this.props.StudentList.map((eachStu) => {
                        return <GradeRow info={eachStu}/>
                    })
                }
                </tbody>
            </table>
        )
    }
}