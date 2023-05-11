import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import {
  IAnuncio,
  IBrand,
  IModel,
  IYear,
  IFuel,
} from "../types/home/homeInterface";

export interface IHomeFilterContext {
  filteredAnnouncements: IAnuncio[];
  setFilteredAnnouncements: React.Dispatch<React.SetStateAction<IAnuncio[]>>;
  brands: IBrand[];
  setBrands: React.Dispatch<React.SetStateAction<IBrand[]>>;
  filteredBrands: string[];
  setFilteredBrands: React.Dispatch<React.SetStateAction<string[]>>;
  models: IModel[];
  setModels: React.Dispatch<React.SetStateAction<IModel[]>>;
  filteredModels: string[];
  setFilteredModels: React.Dispatch<React.SetStateAction<string[]>>;
  years: IYear[];
  setYears: React.Dispatch<React.SetStateAction<IYear[]>>;
  filteredYears: string[];
  setFilteredYears: React.Dispatch<React.SetStateAction<string[]>>;
  fuels: IFuel[];
  setFuels: React.Dispatch<React.SetStateAction<IFuel[]>>;
  filteredFuels: string[];
  setFilteredFuels: React.Dispatch<React.SetStateAction<string[]>>;
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  filteredColors: string[];
  setFilteredColors: React.Dispatch<React.SetStateAction<string[]>>;
  getAnnoucements: () => Promise<void>;
  getAllBrands: () => Promise<void>;
  getAllModels: () => Promise<void>;
  getAllYears: () => Promise<void>;
  getAllFuels: () => Promise<void>;
  getColors: () => Promise<void>;
  filterBrand: (filtered: any) => Promise<void>;
  filterModel: (filtered: any) => Promise<void>;
  filterColor: (filtered: any) => Promise<void>;
  filterYear: (filtered: any) => Promise<void>;
  filterFuel: (filtered: any) => Promise<void>;
  filterKM: (filtered: any) => Promise<void>;
  filterPrice: (filtered: any) => Promise<void>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface IHomeFilter {
  children: ReactNode;
}

export const HomeFilterContext = createContext<IHomeFilterContext>(
  {} as IHomeFilterContext
);

export const HomeFilterProvider = ({ children }: IHomeFilter) => {
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<
    IAnuncio[]
  >([]);

  const [brands, setBrands] = useState<IBrand[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<string[]>([]);

  const [models, setModels] = useState<IModel[]>([]);
  const [filteredModels, setFilteredModels] = useState<string[]>([]);

  const [years, setYears] = useState<IYear[]>([]);
  const [filteredYears, setFilteredYears] = useState<string[]>([]);

  const [fuels, setFuels] = useState<IFuel[]>([]);
  const [filteredFuels, setFilteredFuels] = useState<string[]>([]);

  const [colors, setColors] = useState<string[]>([]);
  const [filteredColors, setFilteredColors] = useState<string[]>([]);

  const [km, setKmFiltred] = useState<number | undefined>();

  const [currentPage, setCurrentPage] = useState<number>(0);

  const getAnnoucements = async (): Promise<void> => {
    try {
      const { data } = await api.get("/announcement");
      setFilteredAnnouncements(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllBrands = async (): Promise<void> => {
    try {
      const { data } = await api.get("/announcement/brand");
      setBrands(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllModels = async (): Promise<void> => {
    try {
      const { data } = await api.get("/announcement/model");
      setModels(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllYears = async (): Promise<void> => {
    try {
      const { data } = await api.get("/announcement/year");
      setYears(data);
      const yearsList = data.map((el: IAnuncio) => el.year);
      setFilteredYears(yearsList);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllFuels = async (): Promise<void> => {
    try {
      const { data } = await api.get("/announcement/fuel");
      setFuels(data);
  
      const fuelsList = data.map((el: any) => {
        const typeFuel = el.fuel;
              
        if(typeFuel === '1'){
          el.fuel = 'Flex';
          return el;
        } else if(typeFuel === '2'){
          el.fuel = 'Híbrido';
          return el;
        } else if(typeFuel === '3'){
          el.fuel.fuel = 'Elétrico';
          return el;
        } else {
          return el;
        }
      });
      
      setFilteredFuels(fuelsList);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const getColors = async (): Promise<void> => {
    try {
      const { data } = await api.get("/announcement");
      const colorsList: string[] = [];
      data.forEach((el: IAnuncio) => {
        if (!colorsList.includes(el.color)) {
          colorsList.push(el.color);
        }
        setColors(colorsList);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const filterBrand = async (filtered: any): Promise<void> => {
    try {
      const { data } = await api.get("/announcement");
      const dataFiltered = await data.filter(
        (el: IAnuncio) => el.brand.brand === filtered
      );
      setFilteredAnnouncements(dataFiltered);

      const dataBrands = dataFiltered.map((el: IAnuncio) => el.brand.brand);
      const uniqueBrands: any = Array.from(new Set(dataBrands)).sort();
      setFilteredBrands(uniqueBrands);

      const dataModels = dataFiltered.map((el: IAnuncio) => el.model.model);
      const uniqueModels: any = Array.from(new Set(dataModels)).sort();
      setFilteredModels(uniqueModels);

      const dataColors = dataFiltered.map((el: IAnuncio) => el.color);
      const uniqueColors: any = Array.from(new Set(dataColors)).sort();
      setFilteredColors(uniqueColors);

      const dataYears = dataFiltered.map((el: IAnuncio) => el.year.year);
      const uniqueYears: any = Array.from(new Set(dataYears)).sort();
      setFilteredYears(uniqueYears);

      const dataFuels = dataFiltered.map((el: IAnuncio) => el.fuel.fuel);
      const uniqueFuels: any = Array.from(new Set(dataFuels)).sort();
      setFilteredFuels(uniqueFuels);
    } catch (error) {
      console.log(error);
    }
  };

  const filterModel = async (filtered: any): Promise<void> => {
    try {
      const { data } = await api.get("/announcement");
      const dataFiltered = await data.filter(
        (el: IAnuncio) => el.model.model === filtered
      );
      setFilteredAnnouncements(dataFiltered);

      const dataBrands = dataFiltered.map((el: IAnuncio) => el.brand.brand);
      const uniqueBrands: any = Array.from(new Set(dataBrands)).sort();
      setFilteredBrands(uniqueBrands);

      const dataModels = dataFiltered.map((el: IAnuncio) => el.model.model);
      const uniqueModels: any = Array.from(new Set(dataModels)).sort();
      setFilteredModels(uniqueModels);

      const dataColors = dataFiltered.map((el: IAnuncio) => el.color);
      const uniqueColors: any = Array.from(new Set(dataColors)).sort();
      setFilteredColors(uniqueColors);

      const dataYears = dataFiltered.map((el: IAnuncio) => el.year.year);
      const uniqueYears: any = Array.from(new Set(dataYears)).sort();
      setFilteredYears(uniqueYears);

      const dataFuels = dataFiltered.map((el: IAnuncio) => el.fuel.fuel);
      const uniqueFuels: any = Array.from(new Set(dataFuels)).sort();
      setFilteredFuels(uniqueFuels);
    } catch (error) {
      console.log(error);
    }
  };

  const filterColor = async (filtered: any): Promise<void> => {
    try {
      const { data } = await api.get("/announcement");
      const dataFiltered = await data.filter(
        (el: IAnuncio) => el.color === filtered
      );
      setFilteredAnnouncements(dataFiltered);

      const dataBrands = dataFiltered.map((el: IAnuncio) => el.brand.brand);
      const uniqueBrands: any = Array.from(new Set(dataBrands)).sort();
      setFilteredBrands(uniqueBrands);

      const dataModels = dataFiltered.map((el: IAnuncio) => el.model.model);
      const uniqueModels: any = Array.from(new Set(dataModels)).sort();
      setFilteredModels(uniqueModels);

      const dataColors = dataFiltered.map((el: IAnuncio) => el.color);
      const uniqueColors: any = Array.from(new Set(dataColors)).sort();
      setFilteredColors(uniqueColors);

      const dataYears = dataFiltered.map((el: IAnuncio) => el.year.year);
      const uniqueYears: any = Array.from(new Set(dataYears)).sort();
      setFilteredYears(uniqueYears);

      const dataFuels = dataFiltered.map((el: IAnuncio) => el.fuel.fuel);
      const uniqueFuels: any = Array.from(new Set(dataFuels)).sort();
      setFilteredFuels(uniqueFuels);
    } catch (error) {
      console.log(error);
    }
  };

  const filterYear = async (filtered: any): Promise<void> => {
    try {
      const { data } = await api.get("/announcement");
      const dataFiltered = await data.filter(
        (el: IAnuncio) => el.year.year === filtered
      );
      setFilteredAnnouncements(dataFiltered);

      const dataBrands = dataFiltered.map((el: IAnuncio) => el.brand.brand);
      const uniqueBrands: any = Array.from(new Set(dataBrands)).sort();
      setFilteredBrands(uniqueBrands);

      const dataModels = dataFiltered.map((el: IAnuncio) => el.model.model);
      const uniqueModels: any = Array.from(new Set(dataModels)).sort();
      setFilteredModels(uniqueModels);

      const dataColors = dataFiltered.map((el: IAnuncio) => el.color);
      const uniqueColors: any = Array.from(new Set(dataColors)).sort();
      setFilteredColors(uniqueColors);

      const dataYears = dataFiltered.map((el: IAnuncio) => el.year.year);
      const uniqueYears: any = Array.from(new Set(dataYears)).sort();
      setFilteredYears(uniqueYears);

      const dataFuels = dataFiltered.map((el: IAnuncio) => el.fuel.fuel);
      const uniqueFuels: any = Array.from(new Set(dataFuels)).sort();
      setFilteredFuels(uniqueFuels);
    } catch (error) {
      console.log(error);
    }
  };

  const filterFuel = async (filtered: any): Promise<void> => {
    try {  
       
      let typeFuel:string;
      if(filtered === 'Flex'){
        typeFuel = '1'
      }else if(filtered === 'Híbrido'){
        typeFuel = '2'
      }else if(filtered === 'Elétrico'){
        typeFuel = '3'
      }
      
      const { data } = await api.get("/announcement");
      const dataFiltered = await data.filter(
        (el: IAnuncio) => el.fuel.fuel === typeFuel
      );

      setFilteredAnnouncements(dataFiltered);

      const dataBrands = dataFiltered.map((el: IAnuncio) => el.brand.brand);
      const uniqueBrands: any = Array.from(new Set(dataBrands)).sort();
      setFilteredBrands(uniqueBrands);

      const dataModels = dataFiltered.map((el: IAnuncio) => el.model.model);
      const uniqueModels: any = Array.from(new Set(dataModels)).sort();
      setFilteredModels(uniqueModels);

      const dataColors = dataFiltered.map((el: IAnuncio) => el.color);
      const uniqueColors: any = Array.from(new Set(dataColors)).sort();
      setFilteredColors(uniqueColors);

      const dataYears = dataFiltered.map((el: IAnuncio) => el.year.year);
      const uniqueYears: any = Array.from(new Set(dataYears)).sort();
      setFilteredYears(uniqueYears);

      const dataFuels = dataFiltered.map((el: IAnuncio) => el.fuel.fuel);
      const uniqueFuels: any = Array.from(new Set(dataFuels)).sort();
      setFilteredFuels(uniqueFuels);
    } catch (error) {
      console.log(error);
    }
  };

  const filterKM = async (filtered: number) => {
    try {
      const { data } = await api.get("/announcement");

      const dataFiltered = await data.filter(
        (el: IAnuncio) => el.mileage === filtered
      );
      setFilteredAnnouncements(dataFiltered);

      const dataBrands = dataFiltered.map((el: IAnuncio) => el.brand.brand);
      const uniqueBrands: any = Array.from(new Set(dataBrands)).sort();
      setFilteredBrands(uniqueBrands);

      const dataModels = dataFiltered.map((el: IAnuncio) => el.model.model);
      const uniqueModels: any = Array.from(new Set(dataModels)).sort();
      setFilteredModels(uniqueModels);

      const dataColors = dataFiltered.map((el: IAnuncio) => el.color);
      const uniqueColors: any = Array.from(new Set(dataColors)).sort();
      setFilteredColors(uniqueColors);

      const dataYears = dataFiltered.map((el: IAnuncio) => el.year.year);
      const uniqueYears: any = Array.from(new Set(dataYears)).sort();
      setFilteredYears(uniqueYears);

      const dataFuels = dataFiltered.map((el: IAnuncio) => el.fuel.fuel);
      const uniqueFuels: any = Array.from(new Set(dataFuels)).sort();
      setFilteredFuels(uniqueFuels);
    } catch (error) {
      console.error(error);
    }
  };

  const filterPrice = async (filtered: number) => {
    try {
      const { data } = await api.get("/announcement");
      const dataFiltered = await data.filter(
        (el: IAnuncio) => el.price === filtered
      );
      setFilteredAnnouncements(dataFiltered);
      const dataBrands = dataFiltered.map((el: IAnuncio) => el.brand.brand);
      const uniqueBrands: any = Array.from(new Set(dataBrands)).sort();
      setFilteredBrands(uniqueBrands);

      const dataModels = dataFiltered.map((el: IAnuncio) => el.model.model);
      const uniqueModels: any = Array.from(new Set(dataModels)).sort();
      setFilteredModels(uniqueModels);

      const dataColors = dataFiltered.map((el: IAnuncio) => el.color);
      const uniqueColors: any = Array.from(new Set(dataColors)).sort();
      setFilteredColors(uniqueColors);

      const dataYears = dataFiltered.map((el: IAnuncio) => el.year.year);
      const uniqueYears: any = Array.from(new Set(dataYears)).sort();
      setFilteredYears(uniqueYears);

      const dataFuels = dataFiltered.map((el: IAnuncio) => el.fuel.fuel);
      const uniqueFuels: any = Array.from(new Set(dataFuels)).sort();
      setFilteredFuels(uniqueFuels);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HomeFilterContext.Provider
      value={{
        filteredAnnouncements,
        setFilteredAnnouncements,
        brands,
        setBrands,
        filteredBrands,
        setFilteredBrands,
        models,
        setModels,
        filteredModels,
        setFilteredModels,
        years,
        setYears,
        filteredYears,
        setFilteredYears,
        fuels,
        setFuels,
        filteredFuels,
        setFilteredFuels,
        colors,
        setColors,
        filteredColors,
        setFilteredColors,
        getAnnoucements,
        getAllBrands,
        getAllModels,
        getAllYears,
        getAllFuels,
        getColors,
        filterBrand,
        filterModel,
        filterColor,
        filterYear,
        filterFuel,
        filterKM,
        filterPrice,
        km,
        filterPrice,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </HomeFilterContext.Provider>
  );
};
