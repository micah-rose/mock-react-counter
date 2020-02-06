import React, {Component} from "react";
import Moment from 'react-moment';

class CurrentDate extends Component {

  render() {
    return (
      <div class="date">
        <Moment />
      </div>
    );
  }
}

export default Moment;