import React from 'react';
import GeneralInfo from './output-child-components/GeneralInfoOutput';

export default function Output(props) {
  return (
    <div className = "outputContainer">
      <div className = "actionsContainer">
        <button type="button" onClick={props.moveToForm}>
          Edit
        </button>
      </div>
      <div className="toPrint">
        <GeneralInfo />
      </div>
    </div>
  );
}
