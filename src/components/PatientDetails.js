import React from 'react';

const PatientDetails = ({ patient }) => {
  return (
    <div className="patient-details">
      <img src={patient.profile_picture} alt="Profile" className="patient-profile-img" />
      <h2>{patient.name}</h2>
      <p>Date of Birth: {patient.date_of_birth}</p>
      <p>Gender: {patient.gender}</p>
      <p>Contact Info: {patient.phone_number}</p>
      <p>Emergency Contact: {patient.emergency_contact}</p>
      <p>Insurance Provider: {patient.insurance_type}</p>
      <button className="show-all-info">Show All Information</button>
    </div>
  );
};

export default PatientDetails;
