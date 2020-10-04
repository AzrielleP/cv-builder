import React, {Component} from 'react';
import './css/form.css';

// Import child components
import GeneralInfo  from './form-child-components/GeneralInfoForm';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        contact: {
        },
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // handleInputChange(e, category, subCategory) {
  //   const { name, value, className } = e.target;
  //   if (className === 'subCategory') {
  //     this.setState({
  //       ...this.state,
  //       [category]: {
  //         ...this.state[category],
  //         [subCategory]: {
  //           ...this.state[category][subCategory],
  //           [name]: value,
  //         },
  //       }
  //     })
  //   }
  //   else {
  //     this.setState({
  //       ...this.state,
  //       [category]: {
  //         [name]:value,
  //         ...this.state[category],
  //         [subCategory]: {
  //           ...this.state[category][subCategory]
  //         }
  //       } 
  //     })
  //   }
  // }

  handleInputChange(e) {
    const {name, value, className} = e.target;
    if (className === 'subCategory') {
      this.setState({
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

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      this.setState({
        generalInfo: data.generalInfo
      })
    }
    else {
      this.setState({
        generalInfo: {
          contact: {}
        }
      })
    }
  }

  handleSubmit(event) {
      event.preventDefault();
      this.props.moveToOutput();
      localStorage.setItem('data', JSON.stringify(this.state));
      
  }

  render() {
    console.log(this.state)
      return(
          <form onSubmit = {this.handleSubmit}>
              <GeneralInfo 
              handleInputChange = {this.handleInputChange} 
              generalInfo = {this.state} />
              <button className = "generateButton">Generate</button>
          </form>
      )
  }
}

export default Form;