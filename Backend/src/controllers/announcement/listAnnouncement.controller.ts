import { Request, Response } from "express";
import { listAnnouncementService } from "../../services/announcement/listAnnouncement.service";

export const listAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const listAnnoucenment = await listAnnouncementService();
  return res.status(200).json(listAnnoucenment);
};
