import React, {Component} from 'react';
import './css/form.css';

// Import child components
import GeneralInfo  from './form-child-components/General-Info';

class Form extends Component {

    render() {
        return(
            <form>
                <GeneralInfo />
                <button className = "generateButton">Generate</button>
            </form>
        )
    }
}

export default Form;