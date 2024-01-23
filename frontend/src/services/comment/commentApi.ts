import { toast } from "react-toastify";
import { api } from "../api";
import { IComment } from "../../types/comment/commentInterface";

export const createComment = async (data: IComment) => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("announcement_id");

  try {
    const response = await api.post(`announcement/comments/${id}`, data, {
      headers: { Authorization: "Bearer " + token },
    });
    toast.success("Comentário enviado!", { autoClose: 1000 });
    return response.data;
  } catch (error) {
    console.error(error);
    toast.error("Falha ao enviar o comentário", { autoClose: 1000 });
  }
};
