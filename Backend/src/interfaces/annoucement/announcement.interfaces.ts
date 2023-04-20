import { string } from "yup";
import { User } from "../../entities/user.entity";
import { IUser } from "../user/user.interface";

export interface IAnnouncementRequest {
    annoucementData: {
        brand: string;
        model: string;
        year: string;
        fuel: string;
        mileage: number;
        color: string;
        FIPE_priceTable: number;
        price: number;
    }
    userId: string
};
export interface IAnnouncement{
    id: string;
    user: {
        id: string 
        name: string
        email: string
        cpf: string
        cellPhone: string
        birthday: string
        description: string
        is_advertiser: boolean
        createdAt: Date
        // updatedAt: Date
    }
    brand: {
      name: string;
    };
    model: {
      name: string;
    };
    year: {
      name: string;
    };
    fuel: {
      name: string;
    };
    mileage: number;
    color: string;
    FIPE_priceTable: number;
    isSuperBuy: boolean;
    isActive: boolean;
    price: number;
    createdAt: Date;
    // comments: ICommentList;
    // images: IImageList;

    // brand: IBrandList;
    // model: IModelList;
    // year: IYearList;
    // fuel: IFuelList;
}

interface IComment {
    id: string;
    user_id: string;
    description: string;
    created_at: Date;
    announcement_id: string;
};
interface IImage {
    id: string;
    announcement_id: string;
    imageUrl: string;
    isCoverImage: boolean;
};
interface IBrand {
    id: string;
    brand: string;
    announcements: IAnnouncement;
};
interface IModel {
    id: string;
    model: string;
    
};
interface IYear {
    id: string;
    year: string;
};
interface IFuel {
    id: string;
    fuel: string;
};
interface ICommentList extends Array<IComment>{};
interface IImageList extends Array<IImage>{};
interface IBrandList extends Array<IBrand>{};
interface IModelList extends Array<IModel>{};
interface IYearList extends Array<IYear>{};
interface IFuelList extends Array<IFuel>{};

