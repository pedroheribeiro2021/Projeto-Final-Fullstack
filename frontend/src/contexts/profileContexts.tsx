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
  setAnnouncementModalEdit: any;
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
      const announcementFiltered = data.filter((el: any) => el.id === id);
      setAnnouncementModalEdit(announcementFiltered);
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
