import React from 'react';

export default function GeneralInfo(props) {
  const value = props.generalInfo;
  const handler = props.handleGeneralInfoChange;

  return (
    <div className="generalInfo">
      <h2>General Info</h2>
      <div className="divider">
        <div>
          <label htmlFor="name">
            <p>Full Name *</p>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={value.name || ''}
            onChange={handler}
            required
          />
          <label htmlFor="title">
            <p>Job Title *</p>
            <input
              type="text"
              name="title"
              id="title"
              value={value.title || ''}
              onChange={handler}
              required
            />
          </label>
        </div>
        <label htmlFor="careerSummary">
          <p>Career Summary</p>
          <textarea
            id="careerSummary"
            name="careerSummary"
            value={value.careerSummary || ''}
            onChange={handler}
            rows="7"
          />
        </label>
      </div>
      <div className = "divider">
        <div>
          <label htmlFor="address">
            <p>Address *</p>
            <input
              type="text"
              name="address"
              id="address"
              className="subCategory"
              value={value.contact.address || ''}
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
              className="subCategory"
              value={value.contact.email || ''}
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
              className="subCategory"
              value={value.contact.phone || ''}
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
              className="subCategory"
              value={value.contact.website || ''}
              onChange={handler}
            />
          </label>
          <label htmlFor="linkedIn">
            <p>LinkedIn</p>
            <input
              type="text"
              name="linkedIn"
              id="linkedIn"
              className="subCategory"
              value={value.contact.linkedIn || ''}
              onChange={handler}
            />
          </label>
          <label htmlFor="gitHub">
            <p>GitHub</p>
            <input
              type="text"
              name="gitHub"
              id="gitHub"
              className="subCategory"
              value={value.contact.gitHub || ''}
              onChange={handler}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
