import React from 'react';
import {connect} from 'react-redux'
import {addGrade} from "../actions";


var deepCopy= function(source) {
    var result={};
    for (var key in source) {
        result[key] = typeof source[key]==='object'? deepCoyp(source[key]): source[key];
    }
    return result;
}

class Adder extends React.Component {
    constructor(props, context) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
        console.log("onsubmit")
        event.preventDefault();
        const inputValue = this.state;
        this.props.onAdd(inputValue);
    }

    onChange(field, event) {
        let value = event.target.value;
        this.setState({
            [field]:value
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
                <button type="submit" onClick={this.onSubmit}>提交</button>
            </div>
        )
    }
}


const mapDispatch = (dispatch) => {
    return {
        onAdd: (stuInfo) => {
            console.log("adding")
            dispatch(addGrade(stuInfo))
        }
    }
}

export default connect(null, mapDispatch)(Adder);