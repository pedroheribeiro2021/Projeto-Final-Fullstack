import { toast } from "react-toastify";
import {api} from "../api";


export const updateAnnouncement = async (data:any) => {

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('announcement_id')

    try {
        await api.patch(`/announcement/${id}`, data, {
            headers: {Authorization:'Bearer ' + token}
        })
        .then((resp: any) => console.log(resp))
        toast.success('anúncio atualizado com sucesso!', {autoClose: 1000})
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnnouncement = async () => {

    const token = localStorage.getItem('token')
    const id = localStorage.getItem('announcement_id')

    try {
        await api.delete(`/announcement/${id}`, {
            headers: {Authorization:'Bearer ' + token}
        })
        .then((resp: any) => console.log(resp))
        toast.success('anúncio deletado com sucesso!', {autoClose: 1000})
    } catch (error) {
        console.log(error)
    }
}