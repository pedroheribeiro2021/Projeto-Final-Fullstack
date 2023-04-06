import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUser, IUserRequest } from "../../interfaces/user/user.interface"


export const createUserService = async (userData: IUserRequest): Promise<object> => {
    const userRepository = AppDataSource.getRepository(User)

    const createUser = userRepository.create(userData)

    await userRepository.save(createUser)

    // const user = userWithoutPasswordSerializer.validate(createUser, {
    //     stripUnknown: true
    // })

    return createUser
}