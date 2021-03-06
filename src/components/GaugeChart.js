
import React, {Component} from "react";
import Charts from "react-google-charts";

const options = {
  width: 500,
  height: 620,
  redFrom: 0,
  redTo: 50,
  yellowFrom: 50,
  yellowTo: 65,
  greenFrom: 65,
  greenTo: 100,
  minorTicks: 5
};

const getRandomNumber = () => {
  return Math.random() * 100;
};

class GaugeChart extends Component {
  state = {
    //networkSpeed: 1,
    memory: 80,
    //cpu: 55
  };
  intervalID = null;
  getData = () => {
    return [
      ["Label", "Value"],
      ["Travelex", this.state.memory],
      //["Resort Credits", this.state.cpu],
      //["Marketing Transfers", this.state.networkSpeed]
    ];
  };


  componentWillUnmount() {
    if (this.intervalID === null) return;
    clearInterval(this.intervalID);
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState(state => {
        return {
          ...state,
          //networkSpeed: getRandomNumber(),
          //cpu: getRandomNumber(),
          memory: getRandomNumber()
        };
      });
    }, 3000);
  }


  render() {
    // console.log(this.getData());
    return (
      <div className="chart-app">
        <Charts
          chartType="Gauge"
          width="100%"
          height="400px"
          data={this.getData()}
          options={options}
        />
      </div>
    );
  }
}

export default GaugeChart;