import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const listAnnouncementService = async () => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.find({
    relations: {
<<<<<<< HEAD
      user: true,
=======
      // user: true,
>>>>>>> b6b1cb46fad1c008801b520b3a6c03544edb380e
      brand: true,
      model: true,
      year: true,
      fuel: true,
      images: true,
      // comments: true,
    },
  });

  return announcement;
};
