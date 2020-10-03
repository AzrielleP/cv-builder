import React, {Component} from 'react';
import './css/form.css';

// Import child components
import GeneralInfo  from './form-child-components/General-Info';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

                name: '',
                title: '',
                careerSummary: '',
                contact: {
                    phone: '',
                    email: '',
                    address: '',
                    website: '',
                    linkedIn: '',
                    gitHub: '',
                },
            
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleInputChange(event, category, subCategory) {
        
    //     const { name, value, className } = event.target;
    //     className === 'subCategory' ?
    //     this.setState({
    //       ...this.state,
    //       [category]: {
    //         [subCategory]: {
    //             ...this.state[category][subCategory],
    //             [name]: value,
    //         },
    //       },
    //     })
    //     : 
    //     this.setState({
    //         ...this.state,
    //         [category]: {
    //             [name]: value,
    //            [subCategory]: {
    //                ...this.state[category][subCategory]
    //            }
    //         },
            
    //     })
    // }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data'));
        if (localStorage.getItem('data')) {
          this.setState({
            name: data.name,
            title: data.title,
            careerSummary: data.careerSummary,
            contact: {
              phone: data.contact.phone,
              email: data.contact.email,
              address: data.contact.address,
              website: data.contact.website,
              linkedIn: data.contact.linkedIn,
              gitHub: data.contact.gitHub,
            },
          })
        }
        else {
          this.setState({
            name: '',
            title: '',
            careerSummary: '',
            contact: {
              phone: '',
              email: '',
              address: '',
              website: '',
              linkedIn: '',
              gitHub: '',
            }
          })
        }
      }

    handleInputChange(event) {
        
        const { name, value, className } = event.target;
        className === 'subCategory' ?
        this.setState({
          ...this.state,
          contact: {
            ...this.state.contact,
            [name]: value,
            },
        })
        : 
        this.setState({
            [name]:value,
            contact: {
                ...this.state.contact
            }
            
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.moveToOutput();
        localStorage.setItem('data', JSON.stringify(this.state));
        
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <GeneralInfo handleInputChange = {this.handleInputChange} generalInfo = {this.state} />
                <button className = "generateButton">Generate</button>
            </form>
        )
    }
}

export default Form;