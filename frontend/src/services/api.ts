import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3003',
    timeout: 5000,
});

export const apiCars = axios.create({
    baseURL: 'https://kenzie-kars.herokuapp.com',
   
});

