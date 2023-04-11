import "express-async-errors";
import express, { Application } from 'express';
import cors from "cors";
import { announcementRoutes } from './routes/announcement.routes';
import { handleError } from "./errors/HandleError";

export const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/announcement", announcementRoutes);

app.use(handleError);