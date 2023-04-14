import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAnnouncement, IAnnouncementRequest } from "../interfaces/announcement.interfaces";

export const annoucementSerializer: SchemaOf<any> = yup.object().shape({
    user_id: yup.string().required(),
    brand: yup.string().required() || yup.object().shape({
        brand: yup.string().required()
    }),
    model: yup.string().required() || yup.object().shape({
        id: yup.string().required(),
        model: yup.string().required(),
        announcement: yup.string().required()
    }),
    year: yup.string().required() || yup.object().shape({
        id: yup.string(),
        year: yup.string(),
        announcement: yup.string()
    }),
    fuel: yup.string().required() || yup.object().shape({
        id: yup.string(),
        fuel: yup.string(),
        announcement: yup.string()
    }),
    mileage: yup.number().required(),
    color: yup.string().required(),
    FIPE_priceTable: yup.number().required(),
    price: yup.number().required()
});

export const annoucementWhiteoutSerializer: SchemaOf<any> = yup.object().shape({
    id: yup.string().required(),
    user_id: yup.string(),
    brand: yup.object(),
    model: yup.object(),
    year: yup.object(),
    fuel: yup.object(),
    mileage: yup.number().required(),
    color: yup.string().required(),
    FIPE_priceTable: yup.number().required(),
    isSuperBuy: yup.boolean().required(),
    createdAt: yup.string().required()
}); 

