import { ReactNode, createContext, useContext, useState } from "react";




export interface IHomeContext{
    openFilter: boolean;
    setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>
  }

interface IHome {
  children: ReactNode;
}



export const HomeContext = createContext<IHomeContext>({} as IHomeContext);
export const HomeProvider = ({ children }: IHome) => {
    const [openFilter, setOpenFilter] = useState(false);


  
    return (
      <HomeContext.Provider
        value={{
          openFilter,
          setOpenFilter
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