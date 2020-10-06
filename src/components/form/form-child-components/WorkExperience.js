import React, { Component } from 'react';

class WorkExperience extends Component {
  constructor() {
    super();
    this.state = {
        workExperience: [
            {
                tasks: []
            }
        ]
    }

    this.createFilledForm = this.createFilledForm.bind(this);
    this.createEmptyForm = this.createEmptyForm.bind(this);
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data.workExperience) {
      this.setState({
        workExperience: data.workExperience
      });
    } else {
      this.setState({
        workExperience: [
            {
                tasks: []
            }
        ]
      });
    }
  }

  createFilledForm(data, handler) {
    data.map((item, index) => {
      return (
        <div className="company" key = {index}>
          <p>Company {data.findIndex(item) + 1}</p>
          <label htmlFor="jobTitle">
            <p>Job Title</p>
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={item.jobTitle}
            onChange={handler}
            required
          />
          <label htmlFor="companyName">
            <p>Company Name</p>
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={item.companyName}
            onChange={handler}
            required
          />
          <label htmlFor="companyAddress">
            <p>Company Address</p>
          </label>
          <input
            type="text"
            name="companyAddress"
            id="companyAddress"
            value={item.companyAddress}
            onChange={handler}
            required
          />
          <label htmlFor="period">
            <p>Period</p>
          </label>
          <input
            type="text"
            name="period"
            id="period"
            value={item.period}
            onChange={handler}
            required
          />
          <label htmlFor="tasks">
            <p>Tasks and Achievements</p>
          </label>
          {item.tasks.map((item) => {
            return (
              <input
                type="text"
                name="companyAddress"
                id="name"
                value={item}
                onChange={handler}
                required
              />
            );
          })}
        </div>
      );
    });
  }

  createEmptyForm(data, handler) {
    return (
      <div className="companyNumber">
        <p>Company 1</p>
        <label htmlFor="jobTitle">
          <p>Job Title</p>
        </label>
        <input
          type="text"
          name="jobTitle"
          id="jobTitle"
          index = '0'
          value= {data.jobTitle || ''}
          onChange={handler}
          required
        />
        <label htmlFor="companyName">
          <p>Company Name</p>
        </label>
        <input
          type="text"
          name="companyName"
          id="companyName"
          value={data[0].companyName || ''}
          onChange={handler}
          index = '0'
          required
        />
        <label htmlFor="companyAddress">
          <p>Company Address</p>
        </label>
        <input
          type="text"
          name="companyAddress"
          id="companyAddress"
          value={data[0].companyAddress || ''}
          onChange={handler}
          index = '0'
          required
        />
        <label htmlFor="period">
          <p>Period</p>
        </label>
        <input
          type="text"
          name="period"
          id="period"
          value={data[0].period || ''}
          onChange={handler}
          index = '0'
          required
        />
        <label htmlFor="tasks">
          <p>Tasks and Achievements</p>
        </label>
        <input
          type="text"
          name="companyAddress"
          id="name"
          value={data[0].tasks[0] || ''}
          className = "subCategory"
          onChange={handler}
          index = '0'
          required
        />
        ;
      </div>
    );
  }
  render() {
    const data = this.state.workExperience;
    const handler = this.props.handleWorkChange;
    console.log(data)

    return (
      <div className="workExperience">
        <h2>Work Experience</h2>
        {this.createEmptyForm(data,handler)}
      </div>
    );
  }
}

export default WorkExperience;
