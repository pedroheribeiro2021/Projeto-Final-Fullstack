
export type IAnuncios = [];

export interface IUser{
    id: string;
    name:string;
    email:string;
    password:string;
    cpf:string;
    cellPhone:string;
    birthday:string;
    description:string;
    is_advertiser:string;
    createdAt:string;
    updatedAt:string;
    deletedAt: null;
}
export interface IAnuncio{
  id: string;
  user:IUser;
  mileage: number;
  color: string;
  description:string;
  FIPE_priceTable: number;
  price: number;
  isActive: boolean;
  isSuperBuy: boolean;
  createdAt: string;
  brand: {id:string; brand: string;};
  model: {id:string; model:string;};
  year: {id:string; year:string;};
  fuel: {id: string; year:string};
  images: ImageArray;
};

interface ImageArray extends Array<Image> {}

export interface Image{
  id:string;
  imageUrl: string;
  isCoverImage: boolean;
}
