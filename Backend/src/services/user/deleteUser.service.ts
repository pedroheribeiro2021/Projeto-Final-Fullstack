import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"


export const deleteUserService = async (id: string) => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user:any = await userRepository.findOneBy({
        id: id
    })

    await userRepository.remove(user)
    
}