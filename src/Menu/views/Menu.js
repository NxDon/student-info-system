import React from 'react';
import {Link} from 'react-router';

const Menu = () => {
    return (
        <navbar>
            <h2>学生成绩管理系统</h2>
            <ul>
                <li><Link to="/add">添加学生成绩</Link></li>
                <li><Link to="/show">查看学生成绩</Link></li>
            </ul>
        </navbar>
    )
}
export {Menu}