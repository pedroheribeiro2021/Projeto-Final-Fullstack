import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/AppError"
import { User } from "../../entities/user.entity"
import { log } from "console"


export const ensureOwnUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    if(req.params.id != req.user.id) {
        throw new AppError('Diferent user', 404)
    }


   return next()
}