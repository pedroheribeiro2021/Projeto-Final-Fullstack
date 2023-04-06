import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import { IUserRequest, IUserUpdate } from "../interfaces/user/user.interface"
import { createUserService } from "../services/user/createUser.service"
import { listUsersServices } from "../services/user/listUser.service"
import { updateUserService } from "../services/user/updateUser.service"
import { deleteUserService } from "../services/user/deleteUser.service"


export const createUserController = async (req: Request, res: Response) => {

    const userData: IUserRequest = req.body
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

export const listUsersController = async (req: Request, res: Response) => {

    const users = await listUsersServices()
    return res.json(instanceToPlain(users))
}

export const updateUserController = async (req: Request, res: Response) => {

    const userData: IUserUpdate = req.body
    const id: string = req.params.id
    const updateUser = await updateUserService(userData, id)
    return res.status(200).json(updateUser)
}

export const deleteUserController = async (req: Request, res: Response) => {

    await deleteUserService(req.params.id)
    return res.status(204).json()
}