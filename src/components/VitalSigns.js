import React from 'react';

const VitalSigns = ({ vitals }) => {
  return (
    <div className="vital-signs">
      <div className="vital-sign">
        <p>Respiratory Rate</p>
        <p>{vitals?.respiratory_rate?.value} bpm</p>
        <p>{vitals?.respiratory_rate?.levels}</p>
      </div>
      <div className="vital-sign">
        <p>Temperature</p>
        <p>{vitals?.temperature?.value}°F</p>
        <p>{vitals?.temperature?.levels}</p>
      </div>
      <div className="vital-sign">
        <p>Heart Rate</p>
        <p>{vitals?.heart_rate?.value} bpm</p>
        <p>{vitals?.heart_rate?.levels}</p>
      </div>
    </div>
  );
};

export default VitalSigns;
