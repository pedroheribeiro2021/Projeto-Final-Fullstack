import { randomUUID } from "crypto"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"
import { emailService } from "../../utils/sendEmail.utils"
import { hashSync } from "bcrypt"


export const sendResetEmailPasswordService = async(email: string, protocol: string, host: string) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: email
    })

    if(!user){
        throw new AppError("user not found", 404)
    }

    const resetToken = randomUUID()

    user.reset_token = resetToken

    await userRepository.save(user)

    const resetPasswordTemplate = emailService.resetPasswordTemplate(email, user.name, protocol, host, resetToken)

    await emailService.sendEmail(resetPasswordTemplate)

}

export const resetPasswordService = async (password: string, resetToken: string) => {

    const userRepository: any = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        reset_token: resetToken
    })

    if(!findUser){
        throw new AppError("user not found", 404)
    }

    const updatePassword = userRepository.create({
        ...findUser,
        password: password,
        reset_token: null
    })
    
    await userRepository.save(updatePassword)
}