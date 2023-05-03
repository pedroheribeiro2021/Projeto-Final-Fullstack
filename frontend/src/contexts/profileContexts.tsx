import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { IAnuncio } from "../types/home/homeInterface";
import { api, apiCars } from "../services/api";
import { ListComment } from "../services/comment/commentApi";

export interface IProfileContext {
  announcementsAdmin: IAnuncio[];
  setAnnouncementsAdmin: React.Dispatch<React.SetStateAction<IAnuncio[]>>;
  listAnnouncementsAdmin: (id: string) => Promise<void>;
  brandCreate: any[];
  setBrandCreate: React.Dispatch<React.SetStateAction<any>>;
  listBrand: () => Promise<void>;
  modelList: any[];
  setModelList: React.Dispatch<React.SetStateAction<any[]>>;
  listCars:(brand:string) => Promise<void>;
  comments: any[] 
  setComments: React.Dispatch<React.SetStateAction<any[]>>;
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

  /* const fipePrice = async (brand:string): Promise<void> => {
   
      try {
      
        const req = await fetch(
          `https://kenzie-kars.herokuapp.com/cars?brand=${brand}`
        );
        const resp = await req.json();
        const modelsList: any = [];
        resp.forEach((el: any) => modelsList.push(el.name));
        console.log(modelsList)
        return modelsList;

      } catch (err) {
        console.log(err);
      }
  }; */

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
        listCars
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
