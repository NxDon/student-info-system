import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div>
                <label>Name<input type="text" ref="name" className="inputArea"/> </label>
                <label>ID<input type="text" ref="id" className="inputArea"/> </label>
                <label>Math<input type="text" ref="math" className="inputArea"/> </label>
                <label>Chinese<input type="text" ref="chinese" className="inputArea"/> </label>
                <label>English<input type="text" ref="english" className="inputArea"/> </label>
                <label>Programming<input type="text" ref="programming" className="inputArea"/> </label>
            </div>
        )
    }
}