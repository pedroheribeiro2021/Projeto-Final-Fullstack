import { ReactNode, createContext, useContext, useState } from "react";
import { IAnuncio } from "../types/home/homeInterface";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { IProfileContext, ProfileContext } from "./profileContexts";

export interface IHomeContext {
  openFilter: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalEdit: boolean;
  setIsModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  announcements: IAnuncio[];
  setAnnouncements: React.Dispatch<React.SetStateAction<IAnuncio[]>>;
  getAllAnnoucements: () => Promise<void>;
  createAnnouncements: (payload: any) => Promise<any>;
  getAnnoucementsByUserPublished: () => Promise<any>;
}

interface IHome {
  children: ReactNode;
}

export const HomeContext = createContext<IHomeContext>({} as IHomeContext);
export const HomeProvider = ({ children }: IHome) => {
  const [openFilter, setOpenFilter] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalEdit, setIsModalEdit] = useState(false);

  const [announcements, setAnnouncements] = useState<IAnuncio[]>([]);

  const { listAnnouncementsAdmin }: IProfileContext =
    useContext(ProfileContext);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  const getAllAnnoucements = async (): Promise<void> => {
    try {
      const { data } = await api.get("/announcement");
      setAnnouncements(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAnnoucementsByUserPublished = async () => {
    const id = localStorage.getItem("userPublished_id");
    try {
      const { data } = await api.get(`/announcement/user/${id}`);
      setAnnouncements(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const createAnnouncements = async (payload: any): Promise<any> => {
    try {
      const { data } = await api.post("/announcement", payload, {
        headers: { authorization: `Bearer ${token}` },
      });
      setAnnouncements(data);
      setIsModalOpen(false);
      listAnnouncementsAdmin(id!);
      toast.success("Anúncio criado com Sucesso");
      return data;
    } catch (error) {
      toast.error("Falha ao criar Anúncio");
    }
  };

  return (
    <HomeContext.Provider
      value={{
        openFilter,
        setOpenFilter,
        isModalOpen,
        setIsModalOpen,
        isModalEdit,
        setIsModalEdit,
        announcements,
        setAnnouncements,
        getAllAnnoucements,
        createAnnouncements,
        getAnnoucementsByUserPublished,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useContextFunction = () => {
  const contextHome = useContext(HomeContext);
  return contextHome;
};
