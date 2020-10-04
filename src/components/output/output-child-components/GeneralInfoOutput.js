import React, {Component} from 'react';

class GeneralInfo extends Component {
    constructor() {
        super();
        this.state = {
            generalInfo: {
                contact: {}
            }
        }
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data'));
        this.setState ({
            generalInfo: data.generalInfo
        })

        console.log(this.state)
    }
    render() {
        return (
            <div className = "generalInfoOutput">   
               <div className = "mainInfo">
                    <h1>{this.state.generalInfo.name}</h1>
                    <h2>{this.state.generalInfo.title}</h2>
                    <p>{this.state.generalInfo.careerSummary}</p>
               </div>
               <div className = "contact">
                   <p>
                   <i className ="fas fa-map-marker-alt"></i>
                   {this.state.generalInfo.contact.address}
                   </p>
               </div>
            </div>
            
        )
    }
}

export default GeneralInfo;