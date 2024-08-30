import React from 'react';

const LabResults = ({ labResults }) => {
  return (
    <div className="lab-results">
      <h3>Lab Results</h3>
      <ul>
        {labResults.map((result, index) => (
          <li key={index}>
            {result}
            <button className="download-btn">Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
