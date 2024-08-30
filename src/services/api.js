import axios from 'axios';

const API_BASE_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';


export const getPatientData = () => {
    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);

    // Authenticate (dummy API)
   return fetch(`${API_BASE_URL}/auth`, {
        headers: {
            'Authorization': `Basic ${auth}`
        }
    });
}
// export const getPatientData = () => {
//     return axios.get(`${API_BASE_URL}/patients`);
// };