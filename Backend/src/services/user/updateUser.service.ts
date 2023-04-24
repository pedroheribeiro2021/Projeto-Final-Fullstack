import { AppDataSource } from "../../data-source"
import { Address } from "../../entities/address.entity"
import { User } from "../../entities/user.entity"
import { IAddressRequest } from "../../interfaces/address/address.interface"
import { IUser, IUserUpdate } from "../../interfaces/user/user.interface"
import { userWithoutPasswordSerializer } from "../../schemas/user.serializer"


export const updateUserService = async(userData: IUserUpdate, addressData: IAddressRequest, userId: string): Promise<object> => {

    const userRepository = AppDataSource.getRepository(User)
    const addressRepository = AppDataSource.getRepository(Address)

    const findUser: any = await userRepository.findOneBy({
        id: userId
    })

    const updateAddress = addressRepository.create({
        ...addressData
    })

    await addressRepository.save(updateAddress)

    const updatedUser = userRepository.create({
        ...findUser,
        ...userData,
        address: updateAddress
    })
    
    await userRepository.save(updatedUser)

    const userWithoutPassword = await userWithoutPasswordSerializer.validate(updatedUser, {
        stripUnknown: true
    })

    return userWithoutPassword
}