import React, {Component} from 'react';

class Output extends Component {
    generalInfoState = () => {
        JSON.parse(localStorage.getItem('generalInfo'));
    }

    render() {
        return(
            <main>
                <div>
                    {this.generalInfoState.name}
                    {console.log(this.generalInfoState.name)}
                </div>

            </main>
        )
    }
}

export default Output;