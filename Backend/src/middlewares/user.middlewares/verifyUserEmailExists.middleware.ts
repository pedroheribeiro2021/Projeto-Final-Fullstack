import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { User } from "../../entities/user.entity";


export const verifyUserEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const userRegistred = AppDataSource.getRepository(User)

    const email = await userRegistred.findBy({
        email: req.body.email
    })

    const cpf = await userRegistred.findBy({
        cpf: req.body.cpf
    })
    
    if(email.length > 0 || cpf.length > 0) {
        
        throw new AppError('User already registred', 400)
    }

    next()
}