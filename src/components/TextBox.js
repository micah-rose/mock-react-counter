import React, {Component} from 'react';
import {TextBoxComponent} from '@syncfusion/ej2-react-inputs';

class TextBox extends Component {

    render(){
        return(
            <div className="notes">
                <TextBoxComponent 
                multiline={true} 
                placeholder='Notes'
                width={300}
                height={300} />
            </div>
        )
    }
}

export default TextBox;