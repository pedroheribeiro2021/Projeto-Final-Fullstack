
export type IAnuncios = [];

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellPhone: string;
  birthday: string;
  description: string;
  is_advertiser: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}
export interface IAnuncio {
  id: string;
  user: IUser;
  mileage: number;
  color: string;
  description:string;
  FIPE_priceTable: number;
  price: number;
  isActive: boolean;
  isSuperBuy: boolean;
  createdAt: string;
  brand: IBrand;
  model: IModel;
  year: IYear;
  fuel: IFuel;
  images: ImageArray;
}

export interface IBrand {
  id: string;
  brand: string;
}
export interface IModel {
  id: string;
  model: string;
}
export interface IYear {
  id: string;
  year: string;
}
export interface IFuel {
  id: string;
  fuel: string;
}

interface ImageArray extends Array<Image> {}

export interface Image {
  id: string;
  imageUrl: string;
  isCoverImage: boolean;
}
