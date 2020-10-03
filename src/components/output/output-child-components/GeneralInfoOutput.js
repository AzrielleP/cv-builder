import React, {Component} from 'react';

class GeneralInfo extends Component {
    render() {
        return (
            <div className = "generalInfoOutput">   
               <div className = "mainInfo">
                    <h1>{this.props.data.name}</h1>
                    <h2>{this.props.data.title}</h2>
                    <p>{this.props.data.careerSummary}</p>
               </div>
               <div className = "contact">
                   <p>
                   <i className ="fas fa-map-marker-alt"></i>
                   {this.props.data.contact.address}
                   </p>
               </div>
            </div>
            
        )
    }
}

export default GeneralInfo;