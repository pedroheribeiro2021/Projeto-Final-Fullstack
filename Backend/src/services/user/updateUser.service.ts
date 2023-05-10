import { AppDataSource } from "../../data-source"
import { Address } from "../../entities/address.entity"
import { User } from "../../entities/user.entity"
import { IAddressRequest } from "../../interfaces/address/address.interface"
import { IUser, IUserUpdate } from "../../interfaces/user/user.interface"
import { userWithoutPasswordSerializer } from "../../schemas/user.serializer"


export const updateUserService = async(userData: IUserUpdate, userId: string): Promise<object> => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser: any = await userRepository.findOneBy({
        id: userId
    })

    const updatedUser = userRepository.create({
        ...findUser,
        ...userData
    })
    
    await userRepository.save(updatedUser)

    const userWithoutPassword = await userWithoutPasswordSerializer.validate(updatedUser, {
        stripUnknown: true
    })

    return userWithoutPassword
}