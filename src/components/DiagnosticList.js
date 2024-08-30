import React from 'react';

const DiagnosticList = ({ diagnostics }) => {
  return (
    <div className="diagnostic-list">
      <h3>Diagnostic List</h3>
      <table>
        <thead>
          <tr>
            <th>Problem/Diagnosis</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {diagnostics.map((diagnosis, index) => (
            <tr key={index}>
              <td>{diagnosis.name}</td>
              <td>{diagnosis.description}</td>
              <td>{diagnosis.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosticList;
