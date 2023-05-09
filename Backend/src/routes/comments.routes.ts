import { Router } from "express";
import { createCommentsController, deleteCommentsController, listCommentsController, updateCommentsController } from "../controllers/comment/comment.controller";
import { ensureAuthMiddleware } from "../middlewares/user.middlewares/ensureAuth.middleware";

export const commentsRoutes = Router();

commentsRoutes.get("/:id", listCommentsController)
commentsRoutes.post("/:id", ensureAuthMiddleware, createCommentsController)

export const commentsUpateRoute = Router()

commentsUpateRoute.patch("/:id", ensureAuthMiddleware, updateCommentsController)
commentsUpateRoute.delete("/:id", ensureAuthMiddleware, deleteCommentsController)

