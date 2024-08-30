import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

// Register the required components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const DiagnosisHistory = ({ history }) => {
  const data = {
    labels: history.map(record => `${record.month} ${record.year}`),
    datasets: [
      {
        label: 'Systolic',
        data: history.map(record => record.blood_pressure.systolic.value),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
      },
      {
        label: 'Diastolic',
        data: history.map(record => record.blood_pressure.diastolic.value),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        type: 'category',
        labels: history.map(record => `${record.month} ${record.year}`),
      },
    },
  };

  return (
    <div className="diagnosis-history">
      <h3>Diagnosis History</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default DiagnosisHistory;
