import React from 'react';
import StudentInfo from './StudentInfo';

var mockedData = [
    {
        name:"duan",
        id:1,
        math:99,
        chinese:99,
        english:123,
        programming:123,
    }, {
        name:"duan1",
        id:2,
        math:99,
        chinese:99,
        english:123,
        programming:123,
    },{
        name:"duan2",
        id:3,
        math:99,
        chinese:99,
        english:123,
        programming:123,
    },

]

export default class App extends React.Component{
    render(){
        return(
            <StudentInfo studentList={mockedData}/>
        )
    }
}