import { ReactNode, createContext, useContext, useState } from "react";
import { IAnuncio } from "../types/home/homeInterface";
import { api, apiCars } from "../services/api";
import { IUser } from "../types/home/homeInterface";
import { IComment } from "../types/comment/commentInterface";
import { toast } from "react-toastify";

export interface IProfileContext {
  announcementsAdmin: IAnuncio[];
  setAnnouncementsAdmin: React.Dispatch<React.SetStateAction<IAnuncio[]>>;
  listAnnouncementsAdmin: (id: string) => Promise<void>;
  brandCreate: any[];
  setBrandCreate: React.Dispatch<React.SetStateAction<any>>;
  listBrand: () => Promise<void>;
  modelList: any[];
  setModelList: React.Dispatch<React.SetStateAction<any[]>>;
  modelInfoYear: any;
  setModelInfoYear: React.Dispatch<React.SetStateAction<any>>;
  modelInfoFuel: any;
  setModelInfoFuel: React.Dispatch<React.SetStateAction<any>>;
  modelInfoFuelText: any;
  setModelInfoFuelText: React.Dispatch<React.SetStateAction<any>>;
  modelInfoFipePrice: any;
  setModelInfoFipePrice: React.Dispatch<React.SetStateAction<any>>;
  listCars: (brand: string) => Promise<void>;
  getModelInfo: (brand: string, model: string) => Promise<void>;
  comments: any[];
  setComments: React.Dispatch<React.SetStateAction<any[]>>;
  userLogged: IUser | null;
  setUserLogged: React.Dispatch<React.SetStateAction<IUser | null>>;
  getUserLogged: (id: string) => Promise<void>;
  getComments: () => Promise<void>;
  createComment: (data: IComment) => Promise<void>;
  getAnnouncementId: (id: string) => Promise<void>;
  announcementModalEdit: any;
  setAnnouncementModalEdit: React.Dispatch<React.SetStateAction<any>>;
  announcementModalEditFuel: any;
  setAnnouncementModalEditFuel: React.Dispatch<React.SetStateAction<any>>;
  updateComment: (data: IComment, id: string) => Promise<void>;
  deleteComment: (id: string) => Promise<void>;
  timePastComment: (time: any) => string | undefined;
}

interface IProfile {
  children: ReactNode;
}

