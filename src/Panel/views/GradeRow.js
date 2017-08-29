import React from 'react';

export default ({info,onRemove}) => {
    return(
        <tr>
            <td>{info.name}</td>
            <td>{info.id}</td>
            <td>{info.math}</td>
            <td>{info.chinese}</td>
            <td>{info.english}</td>
            <td>{info.programming}</td>
            <td onClick={onRemove}>x</td>
        </tr>
    )
}