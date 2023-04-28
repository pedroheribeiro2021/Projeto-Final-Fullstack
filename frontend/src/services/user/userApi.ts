import { toast } from 'react-toastify';
import { ILoginData } from '../../types/login/loginInterface';
import { UserRequest } from '../../types/register/registerInterface';
import { api } from '../api';
import { useNavigate } from 'react-router-dom';
import { IUserUpdate } from '../../types/editProfile/editProfileInterface';


export const SessionUser = async (data:ILoginData) => {

    try {
        const navigate = useNavigate();
        const response = await api.post('/login', data);
        const token = response.data.token;
        const id = response.data.id;
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        toast.success('Login feito com sucesso', {autoClose: 1000});
        return response.data && navigate('/');
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

export const SearchUserId = async () => {

    const userId = localStorage.getItem('id')

    const response = await api.get(`/user/${userId}`)
    .then((resp:any) => {
        localStorage.setItem('id_address', resp.data.address.id);
        console.log(resp.data.address)
    })
    return response;
};

export const editUser = async (data:IUserUpdate) => {

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')

    try {
        await api.patch(`/user/${id}`, data, {
            headers: {Authorization:'Bearer ' + token}
        })
        .then((resp: any) => console.log(resp))
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async () => {

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')

    try {
        await api.delete(`/user/${id}`, {
            headers: {Authorization:'Bearer ' + token}
        })
        .then((resp: any) => console.log(resp))
        localStorage.clear()
    } catch (error) {
        console.log(error)
    }
}