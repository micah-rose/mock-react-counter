import React, {Component} from 'react';
import Button from './Button.js';
import Buttons from 'react-bootstrap/Button';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('Policy submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label className = 'eid'>
                    EID:
                    <input type="text" value={this.state.value} placeholder='Enter your EID' onChange={this.handleChange} />
                </label>
                <br></br>
                <label className='policy-num'>
                    Policy Number: 
                    <input type="text" value={this.state.value} placeholder= 'Enter Policy #' onChange={this.handleChange} />
                </label>
                <Button title="Submit" variant="info" type='submit'/>
            </form>

            
        );
    }
}

export default Form;