import React, {Component} from 'react';
import {Bar, Line, Pie, Polar, Doughnut} from 'react-chartjs-2';

class Chart extends Component {

constructor(){
    super(props);
}

    render(){
        return(
            <div className="chart">
                <Bar 
                    data={data} 
                   //width={100}
                    //height={50} 
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default Chart;