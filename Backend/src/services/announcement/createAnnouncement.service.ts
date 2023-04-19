import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Brand } from "../../entities/brand.entity";
import { Model } from "../../entities/model.entity";
import { Year } from "../../entities/year.entity";
import { Fuel } from "../../entities/fuel.emtity";
import { User } from "../../entities/user.entity";
import { IAnnouncementRequest } from "../../interfaces/announcement.interfaces";
// import { annoucementWhiteoutSerializer } from "../../schemas/annoucement.serializer";

// export const createAnnouncementService = async (announcementData:IAnnouncementRequest):Promise<any> => {
//     // Pegar o user do token

//     const announcementRepository = AppDataSource.getRepository(Announcement);
//     const brandRepository = AppDataSource.getRepository(Brand);
//     const modelRepository = AppDataSource.getRepository(Model);
//     const yearRepository = AppDataSource.getRepository(Year);
//     const fuelRepository = AppDataSource.getRepository(Fuel);

//     const userId = {};

//     let newAnnoucement;
    
//     let brandData = announcementData.brand;
//     let brandFound = await brandRepository.findOneBy({brand: brandData});
//     if (!brandFound) {
//         brandFound = brandRepository.create({brand:brandData});
//     }

//     let modelData = announcementData.model;
//     let modelFound = await modelRepository.findOneBy({model:modelData});
//     if(!modelFound){
//         modelFound = modelRepository.create({model:modelData});
//     };

//     let yearData = announcementData.year;
//     let yearFound = await yearRepository.findOneBy({year:yearData});
//     if(!yearFound){
//         yearFound = yearRepository.create({year:yearData});
//     };

//     let fuelData = announcementData.fuel;
//     let fuelFound = await fuelRepository.findOneBy({fuel:fuelData});
//     if(!fuelFound){
//         fuelFound = fuelRepository.create({fuel:fuelData});
//     };

//     const priceAnnoucement = announcementData.price;
//     const priceFipe = announcementData.FIPE_priceTable;
//     let statusIsSuperBuy = false;

//     if(priceAnnoucement >= priceFipe * 0.95)statusIsSuperBuy = true;

    
//     newAnnoucement = announcementRepository.create({
//         user: {},
//         brand: brandFound,
//         color: announcementData.color,
//         model: modelFound
        
//     });

//     newAnnoucement.brand = brandFound;
//     newAnnoucement.model = modelFound;
//     newAnnoucement.year = yearFound;
//     newAnnoucement.fuel = fuelFound;
//     newAnnoucement.isSuperBuy = statusIsSuperBuy;

    
//     await announcementRepository.save(newAnnoucement);
    
//     const announcementOutput = annoucementWhiteoutSerializer.validate(newAnnoucement, {stripUnknown:true});
    
//     return announcementOutput
// };

export const createAnnouncementService = async({announcementData, userId}:any):Promise<any> => {

    const announcementRepository = AppDataSource.getRepository(Announcement)
    const brandRepository = AppDataSource.getRepository(Brand)
    const modelRepository = AppDataSource.getRepository(Model);
    const yearRepository = AppDataSource.getRepository(Year);
    const fuelRepository = AppDataSource.getRepository(Fuel);

    const brand = brandRepository.create({
        brand: announcementData.brand
    })

    await brandRepository.save(brand)

    const model = modelRepository.create({
        model: announcementData.model
    })

    await modelRepository.save(model)

    const year = yearRepository.create({
        year: announcementData.year
    })

    await yearRepository.save(year)

    const fuel = fuelRepository.create({
        fuel: announcementData.fuel
    })

    await fuelRepository.save(fuel)

    const annoucement = announcementRepository.create({
        mileage: announcementData.mileage,
        color: announcementData.color,
        FIPE_priceTable: announcementData.FIPE_priceTable,
        price: announcementData.price,
        isActive: announcementData.isActive,
        isSuperBuy: announcementData.isSuperBuy,
        user: userId,
        brand: brand,
        model: model,
        year: year,
        fuel: fuel
    })

    await announcementRepository.save(annoucement)

    return annoucement
}