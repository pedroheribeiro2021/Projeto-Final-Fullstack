import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const getAnnouncementsUserService = async (userId: string) => {
  try {
    const response = await AppDataSource.getRepository(Announcement).find({
      relations: {
        brand: true,
        model: true,
        fuel: true,
        year: true,
        images: true,
        user: true,
      },
    });
    const userAnnouncements = response.filter((el) => el.user.id === userId);
    return userAnnouncements;
  } catch (err) {
    console.log(err);
  }
};
