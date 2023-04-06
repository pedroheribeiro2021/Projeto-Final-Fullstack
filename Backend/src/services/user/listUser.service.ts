import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"



export const listUsersServices = async (): Promise<any> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.find()

    return user
}