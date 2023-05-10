import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { Address } from "../../entities/address.entity"


export const deleteUserService = async (id: string) => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: any = await userRepository.findOne({
        where: 
        {
            id: id
        },
        relations: {
            address: true
        }
    })

    const addressRepositry = AppDataSource.getRepository(Address)

    const address: any = await addressRepositry.findOneBy({
        id: user.address.id
    })

    await addressRepositry.remove(address)

    await userRepository.remove(user)
    
}