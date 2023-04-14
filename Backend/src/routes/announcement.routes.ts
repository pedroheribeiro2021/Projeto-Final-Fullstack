import { Router } from "express";
import { annoucementSerializer } from "../schemas/annoucement.serializer";
import { ensureDataIsValidMiddleware } from "../middlewares/user.middlewares/ensureDataIsValid.middleware";
import { createAnnouncementController } from "../controllers/announcement/createAnnouncement";
import { ensureAuthMiddleware } from "../middlewares/user.middlewares/ensureAuth.middleware";

export const announcementRoutes = Router();

announcementRoutes.post("", ensureAuthMiddleware, ensureDataIsValidMiddleware(annoucementSerializer), createAnnouncementController);
