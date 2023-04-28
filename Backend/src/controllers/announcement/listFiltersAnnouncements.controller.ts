import { Request, Response } from "express";
import {
  listAnnouncementBrandsService,
  listAnnouncementFuelsService,
  listAnnouncementModelsService,
  listAnnouncementYearsService,
} from "../../services/announcement/listFilterAnnouncements.service";

export const listAnnouncementBrandsController = async (
  req: Request,
  res: Response
) => {
  const listBrands = await listAnnouncementBrandsService();
  return res.status(200).json(listBrands);
};

export const listAnnouncementModelsController = async (
  req: Request,
  res: Response
) => {
  const listModels = await listAnnouncementModelsService();
  return res.status(200).json(listModels);
};

export const listAnnouncementYearsController = async (
  req: Request,
  res: Response
) => {
  const listYears = await listAnnouncementYearsService();
  return res.status(200).json(listYears);
};

export const listAnnouncementFuelsController = async (
  req: Request,
  res: Response
) => {
  const listFuels = await listAnnouncementFuelsService();
  return res.status(200).json(listFuels);
};
