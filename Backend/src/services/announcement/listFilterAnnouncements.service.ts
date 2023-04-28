import { AppDataSource } from "../../data-source";
import { Brand } from "../../entities/brand.entity";
import { Model } from "../../entities/model.entity";
import { Year } from "../../entities/year.entity";
import { Fuel } from "../../entities/fuel.emtity";

export const listAnnouncementBrandsService = async () => {
  const brandsRepository = AppDataSource.getRepository(Brand);
  const brands = await brandsRepository.find();
  return brands;
};

export const listAnnouncementModelsService = async () => {
  const modelsRepository = AppDataSource.getRepository(Model);
  const models = await modelsRepository.find();
  return models;
};

export const listAnnouncementYearsService = async () => {
  const yearsRepository = AppDataSource.getRepository(Year);
  const years = await yearsRepository.find();
  return years;
};

export const listAnnouncementFuelsService = async () => {
  const fuelsRepository = AppDataSource.getRepository(Fuel);
  const fuels = await fuelsRepository.find();
  return fuels;
};
