import React, { useState } from 'react';
import Header from './components/Header';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
import DiagnosisHistory from './components/DiagnosisHistory';
import VitalSigns from './components/VitalSigns';
import LabResults from './components/LabResults';
import DiagnosticList from './components/DiagnosticList';

const App = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="App">
      <Header />
      {/* <div className="content">
        <PatientList selectPatient={setSelectedPatient} />
        {selectedPatient && (
          <div className="patient-details">
            <PatientDetails patient={selectedPatient} />
            <DiagnosisHistory data={selectedPatient.diagnosisHistory} />
            <DiagnosticList diagnostics={selectedPatient.diagnostics} />
          </div>
        )}
      </div> */}
      <div className="main-container">
     {!selectedPatient && <PatientList onSelectPatient={setSelectedPatient} />}
     {selectedPatient && <div className="content">
        <PatientDetails patient={selectedPatient} />
        <DiagnosisHistory history={selectedPatient.diagnosis_history} />
        <VitalSigns vitals={selectedPatient.vitals} />
        <DiagnosticList diagnostics={selectedPatient.diagnostic_list} />
        <LabResults labResults={selectedPatient.lab_results} />
      </div>}
    </div>
    </div>
  );
};

export default App;