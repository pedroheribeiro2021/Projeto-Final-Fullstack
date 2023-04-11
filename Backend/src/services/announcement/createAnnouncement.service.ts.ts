import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const createAnnouncementService = async (announcementData:IAnnouncementRequest):Promise<Object> => {
    const announcementRepository = AppDataSource.getRepository(Announcement)
    return {}
};