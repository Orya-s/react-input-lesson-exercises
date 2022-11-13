import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    alertText = () => alert(`Come in ${this.state.name}, your'e ${this.state.age} - that's good enough`)

    updateName = e => {
        this.setState({name: e.target.value})
    } 
    updateAge = e => {
        this.setState({age: e.target.value})
    } 

    render() {
        return (
            <div>
                <input id="name-input" placeholder='Your name' value={this.state.name} onChange={this.updateName}/>
                <input id="age-input" placeholder='Your age' value={this.state.age} onChange={this.updateAge}/>
                <button onClick={this.alertText}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;