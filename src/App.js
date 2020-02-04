import React, {Component} from 'react';
import Button from './components/Button';
import './App.css';
import Chart from './components/Chart';
import GoogleChart from './components/GoogleChart';

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
        <h2>Travelex Count:</h2>
        <p>{count}</p>
        <Button title = '+' task = { () => this.incrementCount()} />
        <Button title = '-' task = { () => this.decrementCount()} />
        <Button title = 'Reset' task = { () => this.resetCount()} />
        <Chart />
        <GoogleChart />
      </div>
    )
  }
}
