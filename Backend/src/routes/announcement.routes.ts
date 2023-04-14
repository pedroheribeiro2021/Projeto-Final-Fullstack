import { Router } from "express";
import {} from "./announcement.routes";
import { listAnnouncementController } from "../controllers/announcement/listAnnouncement.controller";
import { deleteAnnouncementController } from "../controllers/announcement/deleteAnnouncement.controller";

export const announcementRoutes = Router();

announcementRoutes.get("", listAnnouncementController);
announcementRoutes.post("");
announcementRoutes.delete("", deleteAnnouncementController);
