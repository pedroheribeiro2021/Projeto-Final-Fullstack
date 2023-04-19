import { AppDataSource } from "../../data-source"
import { Address } from "../../entities/address.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { IAddressRequest } from "../../interfaces/address/address.interface"
import { IUserRequest } from "../../interfaces/user/user.interface"
import { userWithoutPasswordSerializer } from "../../schemas/user.serializer"


export const createUserService = async (userData: IUserRequest, addressData: IAddressRequest): Promise<object> => {
    const userRepository = AppDataSource.getRepository(User)
    const addressRepository = AppDataSource.getRepository(Address)

    const addressregistered = await addressRepository.findOneBy({
        cep: addressData.cep,
        state: addressData.state,
        city: addressData.city,
        street: addressData.street,
        number: addressData.number,
        complement: addressData.complement
    })

    if(addressregistered) {
        throw new AppError('Address already exists', 409)
    }

    const newAddress = await addressRepository.create({
        cep: addressData.cep,
        state: addressData.state,
        city: addressData.city,
        street: addressData.street,
        number: addressData.number,
        complement: addressData.complement
    })

    if(addressData.state.length > 2) {
        throw new AppError('Invalid state', 400)
    }

    if(addressData.cep.length > 8) {
        throw new AppError('Invalid zip code', 400)
    }

    await addressRepository.save(newAddress)

    const createUser = userRepository.create({
        ...userData,
        address: newAddress
    })

    await userRepository.save(createUser)

    const user = userWithoutPasswordSerializer.validate(createUser, {
        stripUnknown: true
    })

    // const respUser = {
    //     ...user,
    //     address: newAddress
    // }

    return user
}