import React, {Component} from "react";
import DateTime from "react-datetime";
 
class Dates extends Component {
  state = {
    todayDate: new Date()
  };
 

  render() {
    return (
      <div class="date">
        <p> {this.state.todayDate}</p>
      </div>
    );
  }
}

export default DateTime;