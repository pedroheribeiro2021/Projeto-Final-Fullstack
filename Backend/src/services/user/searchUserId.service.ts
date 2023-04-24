import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";


export const searchUserIdService = async (userId:string) => {
    try {
        const response = await AppDataSource.getRepository(User).findOneBy({id:userId});
        return response;
    } catch (error) {
        console.error(error);
    }
};