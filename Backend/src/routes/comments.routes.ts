import { Router } from "express";
import { createCommentsController, listCommentsController } from "../controllers/comment/comment.controller";

export const commentsRoutes = Router();

commentsRoutes.get("/:id", listCommentsController)
commentsRoutes.post("/:id", createCommentsController)