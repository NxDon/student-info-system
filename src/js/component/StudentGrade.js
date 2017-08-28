import React from 'react';

export default ({name,id,math,chinese,english,programming}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{id}</td>
            <td>{math}</td>
            <td>{chinese}</td>
            <td>{english}</td>
            <td>{programming}</td>
        </tr>

    )

}