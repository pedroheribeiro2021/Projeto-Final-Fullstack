import { Request, Response } from "express";
import { IAnnouncementUpdate } from "../../interfaces/announcement.interfaces";
import { updateAnnouncementService } from "../../services/announcement/updateAnnouncements.service";

export const updateAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const data: IAnnouncementUpdate = req.body;
  const id: string = req.params.id;
  const resp = await updateAnnouncementService(data, id);
  return res.status(200).json(resp);
};
