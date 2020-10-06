import React, {Component} from 'react';
import './css/form.css';

// Import child components
import GeneralInfo  from './form-child-components/GeneralInfoForm';
import WorkExperience from './form-child-components/WorkExperience';

class Form extends Component {
  constructor(props) {
    super(props);


    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGeneralInfoChange(e) {
    const {name, value, className} = e.target;
    if (className === 'subCategory') {
      this.setState({
        ...this.state,
        generalInfo: {
          ...this.state.generalInfo,
          contact: {
            ...this.state.generalInfo.contact,
          [name] : value,
          }
        }
      })
    }
    else {
      this.setState({
        ...this.state,
        generalInfo: {
          ...this.state.generalInfo,
          [name] : value,
          contact: {
            ...this.state.generalInfo.contact
          }
        }
      })
    }
  }

  handleWorkChange(e) {
    const {name, value, className, index} = e.target;
    if (className === 'subCategory') {
      this.setState({
        ...this.state,
        workExperience: [
          ...this.state.workExperience,
          {
            ...this.state.workExperience[index],
            tasks: [
              ...this.state.workExperience[index].tasks,
              value
            ]
          },
        ]
      })
    }
    else {
      this.setState({
        ...this.state,
        workExperience: [
          ...this.state.workExperience,
          {
            ...this.state.workExperience,
            [name] : value,
            tasks: [
              ...this.state.workExperience.tasks
            ]
          },
        ]
      })
    }
  }

  handleSubmit(event) {
      event.preventDefault();
      this.props.moveToOutput();
      localStorage.setItem('data', JSON.stringify(this.state));
      
  }

  render() {
      return(
          <form onSubmit = {this.handleSubmit}>
              <GeneralInfo 
                handleGeneralInfoChange = {this.handleGeneralInfoChange} 
                
              />

              <WorkExperience
                handleWorkChange = {this.handleWorkChange}
               />

              <button className = "generateButton">Generate</button>
          </form>
      )
  }
}

export default Form;