export const ProfileContext = createContext<IProfileContext>(
  {} as IProfileContext
);
export const ProfileProvider = ({ children }: IProfile) => {
  const [announcementsAdmin, setAnnouncementsAdmin] = useState<IAnuncio[]>([]);
  const [comments, setComments] = useState<any>([]);

  const [brandCreate, setBrandCreate] = useState<any>([]);

  const [modelList, setModelList] = useState<any>([]);

  const [modelInfoYear, setModelInfoYear] = useState<any>();
  const [modelInfoFuel, setModelInfoFuel] = useState<any>();
  const [modelInfoFuelText, setModelInfoFuelText] = useState<any>();
  const [modelInfoFipePrice, setModelInfoFipePrice] = useState<any>();

  const [announcementModalEdit, setAnnouncementModalEdit] = useState<any>();
  const [announcementModalEditFuel, setAnnouncementModalEditFuel] =
    useState<any>();

  const [userLogged, setUserLogged] = useState<IUser | null>(null);

  const token = localStorage.getItem("token");

  const listAnnouncementsAdmin = async (id: string): Promise<void> => {
    try {
      const { data } = await api.get(`/announcement/user/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      setAnnouncementsAdmin(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAnnouncementId = async (id: string) => {
    try {
      const { data } = await api.get(`/announcement`, {
        headers: { authorization: `Bearer ${token}` },
      });
      const announcementFiltered = data.find((el: any) => el.id === id);
      setAnnouncementModalEdit(announcementFiltered);
      if (announcementFiltered.fuel.fuel === "1") {
        setAnnouncementModalEditFuel("Flex");
      } else if (announcementFiltered.fuel.fuel === "2") {
        setAnnouncementModalEditFuel("Hibrido");
      } else if (announcementFiltered.fuel.fuel === "3") {
        setAnnouncementModalEditFuel("Eletrico");
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserLogged = async (id: string): Promise<void> => {
    try {
      const { data } = await api.get(`/user/${id}`);
      setUserLogged(data);
    } catch (error) {
      console.log(error);
    }
  };

  const listBrand = async (): Promise<void> => {
    try {
      const { data } = await apiCars.get(`cars/`);
      setBrandCreate(Object.keys(data));
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const listCars = async (brand: string): Promise<void> => {
    try {
      const { data } = await apiCars.get(`cars?brand=${brand}`);
      const car = data.map((el: any) => modelList.push(el));
      setModelList(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getModelInfo = async (brand: string, model: string): Promise<void> => {
    try {
      const { data } = await apiCars.get(`cars?brand=${brand}`);
      const car = data.find((el: any) => el.name === model);
      setModelInfoYear(car.year);
      setModelInfoFuel(car.fuel);
      if (car.fuel === 1) {
        setModelInfoFuelText("Flex");
      } else if (car.fuel === 2) {
        setModelInfoFuelText("Hibrido");
      } else if (car.fuel === 3) {
        setModelInfoFuelText("Eletrico");
      }
      setModelInfoFipePrice(car.value);
    } catch (error) {
      console.error(error);
    }
  };

  const getComments = async () => {
    const id = localStorage.getItem("announcement_id");
    try {
      const response = await api.get(`announcement/comments/${id}`);
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createComment = async (data: IComment) => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("announcement_id");

    try {
      const response = await api.post(`announcement/comments/${id}`, data, {
        headers: { Authorization: "Bearer " + token },
      });
      getComments();
      toast.success("Comentário enviado!", { autoClose: 1000 });
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Falha ao enviar o comentário", { autoClose: 1000 });
    }
  };

  const updateComment = async (data: IComment, id: string) => {
    const token = localStorage.getItem("token");
    // const id = localStorage.getItem("announcement_id");

    try {
      const response = await api.patch(`comments/${id}`, data, {
        headers: { Authorization: "Bearer " + token },
      });
      getComments();
      toast.success("Comentário editado!", { autoClose: 1000 });
      localStorage.removeItem('comment_id')
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Falha ao editar o comentário", { autoClose: 1000 });
    }
  };

  const deleteComment = async (id: string) => {
    const token = localStorage.getItem("token");
    // const id = localStorage.getItem("announcement_id");

    try {
      const response = await api.delete(`comments/${id}`, {
        headers: { Authorization: "Bearer " + token },
      });
      getComments();
      toast.success("Comentário deletado!", { autoClose: 1000 });
      localStorage.removeItem('comment_id')
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error("Falha ao deletar o comentário", { autoClose: 1000 });
    }
  };

  const timePastComment = (time: any) => {
    const commentTime = new Date(time);
    const now = new Date();
    const diff = now.getTime() - commentTime.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
      return `${days} dia${days === 1 ? "" : "s"}, ${hours} hora${
        hours === 1 ? "" : "s"
      }, e ${minutes} minuto${minutes === 1 ? "" : "s"} atrás.`;
    } else if (hours > 0) {
      return `${hours} hora${hours === 1 ? "" : "s"}, e ${minutes} minuto${
        minutes === 1 ? "" : "s"
      } atrás.`;
    } else if (minutes > 0) {
      return `${minutes} minuto${minutes === 1 ? "" : "s"} atrás.`;
    } else {
      return "agora";
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        announcementsAdmin,
        setAnnouncementsAdmin,
        listAnnouncementsAdmin,
        comments,
        setComments,
        brandCreate,
        setBrandCreate,
        listBrand,
        modelList,
        setModelList,
        modelInfoYear,
        setModelInfoYear,
        modelInfoFuel,
        setModelInfoFuel,
        modelInfoFuelText,
        setModelInfoFuelText,
        modelInfoFipePrice,
        setModelInfoFipePrice,
        listCars,
        getModelInfo,
        userLogged,
        setUserLogged,
        getUserLogged,
        getComments,
        createComment,
        getAnnouncementId,
        announcementModalEdit,
        setAnnouncementModalEdit,
        announcementModalEditFuel,
        setAnnouncementModalEditFuel,
        updateComment,
        deleteComment,
        timePastComment,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const contextProfile = useContext(ProfileContext);
  return contextProfile;
};
