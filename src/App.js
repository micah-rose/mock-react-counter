import React, {Component} from 'react';
import Button from './components/Button';
import './App.css';
import GoogleChart from './components/GaugeChart';
import Form from './components/Form';
import TextBox from './components/TextBox';
import Date from './components/CurrentDate';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  resetCount = () => {
    this.setState({
      count: this.state.count - this.state.count
    })
  }

  render(){
    let {count} = this.state;
    return(
      <div>
        <div className="date">
          <Date format="MMMM D, YYYY"/>
        </div>
        <div className="user-input">
          <div className="form">
            <Form />
          </div>
          <div className="textbox">
            <TextBox />
          </div>
        </div>
        <div className="gauge">
          <GoogleChart />
        </div>
        <div className="counter">
          <h2>Travelex Count:</h2>
          <p>{count}</p>
          <Button title = '+' task = { () => this.incrementCount()} />
          <Button title = '-' task = { () => this.decrementCount()} />
          <Button title = 'Reset' task = { () => this.resetCount()} />
        </div>
      </div>
    )
  }
}
