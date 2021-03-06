import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from './components/Button';
import GoogleChart from './components/GaugeChart';
import Form from './components/Form';
import TextBox from './components/TextBox';
import Date from './components/CurrentDate';
import StatSlider from './components/Slider';

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
        <h1>Associate Name</h1>
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
        <div className="slider">
          <StatSlider />
        </div>
        <div className="gauge">
          <GoogleChart />
        </div>

        <div className="counter">
          <h2>Travelex Count:</h2>
          <p>{count}</p>
          <Buttons title = '+' task = { () => this.incrementCount()} />
          <Buttons title = '-' task = { () => this.decrementCount()} />
          <Buttons title = 'Reset' task = { () => this.resetCount()} />
        </div>      
      </div>
    )
  }
}
