import React, { useState, useEffect } from 'react';
import './css/form.css';

// Import child components
import GeneralInfo from './form-child-components/GeneralInfoForm';

export default function Form(props) {
  const [generalInfo, setGeneralInfo] = useState({ contact: {} });

  const handleGeneralInfoChange = (e) => {
    const { name, value, className } = e.target;
    if (className === 'subCategory') {
      setGeneralInfo((previous) => ({
        ...previous,
        contact: {
          ...previous.contact,
          [name]: value,
        },
      }));
    } else {
      setGeneralInfo((previous) => ({
        ...previous,
        [name]: value,
        contact: {
          ...previous.contact,
        },
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.moveToOutput();
    localStorage.setItem('data', JSON.stringify(generalInfo));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    data
      ? setGeneralInfo(data)
      : setGeneralInfo({ contact: {} });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <GeneralInfo handleGeneralInfoChange={handleGeneralInfoChange} generalInfo = {generalInfo} />

      <button className="generateButton">Generate</button>
    </form>
  );
}