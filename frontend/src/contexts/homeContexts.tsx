import { ReactNode, createContext, useContext, useState } from "react";
import { IAnuncio } from "../types/home/homeInterface";
import { api } from "../services/api";
import { toast } from "react-toastify";

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
  createAnnouncements: (payload: IAnuncio) => Promise<void>;
}

interface IHome {
  children: ReactNode;
}

// interface Announcement {
//   id: number;
//   title: string;
//   body: string;
//   date: Date;
// }

export const HomeContext = createContext<IHomeContext>({} as IHomeContext);
export const HomeProvider = ({ children }: IHome) => {
  const [openFilter, setOpenFilter] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalEdit, setIsModalEdit] = useState(false);

  const [announcements, setAnnouncements] = useState<IAnuncio[]>([]);

  const token = localStorage.getItem("token");

  const getAllAnnoucements = async (): Promise<void> => {
    try {
      const { data } = await api.get("/announcement");
      setAnnouncements(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const createAnnouncements = async (payload: IAnuncio): Promise<void> => {
    try {
      const { data } = await api.post("/annoncement", payload, {
        headers: { authorization: `Bearer ${token}` },
      });
      setAnnouncements(data);
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
