import { toast } from "react-toastify";
import { api } from "../api";
import { IComment } from "../../types/comment/commentInterface";
import { useProfile } from "../../contexts/profileContexts";


export const createComment = async (data:IComment) => {
//   const {announcementsAdmin, comments, setComments} = useProfile()
    
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('announcement_id')

    try {
        const response = await api.post(`announcement/comments/${id}`, data, {
            headers: {Authorization:'Bearer ' + token}
        });
        // setComments(response.data)
        toast.success('Comentário enviado!', {autoClose: 1000});
        // setUser(true)
        // setIsSuccessModalOpen(true);
        // setComments(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
        toast.error('Falha ao enviar o comentário', {autoClose: 1000});
    }
};

export const ListComment = async (id:string) => {
  const {comments, setComments} = useProfile()

    // const id = localStorage.getItem('announcement_id')

    try {
        const response = await api.get(`announcement/comments/${id}`)
        // .then((resp: any) => console.log(resp.data.comments))
        // toast.success('Comentário enviado!', {autoClose: 1000});
        // setUser(true)
        // setIsSuccessModalOpen(true);
        // console.log(response.data)
        console.log(comments)
        return response.data;
    } catch (error) {
        console.error(error);
        // toast.error('Falha ao enviar o comentário', {autoClose: 1000});
    }
};