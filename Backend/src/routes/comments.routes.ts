import { Router } from "express";
import { createCommentsController, listCommentsController } from "../controllers/comment/comment.controller";
import { ensureAuthMiddleware } from "../middlewares/user.middlewares/ensureAuth.middleware";


export const commentsRoutes = Router();

commentsRoutes.get("/:id", listCommentsController)
commentsRoutes.post("/:id", ensureAuthMiddleware, createCommentsController)