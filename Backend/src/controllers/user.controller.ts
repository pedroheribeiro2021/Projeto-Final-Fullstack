import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import { IUserRequest, IUserUpdate } from "../interfaces/user/user.interface"
import { createUserService } from "../services/user/createUser.service"
import { listUsersServices } from "../services/user/listUser.service"
import { updateUserService } from "../services/user/updateUser.service"
import { deleteUserService } from "../services/user/deleteUser.service"
import { IAddressRequest } from "../interfaces/address/address.interface"
import { resetPasswordService, sendResetEmailPasswordService } from "../services/user/resetUser.service"


export const createUserController = async (req: Request, res: Response) => {

    const userData: IUserRequest = req.body
    const addressData: IAddressRequest = req.body.address

    const newUser = await createUserService(userData, addressData)
    return res.status(201).json(newUser)
}

export const listUsersController = async (req: Request, res: Response) => {

    const users = await listUsersServices()
    return res.json(instanceToPlain(users))
}

export const updateUserController = async (req: Request, res: Response) => {

    const userData: IUserUpdate = req.body
    const addressData: IAddressRequest = req.body.address
    const id: string = req.params.id
    const updateUser = await updateUserService(userData, addressData, id)
    return res.status(200).json(updateUser)
}

export const deleteUserController = async (req: Request, res: Response) => {

    await deleteUserService(req.params.id)
    return res.status(204).json()
}

export const sendResetEmailPasswordController = async (req: Request, res: Response) => {

    const { email } = req.body
    const { protocol } = req
    const host = req.get("host")
    const token = await sendResetEmailPasswordService(email, protocol, host!)
    return res.json(token)
}

export const resetPasswordController = async (req: Request, res: Response) => {

    const { password } = req.body
    const { token } = req.params
    await resetPasswordService(password, token)
    return res.json({ message: "password change with sucess" })
}