import { Request, Response } from "express";
import { deleteAnnouncementService } from "../../services/announcement/deleteAnnouncement.service";

export const deleteAnnouncementController = async (
  req: Request,
  res: Response
) => {
  const id: string = req.params.id;
  await deleteAnnouncementService(id);
  return res.status(204).send();
};
