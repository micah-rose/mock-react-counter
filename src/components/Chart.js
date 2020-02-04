import React, {Component} from 'react';
import {Bar, Line, Pie, Polar, Doughnut, Radar, Bubble} from 'react-chartjs-2';
//import GaugeChart from 'react-gauge-chart';

class Chart extends Component {

constructor(props){
    super(props);
    this.state={
        chartData: {
            labels: [
                'Daily',
                'Weekly',
                'Monthly'
            ],
            datasets:[
                {
                    label: 'Statistics',
                    data: [3, 17, 44],
                    backgroundColor: [
                        'red', 'yellow', 'green'
                    ]
                }]
        }
    }
}

    render(){
        return(
            <div className="chart">
                <Doughnut 
                    data={this.state.chartData} 
                    options={{
                        title: {
                            display: true,
                            text: 'Statistics',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;