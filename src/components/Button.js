import React, { Component } from 'react';
import Buttons from 'react-bootstrap/Button';

export default class Button extends Component {
    render() {
        let {title, task} = this.props;
        return (
            <button onClick = { task }>
                {title}
            </button>
        )
    } 
}