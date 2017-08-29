import React from 'react';
import {Link} from 'react-router';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/add">Home</Link></li>
                <li><Link to="/show">About</Link></li>
            </ul>
        </div>
    )
}
export {Menu}