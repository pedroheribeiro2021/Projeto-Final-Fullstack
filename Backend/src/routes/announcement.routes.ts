import { Router } from "express";
import {} from "./announcement.routes";
import { listAnnouncementController } from "../controllers/announcement/listAnnouncement.controller";
import { deleteAnnouncementController } from "../controllers/announcement/deleteAnnouncement.controller";
import {
  annoucementRequestSerializer,
  annoucementSerializer,
} from "../schemas/annoucement.serializer";
import { ensureDataIsValidMiddleware } from "../middlewares/user.middlewares/ensureDataIsValid.middleware";
import { createAnnouncementController } from "../controllers/announcement/createAnnouncement";
import { ensureAuthMiddleware } from "../middlewares/user.middlewares/ensureAuth.middleware";
import { getAnnouncementsUserController } from "../controllers/announcement/getAnnouncementsUser.controller";

export const announcementRoutes = Router();

announcementRoutes.get("", listAnnouncementController);
announcementRoutes.delete("/:id", deleteAnnouncementController);
announcementRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(annoucementRequestSerializer),
  createAnnouncementController
);
announcementRoutes.get("/user/:id", getAnnouncementsUserController);
