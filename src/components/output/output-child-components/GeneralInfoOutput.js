import React, { useState, useEffect } from 'react';

export default function GeneralInfo() {
  const [generalInfoData, setGeneralInfoData] = useState({ contact: {} });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    data ? setGeneralInfoData(data) : setGeneralInfoData({ contact: {} });
  }, []);

  // Conditionally render LinkedIn, GitHub, and website details.
  const renderLinkedIn = () => {
    if (generalInfoData.contact.linkedIn) {
      return (
        <p>
          <i className="fab fa-linkedin"></i>
          {generalInfoData.contact.linkedIn}
        </p>
      );
    }
  };

  const renderGitHub = () => {
    if (generalInfoData.contact.gitHub) {
      return (
        <p>
          <i className="fab fa-github"></i>
          {generalInfoData.contact.gitHub}
        </p>
      );
    }
  };

  const renderWebsite = () => {
    if (generalInfoData.contact.website) {
      return (
        <p>
          <i className="fas fa-globe"></i>
          {generalInfoData.contact.website}
        </p>
      );
    }
  };

  return (
    <div className="generalInfoOutput">
      <div className="mainInfo">
        <h1>{generalInfoData.name}</h1>
        <h2>{generalInfoData.title}</h2>
        <p>{generalInfoData.careerSummary}</p>
      </div>
      <div className="contact">
        <p>
          <i className="fas fa-map-marker-alt"></i>
          {generalInfoData.contact.address}
        </p>
        <p>
          <i className="fas fa-phone-alt"></i>
          {generalInfoData.contact.phone}
        </p>
        <p>
          <i className="far fa-envelope"></i>
          {generalInfoData.contact.email}
        </p>
        {renderLinkedIn()}
        {renderWebsite()}
        {renderGitHub()}
      </div>
    </div>
  );
}
