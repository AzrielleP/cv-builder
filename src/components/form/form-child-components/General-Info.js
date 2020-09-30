import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor() {
    super();
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
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, className } = event.target;
    className === 'contact' ?
    this.setState({
      ...this.state,
      contact: {
        ...this.state.contact,
        [name]: value,
      }
    })
    : 
    this.setState({
        [name]: value,
        contact: {
        ...this.state.contact
        }
      })
  }

  render() {
    return (
      <div className="category">
        <h2>General Info</h2>
        <div>
          <div>
            <label htmlFor="name">
              <p>Full Name *</p>
            </label>
            <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            <label htmlFor="title">
              <p>Job Title *</p>
              <input
                type="text"
                name="title"
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <label htmlFor="careerSummary">
            <p>Career Summary</p>
            <textarea
              id="careerSummary"
              name = "careerSummary"
              value={this.state.careerSummary}
              onChange={this.handleChange}
              rows = "7"
            />
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="address">
              <p>Address *</p>
              <input
                type="text"
                name="address"
                id="address"
                className = "contact"
                value={this.state.contact.address}
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="email">
              <p>Email Address *</p>
              <input
                type="email"
                name="email"
                id="email"
                className = "contact"
                value={this.state.contact.email}
                onChange={this.handleChange}
                required
              />
            </label>
            <label htmlFor="phone">
              <p>Phone Number *</p>
              <input
                type="number"
                name="phone"
                id="phone"
                className = "contact"
                value={this.state.contact.phone}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="website">
              <p>Website</p>
              <input
                type="text"
                name="website"
                id="website"
                className = "contact"
                value={this.state.contact.website}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="linkedIn">
            <p>LinkedIn</p>
            <input
              type="text"
              name="linkedIn"
              id="linkedIn"
              className = "contact"
              value={this.state.contact.linkedIn}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="gitHub">
            <p>GitHub</p>
            <input
              type="text"
              name="gitHub"
              id="gitHub"
              className = "contact"
              value={this.state.contact.gitHub}
              onChange={this.handleChange}
            />
          </label>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
