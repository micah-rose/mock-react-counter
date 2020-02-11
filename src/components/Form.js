import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

import '../App.css';

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
                <Button className="submit-btn" variant="info" type='submit' size="lg">Submit</Button>
            </form>           
        );
    }
}

export default Form;