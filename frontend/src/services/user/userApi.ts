import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ILoginData } from '../../types/login/loginInterface';
import { UserRequest } from '../../types/register/registerInterface';
import { api } from '../api';

export const SessionUser = async (data:ILoginData) => {
    try {
        const response = await api.post('/login', data);
        const token = response.data.token;
        localStorage.setItem('token', token);
        toast.success('Login feito com sucesso', {autoClose: 1000});
        window.location.replace("/");
        return response.data;
    } catch (error) {
        console.error(error);
        toast.error('Falha ao efetuar login', {autoClose: 1000});
    }
};

export const createUser = async (data:UserRequest, setUser:any, setIsSuccessModalOpen:any) => {
    try {
        const response = await api.post('/user', data);
        toast.success('Cadastro realizado!', {autoClose: 1000});
        setUser(true)
        setIsSuccessModalOpen(true);
        return response.data;
    } catch (error) {
        console.error(error);
        toast.error('Falha ao efetuar criar o usuario', {autoClose: 1000});
    }
};

export const recoverUser = async (data: string) => {
    try {
        const response = await api.post('/resetPassword', data)
        const token = response.data.resetToken
        localStorage.setItem('resetToken', token);
        toast.success('E-mail derecuperação enviado!', {autoClose: 1000})
        return response.data;
    } catch (error) {
        console.error(error);
        toast.error('Falha ao enviar e-mail', {autoClose: 1000});
    }
}

export const resetPassword = async (data: string) => {

    const resetToken = localStorage.getItem('resetToken')

    try {
        const response = await api.patch(`/resetPassword/${resetToken}`, data)
        toast.success('Senha alterada com sucesso!', {autoClose: 1000})
        localStorage.clear()
        return response.data;
    } catch (error) {
        console.error(error);
        toast.error('Falha ao atualizar senha', {autoClose: 1000});
    }
}