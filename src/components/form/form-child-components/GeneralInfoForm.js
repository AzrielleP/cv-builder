import React, { Component } from 'react';

class GeneralInfo extends Component {
  
  render() {
    const value = this.props.generalInfo;
    const handler = this.props.handleInputChange;

    return (
      <div className="category">
        <h2>General Info</h2>
        <div className = "divider">
          <div>
            <label htmlFor="name">
              <p>Full Name *</p>
            </label>
            <input
                type="text"
                name="name"
                id="name"
                value={value.generalInfo.name || ''}
                onChange= {handler}
                  
                required
              />
            <label htmlFor="title">
              <p>Job Title *</p>
              <input
                type="text"
                name="title"
                id="title"
                value={value.generalInfo.title || ''}
                onChange={handler}
                required
              />
            </label>
          </div>
          <label htmlFor="careerSummary">
            <p>Career Summary</p>
            <textarea
              id="careerSummary"
              name = "careerSummary"
              value={value.generalInfo.careerSummary || ''}
              onChange={handler}
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
                className = "subCategory"
                value={value.generalInfo.contact.address || ''}
                onChange={handler}
                required
              />
            </label>
            <label htmlFor="email">
              <p>Email Address *</p>
              <input
                type="email"
                name="email"
                id="email"
                className = "subCategory"
                value={value.generalInfo.contact.email || ''}
                onChange={handler}
                required
              />
            </label>
            <label htmlFor="phone">
              <p>Phone Number *</p>
              <input
                type="number"
                name="phone"
                id="phone"
                className = "subCategory"
                value={value.generalInfo.contact.phone || ''}
                onChange={handler}
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
                className = "subCategory"
                value={value.generalInfo.contact.website || ''}
                onChange={handler}
              />
            </label>
            <label htmlFor="linkedIn">
            <p>LinkedIn</p>
            <input
              type="text"
              name="linkedIn"
              id="linkedIn"
              className = "subCategory"
              value={value.generalInfo.contact.linkedIn || ''}
              onChange={handler}
            />
          </label>
          <label htmlFor="gitHub">
            <p>GitHub</p>
            <input
              type="text"
              name="gitHub"
              id="gitHub"
              className = "subCategory"
              value={value.generalInfo.contact.gitHub || ''}
              onChange={handler}
            />
          </label>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;