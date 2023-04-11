
interface IAnnouncementRequest {
    user_id: string;
    brand_id: string;
    model_id: string;
    year_id: string;
    fuel_id: string;
    mileage: number;
    color: string;
    FIPE_priceTable: number;
    price: number;
};
interface IAnnouncement{
    id: string;
    user_id: string;
    brand_id: string;
    model_id: string;
    year_id: string;
    fuel_id: string;
    mileage: number;
    color: string;
    FIPE_priceTable: number;
    isSuperBuy: boolean;
    createdAt: string;
    
    comments: ICommentList;
    images: IImageList;
    brands: IBrandList;
    models: IModelList;
    year: IYearList;
    fuels: IFuelList;
}

interface IComment {
    id: string;
    user_id: string;
    description: string;
    created_at: Date;
    announcement_id: string;
};
interface ICommentList extends Array<IComment>{};

interface IImage {
    id: string;
    announcement_id: string;
    imageUrl: string;
    isCoverImage: boolean;
};
interface IImageList extends Array<IImage>{};

interface IBrand {
    id: string;
    brand: string;
};
interface IBrandList extends Array<IBrand>{};

interface IModel {
    id: string;
    model: string;

};
interface IModelList extends Array<IModel>{};

interface IYear {
    id: string;
    year: string;
};
interface IYearList extends Array<IYear>{};

interface IFuel {
    id: string;
    fuel: string;
};
interface IFuelList extends Array<IFuel>{};