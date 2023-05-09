import { Router } from "express";
import {} from "./announcement.routes";
import { listAnnouncementController } from "../controllers/announcement/listAnnouncement.controller";
import { deleteAnnouncementController } from "../controllers/announcement/deleteAnnouncement.controller";
import {
  annoucementRequestSerializer,
} from "../schemas/annoucement.serializer";
import { ensureDataIsValidMiddleware } from "../middlewares/user.middlewares/ensureDataIsValid.middleware";
import { createAnnouncementController } from "../controllers/announcement/createAnnouncement";
import { ensureAuthMiddleware } from "../middlewares/user.middlewares/ensureAuth.middleware";
import { getAnnouncementsUserController } from "../controllers/announcement/getAnnouncementsUser.controller";
import {
  listAnnouncementBrandsController,
  listAnnouncementFuelsController,
  listAnnouncementModelsController,
  listAnnouncementYearsController,
} from "../controllers/announcement/listFiltersAnnouncements.controller";
import { updateAnnouncementController } from "../controllers/announcement/editAnnouncement.controller";

export const announcementRoutes = Router();

announcementRoutes.get("", listAnnouncementController);
announcementRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  deleteAnnouncementController
);
announcementRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(annoucementRequestSerializer),
  createAnnouncementController
);
announcementRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  updateAnnouncementController
);
announcementRoutes.get("/user/:id", getAnnouncementsUserController);

announcementRoutes.get("/brand", listAnnouncementBrandsController);
announcementRoutes.get("/model", listAnnouncementModelsController);
announcementRoutes.get("/year", listAnnouncementYearsController);
announcementRoutes.get("/fuel", listAnnouncementFuelsController);
