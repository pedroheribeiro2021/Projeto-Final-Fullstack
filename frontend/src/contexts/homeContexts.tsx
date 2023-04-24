import { ReactNode, createContext, useContext, useState } from "react";




export interface IHomeContext{
    openFilter: boolean;
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isModalEdit: boolean;
    setIsModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  }

interface IHome {
  children: ReactNode;
}



export const HomeContext = createContext<IHomeContext>({} as IHomeContext);
export const HomeProvider = ({ children }: IHome) => {
    const [openFilter, setOpenFilter] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isModalEdit, setIsModalEdit] = useState(false);

   

  
    return (
      <HomeContext.Provider
        value={{
          openFilter,
          setOpenFilter,
          isModalOpen,
          setIsModalOpen,
          isModalEdit,
          setIsModalEdit
          
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