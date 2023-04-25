import { Request, Response } from "express";
import { getAnnouncementsUserService } from "../../services/announcement/getAnnouncementUser.service";

export const getAnnouncementsUserController = async (
  req: Request,
  res: Response
) => {
  const userId: string = req.params.id;
  const annoucements = await getAnnouncementsUserService(userId);
  return res.status(200).json(annoucements);
};
