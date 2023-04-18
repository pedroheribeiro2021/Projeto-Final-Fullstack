import axios from "axios";
import { ILoginData } from "../types/login/loginInterface";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const api = axios.create({
    baseURL: 'http://localhost:3003',
    timeout: 5000,
});

export const sessionUser = async (data:ILoginData) => {
    try {
        const response = await axios.post('/login', data);
        toast.success('Login feito com sucesso', {autoClose: 1000});
        return response.data;
    } catch (error) {
        console.error(error);
        toast.error('Falha ao efetuar login', {autoClose: 1000});
    }
};