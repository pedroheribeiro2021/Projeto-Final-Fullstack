import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { Brand } from "../../entities/brand.entity";
import { Model } from "../../entities/model.entity";
import { Year } from "../../entities/year.entity";
import { Fuel } from "../../entities/fuel.emtity";
import { User } from "../../entities/user.entity";
import { IAnnouncementRequest } from "../../interfaces/annoucement/announcement.interfaces";
import { annoucementRespSerializer } from "../../schemas/annoucement.serializer";

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