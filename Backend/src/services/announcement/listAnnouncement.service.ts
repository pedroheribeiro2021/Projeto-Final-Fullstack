import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const listAnnouncementService = async () => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.find({
    relations: {
      // user: true,
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