import React from 'react';

import GradeTable from './Panel';
import AddGrade from './AddGrade';

var mockData = [{
    name: 'Duan',
    id: 1,
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
    id: 1,
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
},];

export default class extends React.Component {
    render() {
        return (
            <div>
                <AddGrade/>
                <GradeTable StudentList={mockData}/>
            </div>
        )
    }
}