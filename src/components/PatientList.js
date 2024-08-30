import React, { useState, useEffect } from 'react';
import { getPatientData } from '../services/api';

const PatientList = ({ onSelectPatient }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatientData().then((res)=> {

        return res.json();
       
    }).then((data)=> {
        console.log("data::", data);
        const jessicaData = data.find((user)=> user.name === "Jessica Taylor")
        setPatients(data);

    })

  }, []);

  return (
    <aside>
      <h2>Patients</h2>
      <ul>
      <div className="patient-list">
      {patients.map((patient, index) => (
        <div key={index} className="patient-item" onClick={() => onSelectPatient(patient)}>
          <img src={patient.profile_picture} alt={patient.name} className="patient-img" />
          <div className="patient-info">
            <p>{patient.name}</p>
            <p>{patient.gender}, {patient.age}</p>
          </div>
        </div>
      ))}
    </div>
      </ul>
    </aside>
  );
};

export default PatientList;