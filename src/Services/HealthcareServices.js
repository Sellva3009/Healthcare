import axios from 'axios'

const PatientURL = 'http://localhost:4000/appointment';

export const getPatient = () => {
    return axios.get(PatientURL)
        .then(res => res.data);
}

export const addPatient = (data) => {
    return axios.post(PatientURL, data);
}

export const updatePatient = (data) => {
    return axios.put(PatientURL + "/" + data.id, data);
}

export const deletePatient = (id) => {
    return axios.delete(PatientURL + "/" + id);
}

export const getPatienByID = (id) => {
    console.log(id)
    let userURL = PatientURL + "/" + id
    return axios.get(userURL)
        .then(res => { console.log(res.data); return res.data; });
}