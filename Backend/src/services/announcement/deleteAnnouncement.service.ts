import { AppDataSource } from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

export const deleteAnnouncementService = async (id: string) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);

  const announcement = await announcementRepository.findOneBy({ id: id });

  await announcementRepository.remove(announcement!);
};
