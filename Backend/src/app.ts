import "express-async-errors";
import express, { Application } from 'express'
import cors from "cors";

export const app: Application = express()
app.use(express.json())
app.use(cors())