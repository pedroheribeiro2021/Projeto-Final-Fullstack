import { Request, Response } from "express";
import { createAnnouncementService } from "../../services/announcement/createAnnouncement.service";

export const createAnnouncementController = async (req:Request, res:Response):Promise<Response> => {
    const announcementData = req.body;
    const userId = req.user.id;
    const body = await createAnnouncementService({announcementData, userId});
    return res.status(201).json(body)
};