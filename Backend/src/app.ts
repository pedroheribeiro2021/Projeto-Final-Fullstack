import "express-async-errors";
import { handleError } from "./errors/handleError"
import express, { Application } from 'express'
import cors from "cors";
import { userRoutes } from "./routes/user.routes";
import { sessionRoutes } from "./routes/session.routes";
import { announcementRoutes } from './routes/announcement.routes';

export const app: Application = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)
app.use("/login", sessionRoutes)
app.use("/announcement", announcementRoutes)

app.use(handleError)