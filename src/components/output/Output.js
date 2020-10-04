import React, {Component} from 'react';
import GeneralInfo from './output-child-components/GeneralInfoOutput';

class Output extends Component {
    

    render() {
        
        return(
                <div>
                    <div>
                        Edit
                    </div>
                    <div className = "toPrint">
                        <GeneralInfo />
                    </div>
                </div>

            
        )
    }
}

export default Output;