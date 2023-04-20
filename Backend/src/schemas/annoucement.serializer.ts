import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IAnnouncement,
  IAnnouncementRequest,
} from "../interfaces/announcement.interfaces";

export const annoucementSerializer: SchemaOf<any> = yup.object().shape({
  user_id: yup.string().required(),
  brand:
    yup.string().required() ||
    yup.object().shape({
      brand: yup.string().required(),
    }),
  model:
    yup.string().required() ||
    yup.object().shape({
      id: yup.string().required(),
      model: yup.string().required(),
      announcement: yup.string().required(),
    }),
  year:
    yup.string().required() ||
    yup.object().shape({
      id: yup.string(),
      year: yup.string(),
      announcement: yup.string(),
    }),
  fuel:
    yup.string().required() ||
    yup.object().shape({
      id: yup.string(),
      fuel: yup.string(),
      announcement: yup.string(),
    }),
  mileage: yup.number().required(),
  color: yup.string().required(),
  FIPE_priceTable: yup.number().required(),
  price: yup.number().required(),
});

export const annoucementRequestSerializer: SchemaOf<any> = yup.object().shape({
  brand:
    yup.string().required() ||
    yup.object().shape({
      brand: yup.string().required(),
    }),
  model:
    yup.string().required() ||
    yup.object().shape({
      id: yup.string().required(),
      model: yup.string().required(),
      announcement: yup.string().required(),
    }),
  year:
    yup.string().required() ||
    yup.object().shape({
      id: yup.string(),
      year: yup.string(),
      announcement: yup.string(),
    }),
  fuel:
    yup.string().required() ||
    yup.object().shape({
      id: yup.string(),
      fuel: yup.string(),
      announcement: yup.string(),
    }),
  mileage: yup.number().required(),
  color: yup.string().required(),
  price: yup.number().required(),
  images: yup.array(),
});

export const annoucementReturnedSerializer: SchemaOf<any> = yup.object().shape({
  id: yup.string(),
  user: yup.string(),
  brand: yup.object(),
  model: yup.object(),
  year: yup.object(),
  fuel: yup.object(),
  mileage: yup.number(),
  color: yup.string(),
  FIPE_priceTable: yup.number(),
  isSuperBuy: yup.boolean(),
  isActive: yup.boolean(),
  price: yup.number(),
  createdAt: yup.string(),
  images: yup.array(),
  comments: yup.object(),
});
