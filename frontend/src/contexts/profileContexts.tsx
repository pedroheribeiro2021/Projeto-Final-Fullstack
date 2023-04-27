import { ReactNode, createContext, useContext, useState } from "react";
import { IAnuncio, IUser } from "../types/home/homeInterface";
import { api } from "../services/api";
export interface IProfileContext {
  announcementsAdmin: IAnuncio[];
  setAnnouncementsAdmin: React.Dispatch<React.SetStateAction<IAnuncio[]>>;
 listAnnouncementsAdmin: (id: string) => Promise<void>;
 
}

interface IProfile {
  children: ReactNode;
}

export const ProfileContext = createContext<IProfileContext>(
  {} as IProfileContext
);
export const ProfileProvider = ({ children }: IProfile) => {
  const [announcementsAdmin, setAnnouncementsAdmin] = useState<IAnuncio[]>([]);

  

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
  }

  return (
    <ProfileContext.Provider
      value={{
        announcementsAdmin,
        setAnnouncementsAdmin,
        listAnnouncementsAdmin
        
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
