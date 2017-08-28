import React from 'react';
import {connect} from 'react-redux'
import {addGrade} from "../actions";


class Adder extends React.Component {
    constructor(props, context) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            name: '',
            id: 0,
            math: 0,
            chinese: 0,
            english: 0,
            programming: 0
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const inputValue = this.state;
        this.props.onAdd(inputValue);
        this.setState({
            name: '',
            id: 0,
            math: 0,
            chinese: 0,
            english: 0,
            programming: 0
        });

    }

    onChange(field, event) {
        let value = event.target.value;
        // switch (field) {//验证输入
        //     case 'name':{
        //
        //     }
        // }
        this.setState({
            ...this.state,
            [field]: value
        });
    }

    render() {
        const {name, id, math, chinese, english, programming} = this.state;
        return (
            <div>
                <label>Name<input type="text" className="name" value={name} onChange={(event) => {
                    this.onChange("name", event)
                }}/> </label>
                <label>ID<input type="text" className="id" value={id} onChange={(event) => {
                    this.onChange("id", event)
                }}/> </label>
                <label>Math<input type="text" className="math" value={math} onChange={(event) => {
                    this.onChange("math", event)
                }}/> </label>
                <label>Chinese<input type="text" className="chinese" value={chinese} onChange={(event) => {
                    this.onChange("chinese", event)
                }}/> </label>
                <label>English<input type="text" className="english" value={english} onChange={(event) => {
                    this.onChange("english", event)
                }}/> </label>
                <label>Programming<input type="text" className="programming" value={programming} onChange={(event) => {
                    this.onChange("programming", event)
                }}/>
                </label>
                <button type="submit">提交</button>
            </div>
        )
    }
}


const mapDispatch = (dispatch) => {
    return {
        onAdd: (stuInfo) => {
            dispatch(addGrade(stuInfo))
        }
    }
}

export default connect(null, mapDispatch)(Adder);