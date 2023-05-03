import { Router } from "express";
import { createSessionController } from "../controllers/session/session.controller";

export const sessionRoutes = Router()

sessionRoutes.post('', createSessionController)