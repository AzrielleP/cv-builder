import React, {Component} from 'react';
import GeneralInfo from './output-child-components/GeneralInfoOutput';

class Output extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                contact: {}
            }
        }
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data'));
        this.setState ({
            data
        })

        console.log(this.state)
    }

    render() {
        
        return(
                <div>
                    <div>
                        Edit
                    </div>
                    <div className = "toPrint">
                        <GeneralInfo data = {this.state.data} />
                    </div>
                </div>

            
        )
    }
}

export default Output;