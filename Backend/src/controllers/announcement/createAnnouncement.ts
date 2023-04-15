import { Request, Response } from "express";
import { createAnnouncementService } from "../../services/announcement/createAnnouncement.service.ts";

export const createAnnouncementController = async (req:Request, res:Response):Promise<Response> => {
    const announcementData = req.body;
    // Implementar userId
    // const userId = req.user.id;
    const body = await createAnnouncementService(announcementData);
    return res.status(201).json(body)
};