import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAnnouncement, IAnnouncementRequest } from "../interfaces/annoucement/announcement.interfaces";
import { userSerializer } from "./user.serializer";

export const annoucementSerializer: SchemaOf<any> = yup.object().shape({
    mileage: yup.number().required(),
    color: yup.string().required(),
    FIPE_priceTable: yup.number().required(),
    price: yup.number().required(),
    isActive: yup.boolean().notRequired(),
    isSuperBuy: yup.boolean().required(),
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
});

export const annoucementRespSerializer: SchemaOf<any> = yup.object().shape({
    id: yup.string().required(),
    mileage: yup.number().required(),
    color: yup.string().required(),
    FIPE_priceTable: yup.number().required(),
    isSuperBuy: yup.boolean().required(),
    isActive: yup.boolean().required(),
    price: yup.number().required(),
    createdAt: yup.date().required(),
    user: yup.object(),
    brand: yup.object(),
    model: yup.object(),
    year: yup.object(),
    fuel: yup.object(),
}).nullable();
