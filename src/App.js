import React from 'react';

import GradeTable from './Panel';
import AddGrade from './AddGrade';

export default class extends React.Component {
    render() {
        return (
            <div>
                <AddGrade/>
                <GradeTable/>
            </div>
        )
    }
}