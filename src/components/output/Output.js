import React, {Component} from 'react';
import GeneralInfo from './output-child-components/GeneralInfoOutput';

class Output extends Component {
    

    render() {
        
        return(
                <div>
                    <div>
                        <button type = "button" onClick = {this.props.moveToForm}>Edit</button>
                    </div>
                    <div className = "toPrint">
                        <GeneralInfo />
                    </div>
                </div>

            
        )
    }
}

export default Output;