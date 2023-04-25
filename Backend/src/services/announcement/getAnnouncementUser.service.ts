import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { User } from "../../entities/user.entity";

export const getAnnouncementsUserService = async (userId: string) => {
  const user = await AppDataSource.getRepository(User).findOneBy({
    id: userId,
  });
  try {
    const response = await AppDataSource.getRepository(Announcement).find({
      where: { user: !user },
      relations: {
        brand: true,
        model: true,
        fuel: true,
        year: true,
        images: true,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
