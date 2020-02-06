import React, {Component} from "react";
import DateTime from "react-datetime";
import Moment from 'react-moment';
 
class CurrentDate extends Component {
  state = {
    todayDate: new Date().getDate()
  };
 

  render() {
    return (
      <div class="date">
        <Moment>
          {this.state.todayDate}
        </Moment>
      </div>
    );
  }
}

export default Moment;