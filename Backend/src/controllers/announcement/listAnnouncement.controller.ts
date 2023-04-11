import { Request, Response } from "express";
import { listAnnouncementService } from "../../services/announcement/listAnnouncement.service"


export const listAnnouncementController = (req:Request, res:Response) => {
    const listAnnoucenment = listAnnouncementService();
    return res.status(200).json(listAnnoucenment);
};