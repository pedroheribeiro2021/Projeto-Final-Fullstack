import { ReactNode, createContext, useContext, useState } from "react";
import { IAnuncio } from "../types/home/homeInterface";
import { api } from "../services/api";
import { toast } from "react-toastify";

export interface IProfileContext {
    announcementsAdmin: IAnuncio[];
    setAnnouncementsAdmin: React.Dispatch<React.SetStateAction<IAnuncio[]>>;
    listAnnouncementsAdmin: (id:string)=>Promise<void>;
}

interface IProfile {
  children: ReactNode;
}



export const ProfileContext = createContext<IProfileContext>({} as IProfileContext);
export const ProfileProvider = ({ children }: IProfile) => {
    
    const [announcementsAdmin, setAnnouncementsAdmin] = useState<IAnuncio[]>([]);

    const token = localStorage.getItem("token");
    
    const listAnnouncementsAdmin = async (id:string): Promise<void> => {
        try {
        const { data } = await api.get(`/annoncement/user/${id}`, {
            headers: { authorization: `Bearer ${token}` },
        });
        setAnnouncementsAdmin(data)
        return data;
        } catch (error) {
        toast.error("Falha ao criar Anúncio");
        }
    };

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
