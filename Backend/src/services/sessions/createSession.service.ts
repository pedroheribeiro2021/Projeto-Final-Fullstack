import jwt from 'jsonwebtoken'
import { compare } from 'bcrypt'
import { AppDataSource } from '../../data-source'
import 'dotenv/config'
import { Repository } from 'typeorm'
import { AppError } from '../../errors/AppError'
import { IUserLogin } from '../../interfaces/user/user.interface'
import { User } from '../../entities/user.entity'

export interface ILoginResponse {
    token: string
    id: string
}

export const createSessionService = async ({email, password}: IUserLogin): Promise<ILoginResponse> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: email
    })
    
    if(!user){
        throw new AppError('User or password invalid', 403)
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch){
        throw new AppError('User or password invalid', 403)
    }

    const token:string = jwt.sign(
        {
            is_advertiser: user.is_advertiser
        },
        process.env.SECRET_KEY!,
        {
            subject: String(user.id), 
            expiresIn: '24h'
        }
    )

    let id = user.id

    return {
        token,
        id
    }
}