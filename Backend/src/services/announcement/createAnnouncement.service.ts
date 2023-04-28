import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { Announcement } from "../../entities/announcement.entity";
import { Brand } from "../../entities/brand.entity";
import { Model } from "../../entities/model.entity";
import { Year } from "../../entities/year.entity";
import { Fuel } from "../../entities/fuel.emtity";
import { Image } from "../../entities/image.entity";
import { User } from "../../entities/user.entity";
import { IAnnouncementRequest } from "../../interfaces/announcement.interfaces";
import { annoucementReturnedSerializer } from "../../schemas/annoucement.serializer";
import { Console } from "console";
// import { annoucementWhiteoutSerializer } from "../../schemas/annoucement.serializer";

interface IImage {
    id: string
    imageUrl: string
    isCoverImage: boolean
}

export const createAnnouncementService = async ({
  announcementData,
  userId,
}: any): Promise<any> => {
  const fetch = require("node-fetch");
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const brandRepository = AppDataSource.getRepository(Brand);
  const modelRepository = AppDataSource.getRepository(Model);
  const yearRepository = AppDataSource.getRepository(Year);
  const fuelRepository = AppDataSource.getRepository(Fuel);
  const imageRepository = AppDataSource.getRepository(Image);

  async function fipeBrand() {
    try {
      const req = await fetch("https://kenzie-kars.herokuapp.com/cars");
      const resp = await req.json();
      return Object.keys(resp);
    } catch (err) {
      console.log(err);
    }
  }
  const brands = await fipeBrand();
  if (!brands!.includes(announcementData.brand)) {
    throw new AppError("Brand not found", 404);
  }
  let brand = await brandRepository.findOneBy({
    brand: announcementData.brand,
  });
  if (!brand) {
    brand = brandRepository.create({
      brand: announcementData.brand,
    });
    await brandRepository.save(brand);
  }

  async function fipeModel() {
    try {
      const req = await fetch(
        `https://kenzie-kars.herokuapp.com/cars?brand=${brand!.brand}`
      );
      const resp = await req.json();
      const modelsList: any = [];
      resp.forEach((el: any) => modelsList.push(el.name));
      return modelsList;
    } catch (err) {
      console.log(err);
    }
  }
  const models = await fipeModel();
  if (!models!.includes(announcementData.model)) {
    throw new AppError("Model not found", 404);
  }
  let model = await modelRepository.findOneBy({
    model: announcementData.model,
  });
  if (!model) {
    model = modelRepository.create({
      model: announcementData.model,
    });
    await modelRepository.save(model);
  }

  const modelYear = models.filter(
    (el: any) => el.name === announcementData.model
  );
  if (!modelYear.year === announcementData.year) {
    throw new AppError("Year not found", 404);
  }
  let year = await yearRepository.findOneBy({
    year: announcementData.year,
  });
  if (!year) {
    year = yearRepository.create({
      year: announcementData.year,
    });
    await yearRepository.save(year);
  }

  const modelFuel = models.filter(
    (el: any) => el.name === announcementData.model
  );
  const fuels = ["flex", "hibrido", "eletrico"];
  const fuelFind = fuels[modelFuel + 1];
  if (!fuelFind === announcementData.fuel) {
    throw new AppError("Fuel not found", 404);
  }
  let fuel = await fuelRepository.findOneBy({
    fuel: announcementData.fuel,
  });
  if (!fuel) {
    fuel = fuelRepository.create({
      fuel: announcementData.fuel,
    });
    await fuelRepository.save(fuel);
  }

  async function fipePrice() {
    try {
      const req = await fetch(
        `https://kenzie-kars.herokuapp.com/cars/unique?brand=${
          brand!.brand
        }&name=${model!.model}&year=${year!.year}&fuel=${fuel!.fuel}`
      );
      const resp = await req.json();
      return resp.value;
    } catch (err) {
      console.log(err);
    }
  }
  const fipeValue = await fipePrice();

  let superBuy = false;
  if (announcementData.price <= fipeValue * 0.95) {
    superBuy = true;
  }

  const annoucement = announcementRepository.create({
    mileage: announcementData.mileage,
    color: announcementData.color,
    FIPE_priceTable: fipeValue,
    price: announcementData.price,
    description: announcementData.description,
    isSuperBuy: superBuy,
    user: userId,
    brand: brand,
    model: model,
    year: year,
    fuel: fuel
    
  });

  await announcementRepository.save(annoucement);

    announcementData.images.map(async (el: IImage,index:number) => {
        if(index == 0){
          el.isCoverImage = true
        }
        let image = imageRepository.create(el);
        image.announcement = annoucement
        await imageRepository.save(image);
      })

  return annoucement;
};
