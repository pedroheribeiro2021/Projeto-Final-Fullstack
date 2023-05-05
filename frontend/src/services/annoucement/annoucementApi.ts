import { toast } from "react-toastify";
import {api} from "../api";
import { AxiosResponse } from "axios";

// interface Announcement {
//     id: number;
//     title: string;
//     body: string;
//     date: Date;
// }

// export const getAllAnnoucements = async (): Promise<any> => {
//     try {
//         const response:AxiosResponse<Announcement[]> = await api.get('/announcement');
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

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